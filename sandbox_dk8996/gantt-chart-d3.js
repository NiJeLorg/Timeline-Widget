/**
 * @author Dimitry Kudrayvtsev
 * @version 2.1
 */

d3.gantt = function() {
    var FIT_TIME_DOMAIN_MODE = "fit";
    var FIXED_TIME_DOMAIN_MODE = "fixed";
    
    var margin = {
	    top : 10,
	    right : 10,
	    bottom : 10,
	    left : 0
    };
    var timeDomainStart = d3.time.day.offset(new Date(),-365);
    var timeDomainEnd = d3.time.hour.offset(new Date(),+365);
    var extentStart, extentEnd;
    var timeDomainMode = FIT_TIME_DOMAIN_MODE;// fixed or fit
    var taskTypes = [];
    var taskStatus = [];
    var timeDependentCategory = [];
    var height2 = 100;
    var height = document.body.clientHeight - height2 - margin.top - margin.bottom - 150;
    //var width = document.body.clientWidth - margin.right - margin.left - 40;
    var width = parseInt(d3.select("#chart_container").style("width")) - margin.right - margin.left - 40;
    
    var margin2 = {
        top : 10,
        right : 10,
        bottom : 10,
        left : 0
    };    

    var _tickFormat = "%b %d";
    
    var program_width = 60;

    var rectTransform = function(d) {
	    return "translate(" + x(d.startDate) + "," + (y(d.taskName) + (y.rangeBand() / d.stack_length) * (d.stack_index - 1) ) + ")";
    };

    var rectTransform2 = function(d) {
        return "translate(" + x(d.startDate) + "," + (y2(d.taskName) + (y2.rangeBand() / d.stack_length) * (d.stack_index - 1) ) + ")";
    };

    var x, y, xAxis, yAxis, x2, y2, xAxis2;

    var initTimeDomain = function(tasks) {
	    if (timeDomainMode === FIT_TIME_DOMAIN_MODE) {
	        if (tasks === undefined || tasks.length < 1) {
		        timeDomainStart = d3.time.day.offset(new Date(), -365);
		        timeDomainEnd = d3.time.hour.offset(new Date(), +365);
		        return;
	        }
	        tasks.sort(function(a, b) {
		        return a.endDate - b.endDate;
	        });
	        timeDomainEnd = tasks[tasks.length - 1].endDate;
	        tasks.sort(function(a, b) {
		        return a.startDate - b.startDate;
	        });
	        timeDomainStart = tasks[0].startDate;
            
            // Redefine Time line for only current year
            timeDomainStart = ganttTimelineStart;
            timeDomainEnd = ganttTimelineEnd;
            
	    }
    };

    var initAxis = function() {
	    x = d3.time.scale().domain([ timeDomainStart, timeDomainEnd ]).range([ 0, width - program_width ]).clamp(true);        
	    y = d3.scale.ordinal().domain(taskTypes).rangeRoundBands([ 0, height - margin.top - margin.bottom ], .1);
        
	    xAxis = d3.svg.axis().scale(x).orient("bottom").tickFormat(d3.time.format(_tickFormat)).tickSubdivide(true).tickSize(8).tickPadding(8);
	    yAxis = d3.svg.axis().scale(y).orient("left").tickSize(0);
        
        x2 = d3.time.scale().domain([ timeDomainStart, timeDomainEnd ]).range([ 0, width - program_width ]).clamp(true);
        y2 = d3.scale.ordinal().domain(taskTypes).rangeRoundBands([ 0, height2 - margin2.top - margin2.bottom ], .1);
        
        xAxis2 = d3.svg.axis().scale(x).orient("bottom").tickFormat(d3.time.format(_tickFormat)).tickSubdivide(true).tickSize(8).tickPadding(8);
        
        // Initialize extent Start and End for current quarter
        var d = new Date();
        var quarter = Math.floor((d.getMonth() / 3));
        var firstDate = new Date(d.getFullYear(), quarter * 3, 1);
        var endDate = new Date(firstDate.getFullYear(), firstDate.getMonth() + 3, 0);
        
        extentStart = firstDate;
        extentEnd = endDate;
    };
    
    var focus, context, brush;
    
    var tooltip = d3.select("body").append("div")   
        .attr("class", "tooltip")               
        .style("opacity", 0);    
    
    var dateFormat = d3.time.format("%b %d, %Y");
    
    var uniTasks = new Array(), tempTasks = new Array();
    
    function drawGanttChart(tasks) {
        focus.selectAll("rect").remove(); 
        
        focus.selectAll("rect")
            .data(tasks.filter(function(d){ 
                var filter_status = d.status;
                var task_type = uniTasks.filter(function(t) { return t.status == filter_status; });
                if(task_type.length == 1) {
                    if(task_type[0].active)
                        return true;
                }
                return false; 
            }))
            .enter()
            .append("rect")
            .attr("rx", 1)
            .attr("ry", 1)
            .attr("class", function(d){ 
                 if(taskStatus[d.status] == null){ return "bar";}
                 return taskStatus[d.status];
             }) 
            .attr("y", 0)
            .attr("transform", rectTransform)
            .attr("height", function(d) { 
                        return y.rangeBand() / d.stack_length; 
                    })
            .attr("width", function(d) { 
                return (x(d.endDate) - x(d.startDate)); 
            })
            .on("mouseover", function(d) { 
                var start = "", end = "", completed = "";
                if(d.startDate != null && d.startDate != "") {
                    start = dateFormat(d.startDate);
                }
                if(d.endDate != null && d.endDate != "") {
                    end = dateFormat(d.endDate);
                }
                if(d.completionDate != null && d.completionDate != "") {
                    completed = dateFormat(d.completionDate);
                }
                
                tooltip.html("<b>" + d.status + "</b>" + "<br />" + "Start:" +  start + "<br />" + "End:" + end +"<br />" + "Completed:" + completed + "<br />"+ d.description + "<br />" +  d.notes)  
                  .style("top", (d3.event.pageY-10)+"px")
                  .style("left",(d3.event.pageX+10)+"px");
                tooltip.transition()        
                  .duration(200)      
                  .style("opacity", .9); 
            })
            .on("mouseout", function(d) {
                tooltip.transition()        
                  .duration(200)      
                  .style("opacity", 0);
            });
    }
    
    function drawGanttBrushChart(tasks) {
        context.selectAll("rect").remove(); 
        
        context.selectAll("rect")
            .data(tasks).enter()
            .append("rect")
            .attr("rx", 1)
            .attr("ry", 1)
            .attr("class", function(d){ 
                 if(taskStatus[d.status] == null){ return "bar";}
                 return taskStatus[d.status];
             }) 
            .attr("y", 0)
            .attr("transform", rectTransform2)
            .attr("height", function(d) { 
                return y2.rangeBand() / d.stack_length; 
            })
            .attr("width", function(d) { 
                return (x(d.endDate) - x(d.startDate)); 
            });
    }
    
    function drawViewTabs(tasks) {
        // Timeline view ---
        d3.select("body").select("#chkAll")
            .on("click", function(){
                if(this.checked) {
                  d3.select("#task_status").selectAll("text").attr("class", "active");
                  for(var i = 0; i < uniTasks.length; i++) {
                      uniTasks[i].active = true;
                  }
                } else {
                  d3.select("#task_status").selectAll("text").attr("class", "inactive");  
                  for(var i = 0; i < uniTasks.length; i++) {
                      uniTasks[i].active = false;
                  }
                }
                drawGanttChart(tasks);
            });
        
        var tv_height = uniTasks.length / 2 * 21;
        var svg = d3.select("body").select("#task_status")
            .append("svg")
            .attr("height", tv_height);
            
        var legend = svg.selectAll(".legend")
          .data(uniTasks)
          .enter().append("g")
          .attr("class", "legend")
          .attr("transform", function(d, i) { 
              var tx = 0;
              if(i % 2 == 1) {
                  tx = width / 2 - 50;
              }
              return "translate(" + tx + "," + parseInt(i / 2, 10) * 20 + ")"; 
          });

        legend.append("rect")
          .attr("x", 18)
          .attr("width", 18)
          .attr("height", 18)
          .attr("class",function(d){return taskStatus[d.status];});

        legend.append("text")
          .data(uniTasks)
          .attr("class", "active")
          .attr("x", 40)
          .attr("y", 9)
          .attr("dy", ".35em")
          .style("text-anchor", "begin")
          .text(function(d) { return d.status; })
          .on("click", function(d, i){
              var curClass = d3.select(this).attr("class");
              if(curClass == "active") {
                  d3.select(this).attr("class", "inactive");
                  uniTasks[i].active = false;                  
              } else {
                  d3.select(this).attr("class", "active");
                  uniTasks[i].active = true;
              }
              drawGanttChart(tasks);
          });

    }
    
    function initStackValues(index, tasks) {
        tempTasks.push(index);
        
        for( var k = index + 1; k < tasks.length; k++) {
            if(!tasks[k].hasOwnProperty("stack_index")) {
                if(tasks[index].endDate > tasks[k].startDate && tasks[index].taskName == tasks[k].taskName) {
                    initStackValues(k, tasks);
                    //break;
                }
            }
        }
    }
    
    function gantt(tasks) {
	
	    initTimeDomain(tasks);
	    initAxis();
        
        // init Local Values
        uniTasks = [];
        for (var i = 0; i < tasks.length; i++){
            delete tasks[i]["stack_index"];
            delete tasks[i]["stack_length"];
        }
        
        // Get Unique tasks and stack values
        for (var i = 0; i < tasks.length; i++){
            uniTasks.push({"status": tasks[i].status, "active": true});
            
            if(!tasks[i].hasOwnProperty("stack_index")) {
                tempTasks = [];
                initStackValues(i, tasks);
                tempTasks = getUniqueValues(tempTasks);
                for(var j = 0;j < tempTasks.length; j++) {
                    tasks[tempTasks[j]].stack_index = j + 1;
                    tasks[tempTasks[j]].stack_length = tempTasks.length;
                } 
            }
        }
        uniTasks = checkUnique(uniTasks);  
        
	    var svg = d3.select("body").select("#chart")
	        .append("svg")
	        .attr("width", width)
	        .attr("height", height + margin.top + margin.bottom + height2 + margin2.top + margin2.bottom);
            
        svg.append("defs").append("clipPath")
            .attr("id", "clip")
            .append("rect")
            .attr("width", width)
            .attr("height", height);
        
	    focus = svg.append("g")
            .attr("class", "gantt-chart focus")
            //.attr("width", width)
	        .attr("transform", "translate(" + program_width + ", " + margin.top + ")");
            
        context = svg.append("g")
            .attr("class", "context")
            //.attr("width", width)
            .attr("transform", "translate(" + program_width + "," + (margin2.top + height + margin.top + margin.bottom) + ")");
            
        brush = d3.svg.brush()
            .x(x2)
            .extent([extentStart, extentEnd])
            .on("brush", function() {
                x.domain(brush.empty() ? x2.domain() : brush.extent());
                
                drawGanttChart(tasks);
 
                focus.select(".x.axis").call(xAxis);
            });
        // 
            
        drawGanttChart(tasks);
            
        focus.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0, " + (height - margin.top - margin.bottom) + ")")
            .transition();
            //.call(xAxis);

        focus.append("g").attr("class", "y axis").transition().call(yAxis);
	     
        drawGanttBrushChart(tasks);

        context.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + (height2 - margin2.top - margin2.bottom) + ")")
            .transition()
            .call(xAxis2);
            
        context.append("g")
            .attr("class", "x brush")
            .call(brush)
            .selectAll("rect")
            .attr("y", -6)
            .attr("height", height2 - margin2.top - margin2.bottom + 7);

        // Draw view tabs for timeline and action
        drawViewTabs(tasks);
        
        // Extent Brush Sync for first chart
        x.domain(brush.empty() ? x2.domain() : brush.extent());
        drawGanttChart(tasks);
        focus.select(".x.axis").call(xAxis);
        
        return gantt;

    };
    
    function checkUnique(arr) {
        var hash = {}, result = [];
        for ( var i = 0, l = arr.length; i < l; ++i ) {
            if ( !hash.hasOwnProperty(arr[i].status) ) { //it works with objects! in FF, at least
                hash[ arr[i].status ] = true;
                result.push(arr[i]);
            }
        }
        return result;
    }
    function getUniqueValues(arr) {
        var hash = {}, result = [];
        for ( var i = 0, l = arr.length; i < l; ++i ) {
            if ( !hash.hasOwnProperty(arr[i]) ) { //it works with objects! in FF, at least
                hash[ arr[i] ] = true;
                result.push(arr[i]);
            }
        }
        return result;
    }

    gantt.margin = function(value) {
	    if (!arguments.length)
	        return margin;
	    margin = value;
	    return gantt;
    };

    gantt.timeDomain = function(value) {
	    if (!arguments.length)
	        return [ timeDomainStart, timeDomainEnd ];
	    timeDomainStart = +value[0], timeDomainEnd = +value[1];
	    return gantt;
    };

    /**
     * @param {string}
     *                vale The value can be "fit" - the domain fits the data or
     *                "fixed" - fixed domain.
     */
    gantt.timeDomainMode = function(value) {
	if (!arguments.length)
	    return timeDomainMode;
        timeDomainMode = value;
        return gantt;
    };

    gantt.taskTypes = function(value) {
	    if (!arguments.length)
	        return taskTypes;
	    taskTypes = value;
	    return gantt;
    };
    
    gantt.taskStatus = function(value) {
	    if (!arguments.length)
	        return taskStatus;
	    taskStatus = value;
	    return gantt;
    };
    
    gantt.timeDependentCategory = function(value) {
	    if (!arguments.length)
	        return timeDependentCategory;
	    timeDependentCategory = value;
	    return gantt;
    };
    
    gantt.width = function(value) {
	    if (!arguments.length)
	        return width;
	    width = +value;
	    return gantt;
    };

    gantt.height = function(value) {
	    if (!arguments.length)
	        return height;
	    height = +value;
	    return gantt;
    };

    gantt.tickFormat = function(value) {
	    if (!arguments.length)
	        return tickFormat;
	    tickFormat = value;
	    return gantt;
    };
    
    return gantt;
};

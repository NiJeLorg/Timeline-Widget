/**
 * @author Dimitry Kudrayvtsev
 * @version 2.1
 */

d3.gantt = function() {
    var FIT_TIME_DOMAIN_MODE = "fit";
    var FIXED_TIME_DOMAIN_MODE = "fixed";
    
    var margin = {
	    top : 20,
	    right : 40,
	    bottom : 20,
	    left : 150
    };
    var timeDomainStart = d3.time.day.offset(new Date(),-365);
    var timeDomainEnd = d3.time.hour.offset(new Date(),+365);
    var timeDomainMode = FIT_TIME_DOMAIN_MODE;// fixed or fit
    var taskTypes = [];
    var taskStatus = [];
    var timeDependentCategory = [];
    var height2 = 100;
    var height = (document.body.clientHeight / 2) - height2 - margin.top - margin.bottom - 50;
    var width = (document.body.clientWidth / 2) - margin.right - margin.left-5;
    
    var margin2 = {
        top : 20,
        right : 40,
        bottom : 20,
        left : 150
    };    

    var _tickFormat = "%b %d";

    var rectTransform = function(d) {
	    return "translate(" + x(d.startDate) + "," + y(d.taskName) + ")";
        console.log("right here");
    };

    var rectTransform2 = function(d) {
        return "translate(" + x(d.startDate) + "," + y2(d.taskName) + ")";
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
	    }
    };

    var initAxis = function() {
	    x = d3.time.scale().domain([ timeDomainStart, timeDomainEnd ]).range([ 0, width ]).clamp(true);        
	    y = d3.scale.ordinal().domain(taskTypes).rangeRoundBands([ 0, height - margin.top - margin.bottom ], .1);
        
	    xAxis = d3.svg.axis().scale(x).orient("bottom").tickFormat(d3.time.format(_tickFormat)).tickSubdivide(true).tickSize(8).tickPadding(8);
	    yAxis = d3.svg.axis().scale(y).orient("left").tickSize(0);
        
        x2 = d3.time.scale().domain([ timeDomainStart, timeDomainEnd ]).range([ 0, width ]).clamp(true);
        y2 = d3.scale.ordinal().domain(taskTypes).rangeRoundBands([ 0, height2 - margin2.top - margin2.bottom ], .1);
        
        xAxis2 = d3.svg.axis().scale(x).orient("bottom").tickFormat(d3.time.format(_tickFormat)).tickSubdivide(true).tickSize(8).tickPadding(8);
    };
    
    var focus, context, brush;
    
    var tooltip = d3.select("body").append("div")   
        .attr("class", "tooltip")               
        .style("opacity", 0);
    
    var dateFormat = d3.time.format("%b %d, %Y");
    
    function drawGanttChart(tasks) {
        focus.selectAll("rect")
            .data(tasks).enter()
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
                        return y.rangeBand(); 
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
    
    function gantt(tasks) {
	
	    initTimeDomain(tasks);
	    initAxis();
        
	    var svg = d3.select("body")
	        .append("svg")
	        .attr("class", "chart")
	        .attr("width", width + margin.left + margin.right)
	        .attr("height", height + margin.top + margin.bottom + height2 + margin2.top + margin2.bottom);
            
        svg.append("defs").append("clipPath")
            .attr("id", "clip")
            .append("rect")
            .attr("width", width)
            .attr("height", height);
            
	    focus = svg.append("g")
            .attr("class", "gantt-chart focus")
	        .attr("transform", "translate(" + margin.left + ", " + margin.top + ")");
            
        context = svg.append("g")
            .attr("class", "context")
            .attr("transform", "translate(" + margin2.left + "," + (margin2.top + height + margin.top + margin.bottom) + ")");
            
        brush = d3.svg.brush()
            .x(x2)
            .on("brush", function() {
                x.domain(brush.empty() ? x2.domain() : brush.extent());
                      
                focus.selectAll("rect").remove();   
                
                drawGanttChart(tasks);
 
                focus.select(".x.axis").call(xAxis);
            });
            
        drawGanttChart(tasks);
            
        focus.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0, " + (height - margin.top - margin.bottom) + ")")
            .transition()
            .call(xAxis);

        focus.append("g").attr("class", "y axis").transition().call(yAxis);
	     
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
            .attr("height", function(d) { return y2.rangeBand(); })
            .attr("width", function(d) { 
                return (x(d.endDate) - x(d.startDate)); 
            });

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

        return gantt;

    };
    
    /*
    gantt.redraw = function(tasks) {

	    initTimeDomain(tasks);
	    initAxis();
	
        var svg = d3.select("svg");

        var ganttChartGroup = svg.select(".gantt-chart");
        var rect = ganttChartGroup.selectAll("rect").data(tasks, keyFunction);
        console.log("enter");
        rect.enter()
         .insert("rect",":first-child")
         .attr("rx", 1)
         .attr("ry", 1)
	     .attr("class", function(d){ 
	         if(taskStatus[d.status] == null){ return "bar";}
	         return taskStatus[d.status];
	     }) 
	     .transition()
	     .attr("y", 0)
	     .attr("transform", rectTransform)
	     .attr("height", function(d) { return y.rangeBand(); })
	     .attr("width", function(d) { 
	        return (x(d.endDate) - x(d.startDate)); 
	     });

        rect.transition()
          .attr("transform", rectTransform)
	      .attr("height", function(d) { return y.rangeBand() / 2; })
	      .attr("width", function(d) { 
	            return (x(d.endDate) - x(d.startDate)); 
	     });
        
	    rect.exit().remove();

	    svg.select(".x").transition().call(xAxis);
	    svg.select(".y").transition().call(yAxis);
	    
	    return gantt;
    };
    */

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

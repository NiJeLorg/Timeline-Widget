  var w = 800;
  var h = 400;

  w = window.innerWidth - 20;
  h = window.innerHeight - 20;

  var svg = d3.selectAll(".svg")
  //.selectAll("svg")
  .append("svg")
  .attr("width", w)
  .attr("height", h)
  .attr("class", "svg");


    var taskArray = [
  {
    "status": "Partner Reports",
    "taskName": "Program 1",
    //"startDate": "2013-1-28", //year/month/day
    //"endDate": "2013-2-1"
    "startDate": "Dec 14 08:40:11 EST 2014",
    "endDate": "Dec 18 08:46:35 EST 2014"
},
        {
    "status": "Donor Report",
    "taskName": "Program 1",
    //"startDate": "2013-1-28", //year/month/day
    //"endDate": "2013-2-1"
    "startDate": "Dec 14 08:40:11 EST 2014",
    "endDate": "Dec 18 08:46:35 EST 2014"
},


{
    "status": "Market Assessments",
    "taskName": "Program 4",
    //"startDate": "2013-1-28",
    //"endDate": "2013-2-6"
    "startDate": "Dec 11 23:12:24 EST 2014",
    "endDate": "Dec 15 00:26:13 EST 2014"
}


];

var taskStatus = {
    "Partner Reports" : "bar-partnerReports",
    "Donor Report" : "bar-donorReport",
    "Donor Visit" 	: "bar-donorVisit",
    "Donor Initiative Disbursements": "bar-donorInitiative",
    "Parntner Field Monitoring Visit": "partnerFieldVisit",
    "Partner Audit": "bar-partnerAudit",
    "Baseline Survey": "bar-baselineSurvey",
    "End-line Survey": "bar-endlineSurvey",
    "Post-line Survey": "bar-postlineSurvey",
    "Partner Disbursement": "bar-partnerDisbursement",
    "Market Assessments": "bar-marketAssessments",
    "Convenings" : "bar-convenings",
    "Event" : "bar-event",
    "WaterPortal Updates" : "bar-waterPortalUpdates",
    "Mitigation Plans": "bar-mitigationPlans",
    "General" : "bar-general"
    				
};


var taskNames = [ 
	"Program 1", 
	"Program 2", 
	"Program 3", 
	"Program 4", 
	"Program 5", 
	"Program 6"
	
];

//var dateFormat = d3.time.format("%Y-%m-%d");
var dateFormat = d3.time.format("%b %d %H:%M:%S EST %Y");

var timeScale = d3.time.scale()
        .domain([d3.min(taskArray, function(d) {return dateFormat.parse(d.startDate);}),
                 d3.max(taskArray, function(d) {return dateFormat.parse(d.endDate);})])
        .range([0,w]);


var categories = new Array();

for (var i = 0; i < taskArray.length; i++){
    categories.push(taskArray[i].taskName);
}

var catsUnfiltered = categories; //for vert labels

categories = checkUnique(categories);
//categories = taskNames;

makeGant(taskArray, w, h);

var title = svg.append("text")
              .text("Timeline Widget")
              .attr("x", w/2)
              .attr("y", 25)
              .attr("text-anchor", "middle")
              .attr("font-size", 18)
              .attr("fill", "#009FFC");



function makeGant(tasks, pageWidth, pageHeight){

var barHeight = 30;
var gap = barHeight;
var topPadding = 75;
var sidePadding = 75;

var colorScale = d3.scale.linear()
    .domain([0, categories.length])
    .range(["#00B9FA", "#F95002"])
    .interpolate(d3.interpolateHcl);

makeGrid(sidePadding, topPadding, pageWidth, pageHeight);
drawRects(tasks, gap, topPadding, sidePadding, barHeight, colorScale, pageWidth, pageHeight);
vertLabels(gap, topPadding, sidePadding, barHeight, colorScale);

}


function drawRects(theArray, theGap, theTopPad, theSidePad, theBarHeight, theColorScale, w, h){

var bigRects = svg.append("g")
    .selectAll("rect")
   .data(theArray)
   .enter()
   .append("rect")
   .attr("x", 0)
   .attr("y", function(d, i){
      return i*theGap + theTopPad - 2;
  })
   .attr("width", function(d){
      return w-theSidePad/2;
   })
   .attr("height", theGap)
   .attr("stroke", "none")
   .attr("opacity", 0.1)
   .attr("fill", function(d){
    for (var i = 0; i < categories.length; i++){
        if (d.taskName == categories[i]){
          return d3.rgb(theColorScale(i));
        }
    }
   });
   


     var rectangles = svg.append('g')
     .selectAll("rect")
     .data(theArray)
     .enter();


   var innerRects = rectangles.append("rect")
             .attr("rx", 3)
             .attr("ry", 3)
             .attr("x", function(d){
              return timeScale(dateFormat.parse(d.startDate)) + theSidePad;
              })
             .attr("y", function(d, i){
                return i*theGap + theTopPad;
            })
             .attr("width", function(d){
                return (timeScale(dateFormat.parse(d.endDate))-timeScale(dateFormat.parse(d.startDate)));
             })
             .attr("height", theBarHeight)
             .attr("stroke", "none")
             .attr("class", function(d){
                        return taskStatus[d.status];
                   });
             /*
             .attr("fill", function(d){
              for (var i = 0; i < categories.length; i++){
                  if (d.taskName == categories[i]){
                    return d3.rgb(theColorScale(i));
                  }
              }
             });
             */
/*
         var rectText = rectangles.append("text")
               .text(function(d){
                return d.taskName;
               })
               .attr("x", function(d){
                return (timeScale(dateFormat.parse(d.endDate))-timeScale(dateFormat.parse(d.startDate)))/2 + timeScale(dateFormat.parse(d.startDate)) + theSidePad;
                })
               .attr("y", function(d, i){
                  return i*theGap + 14+ theTopPad;
              })
               .attr("font-size", 11)
               .attr("text-anchor", "middle")
               .attr("text-height", theBarHeight)
               .attr("fill", "#fff");   



rectText.on('mouseover', function(e) {
 // console.log(this.x.animVal.getItem(this));
               var tag = "";

         if (d3.select(this).data()[0].details != undefined){
          tag = "Task: " + d3.select(this).data()[0].taskName + "<br/>" + 
                "Starts: " + d3.select(this).data()[0].startDate + "<br/>" + 
                "Ends: " + d3.select(this).data()[0].endDate + "<br/>" + 
                "Details: " + d3.select(this).data()[0].details;
         } else {
          tag = "Task: " + d3.select(this).data()[0].taskName + "<br/>" + 
                "Starts: " + d3.select(this).data()[0].startDate + "<br/>" + 
                "Ends: " + d3.select(this).data()[0].endDate;
         }
         var output = document.getElementById("tag");

          var x = this.x.animVal.getItem(this) + "px";
          var y = this.y.animVal.getItem(this) + 25 + "px";

         output.innerHTML = tag;
         output.style.top = y;
         output.style.left = x;
         output.style.display = "block";
       }).on('mouseout', function() {
         var output = document.getElementById("tag");
         output.style.display = "none";
             });
*/

innerRects.on('mouseover', function(e) {
 //console.log(this);
         var tag = "";

         if (d3.select(this).data()[0].details != undefined){
          tag = "Status: " + d3.select(this).data()[0].status + "<br/>" + 
                "Starts: " + d3.select(this).data()[0].startDate + "<br/>" + 
                "Ends: " + d3.select(this).data()[0].endDate + "<br/>" + 
                "Details: " + d3.select(this).data()[0].details;
         } else {
          tag = "Status: " + d3.select(this).data()[0].status + "<br/>" + 
                "Starts: " + d3.select(this).data()[0].startDate + "<br/>" + 
                "Ends: " + d3.select(this).data()[0].endDate;
         }
         var output = document.getElementById("tag");

         var x = (this.x.animVal.value + this.width.animVal.value/2) + "px";
         var y = this.y.animVal.value + 25 + "px";

         output.innerHTML = tag;
         output.style.top = y;
         output.style.left = x;
         output.style.display = "block";
       }).on('mouseout', function() {
         var output = document.getElementById("tag");
         output.style.display = "none";

 });



}


function makeGrid(theSidePad, theTopPad, w, h){

    var xAxis = d3.svg.axis()
        .scale(timeScale)
        .orient('bottom')
        .ticks(d3.time.days, 1)
        .tickSize(-h+theTopPad+20, 0, 0)
        .tickFormat(d3.time.format('%d %b'));

    var grid = svg.append('g')
        .attr('class', 'grid')
        .attr('transform', 'translate(' +theSidePad + ', ' + (h) + ')')
        .call(xAxis)
        .selectAll("text")  
                .style("text-anchor", "middle")
                .attr("fill", "#000")
                .attr("stroke", "none")
                .attr("font-size", 12)
                .attr("dy", "1em");

                
}

function vertLabels(theGap, theTopPad, theSidePad, theBarHeight, theColorScale){
  var numOccurances = new Array();
  var prevGap = 0;

  for (var i = 0; i < categories.length; i++){
    numOccurances[i] = [categories[i], getCount(categories[i], catsUnfiltered)];
  }

  var axisText = svg.append("g") //without doing this, impossible to put grid lines behind text
   .selectAll("text")
   .data(numOccurances)
   .enter()
   .append("text")
   .text(function(d){
    return d[0];
   })
   .attr("x", 10)
   .attr("y", function(d, i){
    if (i > 0){
        for (var j = 0; j < i; j++){
          prevGap += numOccurances[i-1][1];
         // console.log(prevGap);
          return d[1]*theGap/2 + prevGap*theGap + theTopPad;
        }
    } else{
    return d[1]*theGap/2 + theTopPad;
    }
   })
   .attr("font-size", 16)
   .attr("text-anchor", "start")
   .attr("text-height", 14)
   .attr("fill", function(d){
    for (var i = 0; i < categories.length; i++){
        if (d[0] == categories[i]){
        //  console.log("true!");
          return d3.rgb(theColorScale(i)).darker();
        }
    }
   });

}

//from this stackexchange question: http://stackoverflow.com/questions/1890203/unique-for-arrays-in-javascript
function checkUnique(arr) {
    var hash = {}, result = [];
    for ( var i = 0, l = arr.length; i < l; ++i ) {
        if ( !hash.hasOwnProperty(arr[i]) ) { //it works with objects! in FF, at least
            hash[ arr[i] ] = true;
            result.push(arr[i]);
        }
    }
    return result;
}

//from this stackexchange question: http://stackoverflow.com/questions/14227981/count-how-many-strings-in-an-array-have-duplicates-in-the-same-array
function getCounts(arr) {
    var i = arr.length, // var to loop over
        obj = {}; // obj to store results
    while (i) obj[arr[--i]] = (obj[arr[i]] || 0) + 1; // count occurrences
    return obj;
}

// get specific from everything
function getCount(word, arr) {
    return getCounts(arr)[word] || 0;
}
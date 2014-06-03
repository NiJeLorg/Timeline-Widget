example();

function example() {


//JSON
var tasks = [
		
				
		{
		"startDate":new Date("Dec 09 01:36:45 EST 2014"),
		"endDate":new Date("Dec 10 02:36:45 EST 2014"),
		//"completionDate":new Date("Dec 13 02:36:45 EST 2014"),
		"taskName":"Program 3",
		"status":"Donor Report"
		//"description" : "Description",
		//"notes" : "Notes"
		},
		 {
		"startDate":new Date("Dec 10 01:36:45 EST 2014"),
		"endDate":new Date("Dec 10 02:36:45 EST 2014"),
		//"completionDate":new Date("Dec 11 02:36:45 EST 2014"),
		"taskName":"Program 3",
		"status":"Partner Reports"
		//"description" : "Description",
		//"notes" : "Notes"
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


//Set up stack method
// 			var stack = d3.layout.stack();

			//Data, stacked
			// stack(tasks);
tasks.sort(function(a, b) {
    return a.endDate - b.endDate;
});
var maxDate = tasks[tasks.length - 1].endDate;
tasks.sort(function(a, b) {
    return a.startDate - b.startDate;
});
var minDate = tasks[0].startDate;

var format = "%m/%d";
var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 160 - margin.left - margin.right,
    height = 160 - margin.top - margin.bottom;

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var color = d3.scale.ordinal()
    .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

  var legend = svg.selectAll(".legend")
      .data(color)
    .enter().append("g")
      .attr("class", "legend")
      .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

  legend.append("rect")
      .attr("x", width - 18)
      .attr("width", 18)
      .attr("height", 18)
      .style("fill", color);

  legend.append("taskNames", [])
      .attr("x", width - 24)
      .attr("y", 9)
      .attr("dy", ".35em")
      .style("text-anchor", "end")
      .text(function(d) { return d; });


var gantt = d3.gantt().taskTypes(taskNames).taskStatus(taskStatus).tickFormat(format);
gantt(tasks);

};


example();

function example() {


//JSON
var tasks = [
		
		
	{
"startDate":new Date("Dec 09 2014"),
"endDate":new Date("Dec 10 2014"),
"completionDate":new Date("Dec 11 2014"),
"taskName":"Program 3",
"status":"WaterPortal Updates",
"description" : "Description",
"notes" : "Notes"
}
,

{
"startDate":new Date("Dec 10 2014"),
"endDate":new Date("Dec 11 2014"),
"completionDate":new Date("Dec 13 2014"),
"taskName":"Program 6",
"status":"Donor Report",
"description" : "Description",
"notes" : "Notes"
}
,

{
"startDate":new Date("Dec 9 2014"),
"endDate":new Date("Dec 10 2014"),
"completionDate":new Date("Dec 14 2014"),
"taskName":"Program 1",
"status":"Event",
"description" : "Description",
"notes" : "Notes"
}
,

{
"startDate":new Date("Dec 13 2014"),
"endDate":new Date("Dec 14 2014"),
"completionDate":new Date("Dec 15 2014"),
"taskName":"Program 2",
"status":"Donor Initiative Disbursements",
"description" : "Description",
"notes" : "Notes"
}
,

{
"startDate":new Date("Dec 13 2014"),
"endDate":new Date("Dec 14 2014"),
"completionDate":new Date("Dec 16 2014"),
"taskName":"Program 6",
"status":"Partner Reports",
"description" : "Description",
"notes" : "Notes"

}
,

{
"startDate":new Date("Dec 11 2014"),
"endDate":new Date("Dec 12 2014"),
"completionDate":new Date("Dec 14 2014"),
"taskName":"Program 2",
"status":"General",
"description" : "Description",
"notes" : "Notes"
}
,

{
"startDate":new Date("Dec 09 04:02:45 EST 2013"),
"endDate":new Date("Dec 13 04:48:56 EST 2013"),
//"completionDate":new Date("Dec 17 02:36:45 EST 2014"),
"taskName":"Program 5",
"status":"End-line Survey",
//"description" : "Description",
//"notes" : "Notes"
},

{
"startDate":new Date("Dec 09 03:27:35 EST 2014"),
"endDate":new Date("Dec 14 03:58:43 EST 2014"),
//"completionDate":new Date("Dec 15 02:36:45 EST 2014"),
"taskName":"Program 3",
"status":"Donor Initiative Disbursements",
//"description" : "Description",
//"notes" : "Notes"
},

{
"startDate":new Date("Dec 08 2014"),
"endDate":new Date("Dec 09 2014"),
"completionDate":new Date("Dec 11 2014"),
"taskName":"Program 4",
"status":"Convenings",
"description" : "Description",
"notes" : "Notes"
}
,
{
"startDate":new Date("Dec 11 2014"),
"endDate":new Date("Dec 12 2014"),
"completionDate":new Date("Dec 12 2014"),
"taskName":"Program 4",
"status":"Donor Visit",
"description" : "Description",
"notes" : "Notes"
}
,
{
"startDate":new Date("Dec 07 2014"),
"endDate":new Date("Dec 08 2014"),
"completionDate": new Date("Dec 08 2014"),
"taskName":"Program 2",
"status":"Market Assessments",
"description" : "Description",
"notes" : "Notes"
}
,

{
"startDate":new Date("Dec 15 2014"),
"endDate":new Date("Dec 15 2014"),
"completionDate":new Date("Dec 19 2014"),
"taskName":"Program 2",
"status":"Donor Visit",
"description" : "Description",
"notes" : "Notes"
}
,

{
"startDate":new Date("Dec 09 2014"),
"endDate":new Date("Dec 14 2014"),
"completionDate":new Date("Dec 17 2014"),
"taskName":"Program 5",
"status":"Baseline Survey",
"description" : "Description",
"notes" : "Notes"
}
,

{
"startDate":new Date("Dec 11 2014"),
"endDate":new Date("Dec 14 2014"),
"completionDate":new Date("Dec 2014"),
"taskName":"Program 3",
"status":"Partner Field Monitoring Visit",
"description" : "Description",
"notes" : "Notes"
}
,

{
"startDate":new Date("Dec 13 2014"),
"endDate":new Date("Dec 16 2014"),
"completionDate":new Date("Dec 19 2014"),
"taskName":"Program 1",
"status":"Partner Disbursement",
"description" : "Description",
"notes" : "Notes"
}
,

{
"startDate":new Date("Dec 09 2014"),
"endDate":new Date("Dec 16 2014"),
"completionDate":new Date("Dec 19 2014"),
"taskName":"Program 2",
"status":"End-line Survey",
"description" : "Description",
"notes" : "Notes"
}
,

{
"startDate":new Date("Dec 12 2014"),
"endDate":new Date("Dec 14 2014"),
"completionDate":new Date("Dec 16 02:36:45 EST 2014"),
"taskName":"Program 1",
"status":"Donor Report",
"description" : "Description",
"notes" : "Notes"
},

{
"startDate":new Date("Dec 10 2014"),
"endDate":new Date("Dec 12 2014"),
"completionDate":new Date("Dec 12 2014"),
"taskName":"Program 2",
"status":"Mitigation Plans",
"description" : "Description",
"notes" : "Notes"
}
,

{
"startDate":new Date("Dec 18 09:02:45 EST 2015"),
"endDate":new Date("Dec 20 09:48:56 EST 2015"),
//"completionDate":new Date("Dec 21 02:36:45 EST 2014"),
"taskName":"Program 5",
"status":"Partner Audit"
//"description" : "Description",
//"notes" : "Notes"
}
,
{
"startDate":new Date("Dec 15 2014"),
"endDate":new Date("Dec 18 2014"),
"completionDate":new Date("Dec 20 2014"),
"taskName":"Program 5",
"status":"WaterPortal Updates",
"description" : "Description",
"notes" : "Notes"

}
,

{
"startDate":new Date("Dec 14 2014"),
"endDate":new Date("Dec 18 2014"),
"completionDate":new Date("Dec 19 2014"),
"taskName":"Program 4",
"status":"Post-line Survey",
"description" : "Description",
"notes" : "Notes"
}
,
{
"startDate":new Date("Dec 07 2014"),
"endDate":new Date("Dec 11 2014"),
"completionDate":new Date("Dec 11 2014"),
"taskName":"Program 6",
"status":"End-line Survey",
"description" : "Description",
"notes" : "Notes"
}
,
// {
// "startDate":new Date("Dec 18 10:21:00 EST 2014"),
// "endDate":new Date("Dec 20 10:51:42 EST 2014"),
// //"completionDate":new Date("Dec 22 02:36:45 EST 2014"),
// "taskName":"Program 2",
// "status":"Partner Disbursement"
// //"description" : "Description",
// //"notes" : "Notes"
// }
// ,
// {
// "startDate":new Date("Dec 20 11:08:42 EST 2014"),
// "endDate":new Date("Dec 20 11:33:42 EST 2014"),
// //"completionDate":new Date("Dec 21 02:36:45 EST 2014"),
// "taskName":"Program 5",
// "status":"End-line Survey"
// //"description" : "Description",
// //"notes" : "Notes"
// }
// ,
// {
// "startDate":new Date("Dec 09 12:27:15 EST 2014"),
// "endDate":new Date("Dec 20 12:54:56 EST 2014"),
// //"completionDate":new Date("Dec 21 02:36:45 EST 2014"),
// "taskName":"Program 3",
// "status":"Donor Visit"
// //"description" : "Description",
// //"notes" : "Notes"
// }
// ,
// {
// "startDate":new Date("Dec 08 23:12:24 EST 2014"),
// "endDate":new Date("Dec 09 00:26:13 EST 2014"),
// //"completionDate":new Date("Dec 11 02:36:45 EST 2014"),
// "taskName":"Program 4",
// "status":"Donor Report"
// //"description" : "Description",
// //"notes" : "Notes"
// }

		
		
];

var taskStatus = {
    "Partner Reports" : "bar-partnerReports",
    "Donor Report" : "bar-donorReport",
    "Donor Visit" 	: "bar-donorVisit",
    "Donor Initiative Disbursements": "bar-donorInitiative",
    "Partner Field Monitoring Visit": "bar-partnerFieldVisit",
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
//for legend:
// var svg = d3.select("body").append("svg")
//     .attr("width", width + margin.left + margin.right)
//     .attr("height", height + margin.top + margin.bottom)
//   .append("g")
//     .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
// 
// var color = d3.scale.ordinal()
//     .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);
// 
//   var legend = svg.selectAll(".legend")
//       .data(color)
//     .enter().append("g")
//       .attr("class", "legend")
//       .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });
// 
//   legend.append("rect")
//       .attr("x", width - 18)
//       .attr("width", 18)
//       .attr("height", 18)
//       .style("fill", color);
// 
//   legend.append("taskNames", [])
//       .attr("x", width - 24)
//       .attr("y", 9)
//       .attr("dy", ".35em")
//       .style("text-anchor", "end")
//       .text(function(d) { return d; });

var gantt = d3.gantt().taskTypes(taskNames).taskStatus(taskStatus).tickFormat(format);
gantt(tasks);

};


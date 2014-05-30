example();

function example() {

var tasks = [
		
		 {
		"startDate":new Date("Dec 09 01:36:45 EST 2014"),
		"endDate":new Date("Dec 10 02:36:45 EST 2014"),
		//"completionDate":new Date("Dec 11 02:36:45 EST 2014"),
		"taskName":"Program 3",
		"status":"Partner Reports"
		//"description" : "Description",
		//"notes" : "Notes"
		},
		
		{
		"startDate":new Date("Dec 09 04:56:32 EST 2014"),
		"endDate":new Date("Dec 11 06:35:47 EST 2014"),
		//"completionDate":new Date("Dec 13 02:36:45 EST 2014"),
		"taskName":"Program 6",
		"status":"Donor Report"
		//"description" : "Description",
		//"notes" : "Notes"
		},
		
		{
		"startDate":new Date("Dec 10 06:29:53 EST 2014"),
		"endDate":new Date("Dec 12 06:34:04 EST 2014"),
		//"completionDate":new Date("Dec 14 02:36:45 EST 2014"),
		"taskName":"Program 1",
		"status":"Donor Initiative Disbursements"
		//"description" : "Description",
		//"notes" : "Notes"
		},
		
		{
		"startDate":new Date("Dec 13 05:35:21 EST 2014"),
		"endDate":new Date("Dec 14 06:21:22 EST 2014"),
		//"completionDate":new Date("Dec 15 02:36:45 EST 2014"),		
		"taskName":"Program 2",
		"status":"Donor Initiative Disbursements"
		//"description" : "Description",
		//"notes" : "Notes"
		},
		
		{
		"startDate":new Date("Dec 13 05:00:06 EST 2014"),
		"endDate":new Date("Dec 14 05:05:07 EST 2014"),
		//"completionDate":new Date("Dec 16 02:36:45 EST 2014"),		
		"taskName":"Program 6",
		"status":"WaterPortal Updates"
		//"description" : "Description",
		//"notes" : "Notes"
		
		},
		
		{
		"startDate":new Date("Dec 11 03:46:59 EST 2014"),
		"endDate":new Date("Dec 13 04:54:19 EST 2014"),
		//"completionDate":new Date("Dec 14 02:36:45 EST 2014"),		
		"taskName":"Program 2",
		"status":"General"
		//"description" : "Description",
		//"notes" : "Notes"
		},
		
		{
		"startDate":new Date("Dec 09 04:02:45 EST 2014"),
		"endDate":new Date("Dec 13 04:48:56 EST 2014"),
		//"completionDate":new Date("Dec 17 02:36:45 EST 2014"),
		"taskName":"Program 5",
		"status":"End-line Survey"
		//"description" : "Description",
		//"notes" : "Notes"
		},
		
		{
		"startDate":new Date("Dec 09 03:27:35 EST 2014"),
		"endDate":new Date("Dec 14 03:58:43 EST 2014"),
		//"completionDate":new Date("Dec 15 02:36:45 EST 2014"),
		"taskName":"Program 3",
		"status":"Donor Initiative Disbursements"
		//"description" : "Description",
		//"notes" : "Notes"
		},
		
		{
		"startDate":new Date("Dec 09 01:40:11 EST 2014"),
		"endDate":new Date("Dec 10 03:26:35 EST 2014"),
		//"completionDate":new Date("Dec 11 02:36:45 EST 2014"),
		"taskName":"Program 4",
		"status":"Convenings"
		//"description" : "Description",
		//"notes" : "Notes"
		},
		
		{
		"startDate":new Date("Dec 13 03:00:03 EST 2014"),
		"endDate":new Date("Dec 15 03:09:51 EST 2014"),
		//"completionDate":new Date("Dec 18 02:36:45 EST 2014"),
		"taskName":"Program 1",
		"status":"Market Assessments"
		//"description" : "Description",
		//"notes" : "Notes"
		},
		
		{
		"startDate":new Date("Dec 15 01:21:00 EST 2014"),
		"endDate":new Date("Dec 15 02:51:42 EST 2014"),
		//"completionDate":new Date("Dec 19 02:36:45 EST 2014"),
		"taskName":"Program 2",
		"status":"Donor Report"
		//"description" : "Description",
		//"notes" : "Notes"
		},
		
		{
		"startDate":new Date("Dec 09 01:08:42 EST 2014"),
		"endDate":new Date("Dec 14 01:33:42 EST 2014"),
		//"completionDate":new Date("Dec 17 02:36:45 EST 2014"),
		"taskName":"Program 5",
		"status":"Partner Reports"
		//"description" : "Description",
		//"notes" : "Notes"
		},
		
		{
		"startDate":new Date("Dec 10 00:27:15 EST 2014"),
		"endDate":new Date("Dec 14 00:54:56 EST 2014"),
		//"completionDate":new Date("Dec 18 02:36:45 EST 2014"),
		"taskName":"Program 3",
		"status":"WaterPortal Updates"
		//"description" : "Description",
		//"notes" : "Notes"
		},
		
		{
		"startDate":new Date("Dec 13 00:29:48 EST 2014"),
		"endDate":new Date("Dec 16 00:44:50 EST 2014"),
		//"completionDate":new Date("Dec 19 02:36:45 EST 2014"),
		"taskName":"Program 1",
		"status":"Mitigation Plans"
		//"description" : "Description",
		//"notes" : "Notes"
		},
		
		{
		"startDate":new Date("Dec 09 07:39:21 EST 2014"),
		"endDate":new Date("Dec 16 07:43:22 EST 2014"),
		//"completionDate":new Date("Dec 19 02:36:45 EST 2014"),
		"taskName":"Program 2",
		"status":"Partner Reports"
		//"description" : "Description",
		//"notes" : "Notes"
		},
		
		{
		"startDate":new Date("Dec 12 07:00:06 EST 2014"),
		"endDate":new Date("Dec 14 07:05:07 EST 2014"),
		//"completionDate":new Date("Dec 16 02:36:45 EST 2014"),
		"taskName":"Program 1",
		"status":"Donor Report"
		//"description" : "Description",
		//"notes" : "Notes"
		},
		
		{
		"startDate":new Date("Dec 10 08:46:59 EST 2014"),
		"endDate":new Date("Dec 12 09:54:19 EST 2014"),
		//"completionDate":new Date("Dec 13 02:36:45 EST 2014"),
		"taskName":"Program 2",
		"status":"Mitigation Plans"
		//"description" : "Description",
		//"notes" : "Notes"
		},
		
		{
		"startDate":new Date("Dec 18 09:02:45 EST 2014"),
		"endDate":new Date("Dec 20 09:48:56 EST 2014"),
		//"completionDate":new Date("Dec 21 02:36:45 EST 2014"),
		"taskName":"Program 5",
		"status":"Partner Audit"
		//"description" : "Description",
		//"notes" : "Notes"
		}
		,
		{
		"startDate":new Date("Dec 15 08:27:35 EST 2014"),
		"endDate":new Date("Dec 18 08:58:43 EST 2014"),
		//"completionDate":new Date("Dec 20 02:36:45 EST 2014"),
		"taskName":"Program 5",
		"status":"WaterPortal Updates"
		//"description" : "Description",
		//"notes" : "Notes"
		
		},
		
		{"startDate":new Date("Dec 14 08:40:11 EST 2014"),
		"endDate":new Date("Dec 18 08:46:35 EST 2014"),
		//"completionDate":new Date("Dec 19 02:36:45 EST 2014"),
		"taskName":"Program 4",
		"status":"Post-line Survey"
		//"description" : "Description",
		//"notes" : "Notes"
		}
		,
		{
		"startDate":new Date("Dec 09 08:00:03 EST 2014"),
		"endDate":new Date("Dec 11 08:09:51 EST 2014"),
		//"completionDate":new Date("Dec 15 02:36:45 EST 2014"),
		"taskName":"Program 6",
		"status":"Baseline Survey"
		//"description" : "Description",
		//"notes" : "Notes"
		}
		,
		{
		"startDate":new Date("Dec 18 10:21:00 EST 2014"),
		"endDate":new Date("Dec 20 10:51:42 EST 2014"),
		//"completionDate":new Date("Dec 22 02:36:45 EST 2014"),
		"taskName":"Program 2",
		"status":"Partner Disbursement"
		//"description" : "Description",
		//"notes" : "Notes"
		}
		,
		{
		"startDate":new Date("Dec 20 11:08:42 EST 2014"),
		"endDate":new Date("Dec 20 11:33:42 EST 2014"),
		//"completionDate":new Date("Dec 21 02:36:45 EST 2014"),
		"taskName":"Program 5",
		"status":"End-line Survey"
		//"description" : "Description",
		//"notes" : "Notes"
		}
		,
		{
		"startDate":new Date("Dec 09 12:27:15 EST 2014"),
		"endDate":new Date("Dec 20 12:54:56 EST 2014"),
		//"completionDate":new Date("Dec 21 02:36:45 EST 2014"),
		"taskName":"Program 3",
		"status":"Donor Visit"
		//"description" : "Description",
		//"notes" : "Notes"
		}
		,
		{
		"startDate":new Date("Dec 08 23:12:24 EST 2014"),
		"endDate":new Date("Dec 09 00:26:13 EST 2014"),
		//"completionDate":new Date("Dec 11 02:36:45 EST 2014"),
		"taskName":"Program 4",
		"status":"Donor Report"
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

var gantt = d3.gantt().taskTypes(taskNames).taskStatus(taskStatus).tickFormat(format);
gantt(tasks);

};


var tasks = [
	{
	"startDate":new Date("Sun Dec 09 01:36:45 EST 2012"),
	"endDate":new Date("Sun Dec 09 02:36:45 EST 2012"),
	"taskName":"Program 4",
	"status":"ONGOING"
	}
];

var taskStatus = {
    "COMPLETED" : "bar-completed",
    "ONGOING" : "bar-ongoing",
    "IN-PROGRESS" : "bar-in-progress",
    "RECURRING" : "bar-recurring",
    "ON-HOLD" : "bar-on-hold"
};

var taskNames = [ 
	"Program 1", 
	"Program 2", 
	"Program 3", 
	"Program 4", 
	"Program 5", 
	"Program 6"
];
tasks.sort(function(a, b) {
    return a.endDate - b.endDate;  //?
});
var maxDate = tasks[tasks.length - 1].endDate; // if there are 4 tasks, 0, 1, 2, 3 - the length is 4; the maxDate is task[2] ? 
tasks.sort(function(a, b) {
    return a.startDate - b.startDate;
});
var minDate = tasks[0].startDate;

var format = "%H:%M";
var timeDomainString = "1day";

var gantt = d3.gantt().taskTypes(taskNames).taskStatus(taskStatus).tickFormat(format);

var margin = {
     top : 20,
     right : 40,
     bottom : 20,
     left : 80
};
gantt.margin(margin);

gantt.timeDomainMode("fixed");
changeTimeDomain(timeDomainString);

gantt(tasks);

function changeTimeDomain(timeDomainString) {
    this.timeDomainString = timeDomainString;
    switch (timeDomainString) {
    case "1hr":
	format = "%H:%M:%S";
	gantt.timeDomain([ d3.time.hour.offset(getEndDate(), -1), getEndDate() ]);
	break;
    case "3hr":
	format = "%H:%M";
	gantt.timeDomain([ d3.time.hour.offset(getEndDate(), -3), getEndDate() ]);
	break;

    case "6hr":
	format = "%H:%M";
	gantt.timeDomain([ d3.time.hour.offset(getEndDate(), -6), getEndDate() ]);
	break;

    case "1day":
	format = "%H:%M";
	gantt.timeDomain([ d3.time.day.offset(getEndDate(), -1), getEndDate() ]);
	break;

    case "1week":
	format = "%a %H:%M";
	gantt.timeDomain([ d3.time.day.offset(getEndDate(), -7), getEndDate() ]);
	break;
	
    case "1month":
	format = "%b";
	gantt.timeDomain([ d3.time.month.offset(getEndDate(), -1), getEndDate() ]); // I need a formula for calculating if the month has 30 or 31 days 
	 // d3.time.month
// 
// Months (e.g., February 1, 2012 at 12:00 AM). Ranges between 28 and 31 days.
	// var format = d3.time.format.multi([
//   [".%L", function(d) { return d.getMilliseconds(); }],
//   [":%S", function(d) { return d.getSeconds(); }],
//   ["%I:%M", function(d) { return d.getMinutes(); }],
//   ["%I %p", function(d) { return d.getHours(); }],
//   ["%a %d", function(d) { return d.getDay() && d.getDate() != 1; }],
//   ["%b %d", function(d) { return d.getDate() != 1; }],
//   ["%B", function(d) { return d.getMonth(); }],
//   ["%Y", function() { return true; }]
// ]);
	

	break;
    default:
	format = "%H:%M"
    }
    gantt.tickFormat(format);
    gantt.redraw(tasks);
}

function getEndDate() {
    var lastEndDate = Date.now();
    if (tasks.length > 0) {
	lastEndDate = tasks[tasks.length - 1].endDate;
    }

    return lastEndDate;
}

function addTask() {

    var lastEndDate = getEndDate();
    var taskStatusKeys = Object.keys(taskStatus);
    var taskStatusName = taskStatusKeys[Math.floor(Math.random() * taskStatusKeys.length)];
    var taskName = taskNames[Math.floor(Math.random() * taskNames.length)];

    tasks.push({
	"startDate" : d3.time.hour.offset(lastEndDate, Math.ceil(1 * Math.random())),
	"endDate" : d3.time.hour.offset(lastEndDate, (Math.ceil(Math.random() * 3)) + 1),
	"taskName" : taskName,
	"status" : taskStatusName
    });

    changeTimeDomain(timeDomainString);
    gantt.redraw(tasks);
};

function removeTask() {
    tasks.pop(); //removes the last task that was added
    changeTimeDomain(timeDomainString);
    gantt.redraw(tasks);
};

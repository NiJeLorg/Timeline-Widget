example();
function example() {

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
    return a.endDate - b.endDate;
});
var maxDate = tasks[tasks.length - 1].endDate;
tasks.sort(function(a, b) {
    return a.startDate - b.startDate;
});
var minDate = tasks[0].startDate;

var format = "%m/%d";

var gantt = d3.gantt().taskTypes(taskNames).taskStatus(taskStatus).tickFormat(format);
//gantt.timeDomain([new Date("Sun Dec 09 04:54:19 EST 2012"),new Date("Sun Jan 09 04:54:19 EST 2013")]);
//gantt.timeDomainMode("fixed");
gantt(tasks);


example.addTask = function() {
    
    var lastEndDate = Date.now();
    if (tasks.length > 0) {
	lastEndDate = tasks[tasks.length - 1].endDate;
    }
    
    var taskStatusKeys = Object.keys(taskStatus);
    var taskStatusName = taskStatusKeys[Math.floor(Math.random()*taskStatusKeys.length)];
    var taskName = taskNames[Math.floor(Math.random()*taskNames.length)];
    
    tasks.push({"startDate":d3.time.hour.offset(lastEndDate,Math.ceil(1*Math.random())),"endDate":d3.time.hour.offset(lastEndDate,(Math.ceil(Math.random()*3))+1),"taskName":taskName,"status":taskStatusName});
    gantt.redraw(tasks);
};

example.removeTask = function() {
    tasks.pop();
    gantt.redraw(tasks);
};

};

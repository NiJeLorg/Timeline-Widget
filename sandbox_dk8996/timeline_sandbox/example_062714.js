
//JSON
var mtasks = [
/*
    {
"startDate":new Date("May 09 2014"),
"endDate":"",
"completionDate":"",
"taskName":"Program 3",
"status":"WaterPortal Updates",
"description" : "Description",
"notes" : "Notes",
"repeat" : {
        "type" : "Weekly",
        "rpt_start" : 1,
        "rpt_end" : 3,
        "ends_type" : "never"
    }
}
*/
/*
    {
"startDate":new Date("May 09 2014"),
"endDate":"",
"completionDate":"",
"taskName":"Program 3",
"status":"WaterPortal Updates",
"description" : "Description",
"notes" : "Notes",
"repeat" : {
        "type" : "Weekly",
        "rpt_start" : 1,
        "rpt_end" : 3,
        "ends_type" : "after",
        "occur" : 2
    }
}
*/
    {
"startDate":new Date("May 09 2014"),
"endDate":"",
"completionDate":"",
"taskName":"Program 3",
"status":"WaterPortal Updates",
"description" : "Description",
"notes" : "Notes",
"repeat" : {
        "type" : "Weekly",
        "rpt_start" : 1,
        "rpt_end" : 3,
        "ends_type" : "on",
        "on" : new Date("June 09 2014")
    }
}
,
{
"startDate":new Date("June 09 2014"),
"endDate":new Date("Dec 10 2014"),
"completionDate":new Date("Dec 11 2014"),
"taskName":"Program 3",
"status":"WaterPortal Updates",
"description" : "Description",
"notes" : "Notes"
}
,

{
"startDate":new Date("May 10 2014"),
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
"startDate":new Date("Dec 07 2014"),
"endDate":new Date("Dec 8 2014"),
"completionDate":"",
"taskName":"Program 2",
"status":"Donor Visit",
"description" : "Description",
"notes" : "Notes"
}
,
{
"startDate":new Date("Dec 13 2014"),
"endDate":new Date("Dec 15 2014"),
"completionDate": "",
"taskName":"Program 1",
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
//"completionDate":new Date("Dec 16 02:36:45 EST 2014"),
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
    "startDate":new Date("Dec 02 2014"),
    "endDate":new Date("Dec 04 2014"),
    "completionDate":new Date("Dec 11 2014"),
    "taskName":"Program 6",
    "status":"End-line Survey",
    "description" : "Description",
    "notes" : "Notes 024"
}
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

var format = "%m/%d";

// Define Gantt Chart Time Line
var d = new Date();
var ganttTimelineStart = new Date(d.getFullYear(), 0, 1);
var ganttTimelineEnd = new Date(d.getFullYear(), 11, 31);

var tasks = [];

function regenerateTasks() {
    tasks = [];
    for(var i = 0; i < mtasks.length; i++) {
        if(mtasks[i].hasOwnProperty("repeat")) {
            var repeat = mtasks[i].repeat;
            if(repeat.type == "Weekly") {
                /*
                    type : "Weekly"
                    rpt_start : ""  // repeat start day
                    rpt_end : ""  // repeat end day
                    ends_type : "never", "after", "on"
                    
                    occur : ""  // When ends_type is "after"
                    on : "" // When ends_type is on
                */
                if(repeat.ends_type == "never") {
                    var d = new Date();
                    var curr = new Date(d.getFullYear(), 0, 1);
                    if(curr < mtasks[i].startDate) {
                        curr = mtasks[i].startDate;
                    }
                    var firstday = new Date(curr.setDate(curr.getDate() - curr.getDay() + repeat.rpt_start));
                    var endday = new Date(curr.setDate(curr.getDate() - curr.getDay() + repeat.rpt_end));
                    while(firstday < ganttTimelineEnd) {
                        if(firstday > ganttTimelineStart && firstday > mtasks[i].startDate) {
                            tasks.push({
                                "startDate": new Date(firstday),
                                "endDate": new Date(endday),
                                "completionDate": mtasks[i].completionDate,
                                "taskName": mtasks[i].taskName,
                                "status": mtasks[i].status,
                                "description" : mtasks[i].description,
                                "notes" : mtasks[i].notes
                            });
                        }
                        firstday.setDate(firstday.getDate() + 7);
                        endday.setDate(endday.getDate() + 7);
                    }
                } else if(repeat.ends_type == "after") {
                    var d = new Date();
                    var curr = new Date(mtasks[i].startDate);
                    var firstday = new Date(curr.setDate(curr.getDate() - curr.getDay() + repeat.rpt_start));
                    var endday = new Date(curr.setDate(curr.getDate() - curr.getDay() + repeat.rpt_end));
                    var k = 0;
                    while(k < repeat.occur) {
                        if(firstday > mtasks[i].startDate) {
                            k++;
                            tasks.push({
                                "startDate": new Date(firstday),
                                "endDate": new Date(endday),
                                "completionDate": mtasks[i].completionDate,
                                "taskName": mtasks[i].taskName,
                                "status": mtasks[i].status,
                                "description" : mtasks[i].description,
                                "notes" : mtasks[i].notes
                            });                            
                        }

                        firstday.setDate(firstday.getDate() + 7);
                        endday.setDate(endday.getDate() + 7);
                    }
                } else if(repeat.ends_type == "on") {
                    var d = new Date();
                    var curr = new Date(mtasks[i].startDate);
                    var firstday = new Date(curr.setDate(curr.getDate() - curr.getDay() + repeat.rpt_start));
                    var endday = new Date(curr.setDate(curr.getDate() - curr.getDay() + repeat.rpt_end));
                    var k = 0;
                    while(firstday < repeat.on) {
                        if(firstday > mtasks[i].startDate) {
                            k++;
                            tasks.push({
                                "startDate": new Date(firstday),
                                "endDate": new Date(endday),
                                "completionDate": mtasks[i].completionDate,
                                "taskName": mtasks[i].taskName,
                                "status": mtasks[i].status,
                                "description" : mtasks[i].description,
                                "notes" : mtasks[i].notes
                            });
                        }
                        firstday.setDate(firstday.getDate() + 7);
                        endday.setDate(endday.getDate() + 7);
                    }
                }
                
            } else if (mtasks[i].repeat.type == "Monthly") {
               if(repeat.ends_type == "never") {
                    var d = new Date();
                    var curr = new Date(d.getFullYear(), 0, 1);
                    if(curr < mtasks[i].startDate) {
                        curr = mtasks[i].startDate;
                    }
                    var firstday = new Date(curr.getFullYear(), curr.getMonth(), repeat.rpt_start);
                    var endday = new Date(curr.getFullYear(), curr.getMonth(), repeat.rpt_end);
                    while(firstday < ganttTimelineEnd) {
                        if(firstday > ganttTimelineStart && firstday > mtasks[i].startDate) {
                            tasks.push({
                                "startDate": new Date(firstday),
                                "endDate": new Date(endday),
                                "completionDate": mtasks[i].completionDate,
                                "taskName": mtasks[i].taskName,
                                "status": mtasks[i].status,
                                "description" : mtasks[i].description,
                                "notes" : mtasks[i].notes
                            });
                        }
                        firstday.setMonth(firstday.getMonth() + 1);
                        endday.setMonth(endday.getMonth() + 1);
                    }
                } else if(repeat.ends_type == "after") {
                    var d = new Date();
                    var curr = new Date(mtasks[i].startDate);
                    var firstday = new Date(curr.getFullYear(), curr.getMonth(), repeat.rpt_start);
                    var endday = new Date(curr.getFullYear(), curr.getMonth(), repeat.rpt_end);
                    var k = 0;
                    while(k < repeat.occur) {
                        if(firstday > mtasks[i].startDate) {
                            k++;
                            tasks.push({
                                "startDate": new Date(firstday),
                                "endDate": new Date(endday),
                                "completionDate": mtasks[i].completionDate,
                                "taskName": mtasks[i].taskName,
                                "status": mtasks[i].status,
                                "description" : mtasks[i].description,
                                "notes" : mtasks[i].notes
                            });                            
                        }

                        firstday.setMonth(firstday.getMonth() + 1);
                        endday.setMonth(endday.getMonth() + 1);
                    }
                } else if(repeat.ends_type == "on") {
                    var d = new Date();
                    var curr = new Date(mtasks[i].startDate);
                    var firstday = new Date(curr.getFullYear(), curr.getMonth(), repeat.rpt_start);
                    var endday = new Date(curr.getFullYear(), curr.getMonth(), repeat.rpt_end);
                    var k = 0;
                    while(firstday < repeat.on) {
                        if(firstday > mtasks[i].startDate) {
                            k++;
                            tasks.push({
                                "startDate": new Date(firstday),
                                "endDate": new Date(endday),
                                "completionDate": mtasks[i].completionDate,
                                "taskName": mtasks[i].taskName,
                                "status": mtasks[i].status,
                                "description" : mtasks[i].description,
                                "notes" : mtasks[i].notes
                            });
                        }
                        firstday.setMonth(firstday.getMonth() + 1);
                        endday.setMonth(endday.getMonth() + 1);
                    }
                }
            }
        } else {
            tasks.push(mtasks[i]);
        }
    }
}

regenerateTasks();
var gantt = d3.gantt().taskTypes(taskNames).taskStatus(taskStatus).tickFormat(format);
gantt(tasks);

var dateFormat = d3.time.format("%b %d, %Y");
function drawActionView() {
    // ---- Action Item View
    var _html = "";
    for(i = 0; i < tasks.length; i++) {
        var endDate_color = "";
        var today = new Date();
        if(tasks[i].endDate < today) {
            endDate_color = "color: red";
        }
        _html += "<div class='task_row'>" + 
                "   <span class='" + taskStatus[tasks[i].status] + " triangle'></span>" +
                "   <input type='checkbox' class='chkCompleted' index='" + i + "' />" +
                "   <label>" + tasks[i].status + " for " + tasks[i].taskName + "</label>" +
                "   <label style='" + endDate_color + "'>due on " + dateFormat(tasks[i].endDate) + "</label>" +
                "</div>"; 
    }
    $("#tasks").html(_html);
}

function seemore() {
    $("#seemore").toggle();
    $("#hidedetails").toggle();
    $("#toggle_tasks").toggle();
}

$(document).ready(function() {
    $( "#tabs" ).tabs();
    $( "#txtStartDate" ).datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      numberOfMonths: 1,
      dateFormat: "M dd yy",
      onClose: function( selectedDate ) {
        $( "#txtEndDate" ).datepicker( "option", "minDate", selectedDate );
      }
    });
    $( "#txtEndDate" ).datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      numberOfMonths: 1,
      dateFormat: "M dd yy",
      onClose: function( selectedDate ) {
        $( "#txtStartDate" ).datepicker( "option", "maxDate", selectedDate );
      }
    });
    
    $( "#txtCompletedOn" ).datepicker({
      changeMonth: true,
      dateFormat: "M dd yy"
    });
    
    for(var i=0;i<taskNames.length;i++) {
        $("#sltTaskName").append($("<option></option>").attr("value",taskNames[i]).text(taskNames[i])); 
    }
    $.each(taskStatus, function(key, value) {   
         $('#sltStatus')
             .append($("<option></option>")
             .attr("value",key)
             .text(key)); 
    });
    
    drawActionView();    
    
    $(".chkCompleted").change(function() {
        var index = $(this).attr("index");
        $("#lblActionItem").html(tasks[index].status + " for " + tasks[index].taskName + " due on " + dateFormat(tasks[index].endDate));
        $("#txtCompletedOn").val("");
        var chk = this;
        var jChk = $(this);
        
        if(this.checked) {
            $( "#completeDialog" ).dialog({
                title: "Completed Action Item",
                height: "auto",
                width: 300,
                modal: true,
                buttons: {
                  "Save":function() {
                      if($("#txtCompletedOn").val() == "") {
                          alert("Choose Complete Date!");
                          return;
                      }
                      tasks[index].completionDate = new Date($("#txtCompletedOn").val());
                      chk.checked = true;
                      jChk.attr("disabled", "disabled");
                      $( this ).dialog( "close" );
                  }, 
                  "Cancel": function() {
                      $( this ).dialog( "close" );
                  }
                }
            });
        }
        this.checked = false;
    });
    
    $("#sltRepeatType").change(function() {
        if($(this).val() == "Weekly") {
            $("#trRepeatDetails").show();
            $("#rptWeekly").show();
            $("#sltStartDay").val("1");
            $("#sltEndDay").val("2");
            $("#rptMonthly").hide();
            $("#optEnds").show();
        } else if($(this).val() == "Monthly") {
            $("#trRepeatDetails").show();
            $("#rptWeekly").hide();
            $("#rptMonthly").show();
            $("#txtStartDay").val("");
            $("#txtEndDay").val("");
            $("#optEnds").show();
        } else {
            $("#trRepeatDetails").hide();
            $("#optEnds").hide();
        }
    });
    
    $("#btnAddItem").click(function() {
        // Init values for manage item
        $("#sltRepeatType").val("");
        $( "#txtStartDate" ).datepicker( "setDate", new Date());
        $( "#txtEndDate" ).val("");
        $("#sltTaskName option:first").attr('selected','selected');
        $("#sltStatus option:first").attr('selected','selected');
        $("#trRepeatDetails").hide();
        $("#optEnds").hide();
        $("input[name='rdiEnds'][value='on']").prop('checked', true);
        
        $( "#AddDialog" ).dialog({
            title: "Add an Item",
            height: "auto",
            width: 400,
            modal: true,
            buttons: {
              "Save":function() {
                    /*
                        type : "Weekly"
                        rpt_start : ""  // repeat start day
                        rpt_end : ""  // repeat end day
                        ends_type : "never", "after", "on"
                        
                        occur : ""  // When ends_type is "after"
                        on : "" // When ends_type is on
                    */
                  // Add to Item
                  var repeatType = $("#sltRepeatType").val();
                  if(repeatType == "") { // no repeat
                      if($("#txtEndDate").val() == "") {
                          alert("Choose Ends Date");
                          return;
                      }
                      mtasks.push({
                                    "startDate":new Date($("#txtStartDate").val()),
                                    "endDate":new Date($("#txtEndDate").val()),
                                    //"completionDate":new Date("Dec 14 2014"),
                                    "taskName":$("#sltTaskName").val(),
                                    "status":$("#sltStatus").val(),
                                    "description" : $("#txtDescription").val(),
                                    "notes" : $("#txtNotes").val()
                                });
                  } else if(repeatType == "Weekly" || repeatType == "Monthly") {
                        var arr = {
                            "startDate":new Date($("#txtStartDate").val()),
                            "endDate":new Date($("#txtEndDate").val()),
                            //"completionDate":new Date("Dec 14 2014"),
                            "taskName":$("#sltTaskName").val(),
                            "status":$("#sltStatus").val(),
                            "description" : $("#txtDescription").val(),
                            "notes" : $("#txtNotes").val()
                        };
                        
                        var endsType = $('input[name=rdiEnds]:checked').val();
                        
                        arr.repeat = {
                            type: repeatType,
                            ends_type: endsType
                        };
                        
                        if(repeatType == "Weekly") {
                            arr.repeat.rpt_start = parseInt($("#sltStartDay").val());
                            arr.repeat.rpt_end = parseInt($("#sltEndDay").val());
                        } else if(repeatType == "Monthly") {
                            if($("#txtStartDay").val() == "" || $("#txtEndDay").val() == "") {
                                alert("Type Repeat on!");
                                return;
                            }
                            arr.repeat.rpt_start = parseInt($("#txtStartDay").val());
                            arr.repeat.rpt_end = parseInt($("#txtEndDay").val());
                        }
                        
                        if(endsType == "never") {
                            
                        } else if(endsType == "after") {
                            if($("#txtOccur").val() == "") {
                                //$("#txtOccur").val("0");
                                alert("Type occurrences!");
                                return;
                            }
                            arr.repeat.occur = parseInt($("#txtOccur").val());
                        } else if(endsType == "on") {
                            arr.repeat.on = new Date($("#txtEndDate").val());
                        }
                        
                        mtasks.push(arr);
                  }
                  
                  regenerateTasks();
                  
                  drawActionView();
                  
                  // redarw chart
                  $("#chart").html("");
                  $("#task_status").html("");
                  gantt(tasks);
                  
                  $( this ).dialog( "close" );
              }, 
              "Cancel": function() {
                  $( this ).dialog( "close" );
              }
            }
        });
    });
    $("#txtStartDate").focusout();

});

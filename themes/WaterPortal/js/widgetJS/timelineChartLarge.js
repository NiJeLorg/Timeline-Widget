// date parse rule
var parseDate = d3.time.format("%Y-%m-%d").parse;

// toString test for date objects
var toString = Object.prototype.toString;
var dateTest;
var dateTestString;
var xAxisTicks;


// check to see if the label is a date and create date object if it is
// loop through dataset and parse dates - requires jQuery
$.each(timelineModel, function( i, d ) {
	$.each(d.values, function( j, f ) {
		dateTest = parseDate(f.currentduedate);
		dateTestString = toString.call(dateTest);
		if ( dateTestString === "[object Date]" ) {
			f.currentduedate = dateTest.getTime();
			xAxisTicks = function(d) { return d3.time.format('%b %Y')(new Date(d)); };
		} else {
			xAxisTicks = d3.format(',f');
		}		
	})
});

// draw line chart
tl.addGraph(function() {
	var h = 400;

	var chart = tl.models.timelineWithFocusChart()
		.x(function(d) { return d.currentduedate })
		.y(function(d) { return d.notes })		
		.height(h)
		.margin({right: 40, bottom: 20, left: 70});


	chart.xAxis
		.tickFormat(xAxisTicks);
		
	chart.x2Axis
		.tickFormat(xAxisTicks);

	chart.yAxis
		.showMaxMin(false)
		.tickFormat(d3.format(',f'));
	
	chart.y2Axis
		.showMaxMin(false)
		.tickFormat(d3.format(',f'));
		
  	//chart.showXAxis(true);
  	
	d3.select(".timelineChart")
		.append("svg")
		.attr("height", h)
		.datum(timelineModel)
		.transition().duration(500)
		.call(chart);

  	tl.utils.windowResize(chart.update);

	chart.dispatch.on('stateChange', function(e) { tl.log('New State:', JSON.stringify(e)); });

	return chart;
});




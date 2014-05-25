<?php
/**
 * Base TimelineWidgetLarge class that extends CWidget
 * Renders the large timeline chart widgets in the waterportal
 */
class TimelineWidgetLarge extends CWidget {
	
    public $widgetName = 'My Timeline Chart Widget';
    public $timelineModel = array();
	
	 
    public function init()
    {
        // this method is called by CController::beginWidget()
    }
 
    public function run()
    {
        $this->render('timelineWidgetLarge');
    }
 
}

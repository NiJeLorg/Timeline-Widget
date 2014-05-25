<?php
/* @var $this linewidgetController */
/* This page contains a larger view of a lineChart widget -- to be filled out with user data */

/*
 $model = new general;
 $username = Yii::app()->user->getState('name');
 $req = array();
            $req['object']       = "widget"; 
            $req['widget_type']  = "timelineModel"; 
            $req['activity']     = "program"; 
            $req['action']       = "beneficiaries"; 
            $req['date_from']    = ""; 
            $req['date_to']      = ""; 
            $req['user']         = $username; 
            $linedata_exchange   = $model->getDashWidgetData($req);
            
            //  echo "line data is <pre>";print_r( $linedata_exchange);echo "</pre>"; 
*/

$parnerMonthlyReportArray = array();
$parnerMonthlyReportArray[] = array(
	'label' => 'ADK-I0001-12', 
	'startdate' => '2014-03-01', 
	'originalduedate' => '2014-03-01', 
	'currentduedate' => '2014-03-01', 
	'datecompleted' => '', 
	'description' => 'March partner report for ADK-I0001-12', 
	'notes' => ''
);

$parnerMonthlyReportArray[] = array(
	'label' => 'MSS-I0004-12', 
	'startdate' => '2014-03-01', 
	'originalduedate' => '2014-03-01', 
	'currentduedate' => '2014-03-01', 
	'datecompleted' => '', 
	'description' => 'March partner report for MSS-I0004-12', 
	'notes' => ''
);

$parnerMonthlyReportArray[] = array(
	'label' => 'ESF-G0002-11', 
	'startdate' => '2014-03-09', 
	'originalduedate' => '2014-03-09', 
	'currentduedate' => '2014-03-09', 
	'datecompleted' => '', 
	'description' => 'March partner report for ESF-G0002-11', 
	'notes' => ''
);

$parnerMonthlyReportArray[] = array(
	'label' => 'BDN-I0001-12', 
	'startdate' => '2014-03-15', 
	'originalduedate' => '2014-03-15', 
	'currentduedate' => '2014-03-15', 
	'datecompleted' => '', 
	'description' => 'March partner report for BDN-I0001-12', 
	'notes' => ''
);

$parnerMonthlyReportArray[] = array(
	'label' => 'ADK-I0001-12', 
	'startdate' => '2014-04-01', 
	'originalduedate' => '2014-04-01', 
	'currentduedate' => '2014-04-01', 
	'datecompleted' => '', 
	'description' => 'April partner report for ADK-I0001-12', 
	'notes' => ''
);

$parnerMonthlyReportArray[] = array(
	'label' => 'MSS-I0004-12', 
	'startdate' => '2014-04-01', 
	'originalduedate' => '2014-04-01', 
	'currentduedate' => '2014-04-01', 
	'datecompleted' => '', 
	'description' => 'April partner report for MSS-I0004-12', 
	'notes' => ''
);

$parnerMonthlyReportArray[] = array(
	'label' => 'ESF-G0002-11', 
	'startdate' => '2014-04-09', 
	'originalduedate' => '2014-04-09', 
	'currentduedate' => '2014-04-09', 
	'datecompleted' => '', 
	'description' => 'April partner report for ESF-G0002-11', 
	'notes' => ''
);

$parnerMonthlyReportArray[] = array(
	'label' => 'BDN-I0001-12', 
	'startdate' => '2014-04-01', 
	'originalduedate' => '2014-04-15', 
	'currentduedate' => '2014-04-15', 
	'datecompleted' => '', 
	'description' => 'April partner report for BDN-I0001-12', 
	'notes' => ''
);


$donorReportArray = array();

$donorReportArray[] = array(
	'label' => 'ADK-I0001-12', 
	'startdate' => '2014-03-23', 
	'originalduedate' => '2014-03-23', 
	'currentduedate' => '2014-03-23', 
	'datecompleted' => '', 
	'description' => 'First quarter donor report for ADK-I0001-12', 
	'notes' => ''
);

$donorReportArray[] = array(
	'label' => 'MSS-I0004-12', 
	'startdate' => '2014-03-25', 
	'originalduedate' => '2014-03-25', 
	'currentduedate' => '2014-03-25', 
	'datecompleted' => '', 
	'description' => 'First quarter donor report for MSS-I0004-12', 
	'notes' => ''
);

$donorReportArray[] = array(
	'label' => 'ESF-G0002-11', 
	'startdate' => '2014-03-17', 
	'originalduedate' => '2014-03-17', 
	'currentduedate' => '2014-03-17', 
	'datecompleted' => '', 
	'description' => 'First quarter donor report for ESF-G0002-11', 
	'notes' => ''
);

$donorReportArray[] = array(
	'label' => 'BDN-I0001-12', 
	'startdate' => '2014-03-15', 
	'originalduedate' => '2014-03-15', 
	'currentduedate' => '2014-03-15', 
	'datecompleted' => '', 
	'description' => 'First quarter donor reportfor BDN-I0001-12', 
	'notes' => ''
);


			$timelinedata_exchange = array(										   
									"timelineModel" => array(
														array("key"    => "Partner Monthly Reports",
	                                                          "color"  => "#1A9850",
	                                                          "values" => $parnerMonthlyReportArray = array(
																			'label' => 'BDN-I0001-12', 
																			'startdate' => '2014-04-01', 
																			'originalduedate' => '2014-04-15', 
																			'currentduedate' => '2014-04-15', 
																			'datecompleted' => '', 
																			'description' => 'April partner report for BDN-I0001-12', 
																			'notes' => ''
																				),
		                                                array("key"    => "Donor Reports",
	                                                          "color"  => "#FC8D59",
	                                                          "values" => $donorReportArray => array(
																				'label' => 'BDN-I0001-12', 
																				'startdate' => '2014-03-15', 
																				'originalduedate' => '2014-03-15', 
																				'currentduedate' => '2014-03-15', 
																				'datecompleted' => '', 
																				'description' => 'First quarter donor reportfor BDN-I0001-12', 
																				'notes' => ''
		                                                  						),
		                                        		  ),
		                                        ),

                                     
	                                   "widgetName" => "My Timeline"
                                   );


$this->breadcrumbs=array(
	$timelinedata_exchange['widgetName']
);



?>

<?php $this->widget('application.widgets.TimelineWidgetLarge',  $timelinedata_exchange); 
?>


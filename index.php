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
                                    				    array("key"    => "Partner Annual Reports",
	                                                          "color"  => "#1A9850",
	                                                          "values" => $partnerAnnualReportArray
                                                          ),
		                                                array("key"    => "Partner Quarterly Reports",
	                                                          "color"  => "#FC8D59",
	                                                          "values" => $partnerQuarterlyReportArray
		                                                  ),
														array("key"    => "Partner Monthly Reports",
	                                                          "color"  => "#f29196",
	                                                          "values" => $partnerMonthlyReportArray
                                                          ),
		                                                array("key"    => "Partner Weekly Reports",
	                                                          "color"  => "#0c6dda",
	                                                          "values" => $partnerWeeklyReportArray
                                                          ),
		                                                array("key"    => "Donor Reports",
	                                                          "color"  => "#e23139",
	                                                          "values" => $donorReportArray
		                                                  )
		                                                array("key"    => "Donor Visit",
	                                                          "color"  => "#136731",
	                                                          "values" => $donorVisittArray
		                                                  ),
		                                                array("key"    => "Partner Field Monitoring Visit",
	                                                          "color"  => "#9b37a4",
	                                                          "values" => $partnerFieldMonitoringVisitArray
                                                          ),
		                                                array("key"    => "Partner Audit",
	                                                          "color"  => "#79c9b9",
	                                                          "values" => $partnerAuditArray
		                                                  ),
		                                                array("key"    => "Baseline Survey",
	                                                          "color"  => "#c2f0a9",
	                                                          "values" => $baselineSurveyArray
                                                          ),
		                                                array("key"    => "Program Completion Survey",
	                                                          "color"  => "#f4ae98",
	                                                          "values" => $programCompletionSurveyArray
		                                                  ),
		                                                array("key"    => "Evaluation Survey",
	                                                          "color"  => "#728f62",
	                                                          "values" => $evaluationSurveyArray
                                                          ),
		                                                array("key"    => "Partner Disbursement",
	                                                          "color"  => "#be441e",
	                                                          "values" => $partnerDisbursementArray
		                                                  ),
		                                                array("key"    => "Market Assessments",
	                                                          "color"  => "#1f7a0a",
	                                                          "values" => $marketAssessmentsArray
                                                          ),
		                                                array("key"    => "Partner Documentation",
	                                                          "color"  => "#89b3d3",
	                                                          "values" => $partnerDocumentationArray
		                                                  ),
		                                                array("key"    => "Convenings",
	                                                          "color"  => "#d486a0",
	                                                          "values" => $conveningsArray
                                                          ),
		                                                array("key"    => "Event",
	                                                          "color"  => "#206498",
	                                                          "values" => $eventArray
		                                                  ),
		                                                array("key"    => "WaterPortal Updates",
	                                                          "color"  => "#e82a69",
	                                                          "values" => $parnerMonthlyReportArray
                                                          ),
		                                                array("key"    => "Mitigation Plans",
	                                                          "color"  => "#9c39f8",
	                                                          "values" => $mitigationPlansArray
		                                                  ),
		                                                array("key"    => "Donor/Initiative",
	                                                          "color"  => "#ccae27",
	                                                          "values" => $donorInitiativeArray
                                                          ),
		                                                array("key"    => "General",
	                                                          "color"  => "#6e27cc",
	                                                          "values" => $generalArray
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


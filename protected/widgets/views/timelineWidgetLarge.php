<?php
/**
 * View for the LineWidgetLarge class
 */

/* load and register D3 and nvD3 */
$baseUrl = Yii::app()->baseUrl;
$themeUrl = Yii::app()->theme->baseUrl;
$cs = Yii::app()->getClientScript();
$cs->registerScriptFile($themeUrl.'/js/d3/d3.v3.js');
$cs->registerScriptFile($themeUrl.'/js/tld3/tl.d3.js');
$cs->registerCssFile($themeUrl.'/css/tl.d3.css');

/* Load the line chart javascript and data at the end of the script */
$cs->registerScriptFile($themeUrl.'/js/widgetJS/timelineChartLarge.js', CClientScript::POS_END);

?>
<div class="box border span-20">
	<h3 class="header"><?php echo $this->widgetName; ?></h3>
	<div class="timelinelineWrapper setHeightLarge">
		<div class="timelineChart"></div>
	</div>
	<!--<div class="linkBar"><a href="<?php echo $baseUrl ?>/widget/share/2">Share</a> | <a href="<?php echo $baseUrl ?>/widget/edit/2">Edit</a> | </div>-->			
</div>

<script type="text/javascript">
var timelineModel = <?php echo CJSON::encode($this->timelineModel); ?>; 
</script>
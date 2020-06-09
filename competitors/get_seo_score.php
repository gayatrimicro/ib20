<?php
include "../vendor/autoload.php";
$seo_score_ar =array();
$seo_chart_ar =array();
$seo_score_detail =array();
array_push($seo_score_detail, '<li class="TimLin"></li>');
try
{
	foreach($_POST['competitors'] as $row)
	{
		if($row['website']!="")
		{
			try{
				$get_seo_data_url = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url='.$row['website'].'&key=AIzaSyASdVd39MsNnjcRp-bTz-ukZAqswBza_gM&category=SEO';
				$seo_client = new GuzzleHttp\Client();
				$seo_response = $seo_client->request('GET', $get_seo_data_url);
				if($seo_response->getStatusCode() == 200)
				{
					$seo_res1 = $seo_response->getBody();
					$seo_res11 = json_decode($seo_res1, true);
					
					$seo_score = $seo_res11['lighthouseResult']['categories']['seo']['score'] * 100;
				}
				else{
					$seo_score = "0";
				}
			}
			catch(exception $e1)
			{
				$seo_score = "0";
			}
		}
		else{
			$seo_score = "0";
		}

		if((100 >= $seo_score) && ($seo_score >= 90)){
			$title = "Excellent";
			$font_color = "font-color-green";
			$chart_color = "GreenZone";
		}
		elseif((89 >= $seo_score) && ($seo_score >= 80)){
			$title = "Good";
			$font_color = "font-color-blue";
			$chart_color = "BlueZone";
		}
		elseif((79 >= $seo_score) && ($seo_score >= 70)){
			$title = "Fair";
			$font_color = "font-color-orange";
			$chart_color = "OrangeZone";
		}
		elseif((69 >= $seo_score) && ($seo_score >= 60)){
			$title = "Poor";
			$font_color = "font-color-red";
			$chart_color = "RedZone";
		}
		else{
			$title = "Very Poor";
			$font_color = "font-color-grey";
			$chart_color = "GreyZone";
		}

		if($seo_score < 60)
		{
			$website_heading = "Below 60";
		}
		else{
			$website_heading = $seo_score;
		}
		// array_push($seo_score_ar, ['name'=>$row['name'], 'website'=>$row['website'], 'seo_score'=>$seo_score]);
		array_push($seo_score_ar, '<li><div class="row"><div class="col-sm-10"><span><b>'.$row['name'].'</b></span></div><div class="col-sm-2"><span class="fot_pink '.$font_color.'">'.$website_heading.'</span></div></div></li>');

		array_push($seo_chart_ar, '<li class="'.$chart_color.'"><div class="bar-wrapper"><div class="bar-container"><div class="bar-inner" style="height: '.$seo_score.'%;"><span class="tooltiptext">'.$seo_score.' '.$title.'</span></div></div></div></li>');

		array_push($seo_score_detail, '<li class="LiGP"><p class="GP1">'.$row['name'].'</p><p class="GP2"><a target="_blank" href="https://developers.google.com/speed/docs/insights/v5/reference/pagespeedapi/runpagespeed?apix=true">'.$row['website'].'</a></p><p class="GPs1"></p><p class="GPs2"></p></li>');
	}
	$result['seo_score'] = $seo_score_ar;
	$result['seo_chart'] = $seo_chart_ar;
	$result['seo_score_detail'] = $seo_score_detail;
	$result['status'] = 'true';
	echo json_encode($result);
}
catch(exception $e){
	$result['status'] = 'false';
	echo json_encode($result);
}
?>
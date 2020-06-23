<?php
include "../vendor/autoload.php";
$seo_score_ar =array();
$seo_chart_ar =array();
$seo_score_detail =array();
//array_push($seo_score_detail, '<li class="TimLin"></li>');
set_time_limit(16000);
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
			try{
				$get_accessibility_data_url = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url='.$row['website'].'&key=AIzaSyASdVd39MsNnjcRp-bTz-ukZAqswBza_gM&category=ACCESSIBILITY';
				$accessibility_client = new GuzzleHttp\Client();
				$accessibility_response = $accessibility_client->request('GET', $get_accessibility_data_url);
				if($accessibility_response->getStatusCode() == 200)
				{
					$accessibility_res1 = $accessibility_response->getBody();
					$accessibility_res11 = json_decode($accessibility_res1, true);
					
					$accessibility_score = $accessibility_res11['lighthouseResult']['categories']['accessibility']['score'] * 100;
				}
				else{
					$accessibility_score = "0";
				}
			}
			catch(exception $e1)
			{
				$accessibility_score = "0";
			}
			try{
				$get_performance_data_url = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url='.$row['website'].'&key=AIzaSyASdVd39MsNnjcRp-bTz-ukZAqswBza_gM&category=PERFORMANCE';
				$performance_client = new GuzzleHttp\Client();
				$performance_response = $performance_client->request('GET', $get_performance_data_url);
				if($performance_response->getStatusCode() == 200)
				{
					$performance_res1 = $performance_response->getBody();
					$performance_res11 = json_decode($performance_res1, true);
					
					$performance_score = $performance_res11['lighthouseResult']['categories']['performance']['score'] * 100;
				}
				else{
					$performance_score = "0";
				}
			}
			catch(exception $e1)
			{
				$performance_score = "0";
			}
		}
		else{
			$seo_score = "0";
			$accessibility_score = "0";
			$performance_score = "0";
		}


		$average = ($seo_score + $accessibility_score + $performance_score) / 3;
		$average = round($average);
		//echo 'average - ' . $average;
		$random_number = rand(1,5);
		if((100 >= $average) && ($average >= 90)){
			$title = "Excellent";
			$font_color = "font-color-green";
			$chart_color = "GreenZone";
			$average_score = 70 - $random_number;
		}
		elseif((89 >= $average) && ($average >= 80)){
			$title = "Good";
			$font_color = "font-color-blue";
			$chart_color = "BlueZone";
			$average_score = 60 - $random_number;
		}
		elseif((79 >= $average) && ($average >= 70)){
			$title = "Fair";
			$font_color = "font-color-orange";
			$chart_color = "OrangeZone";
			$average_score = 50 - $random_number;
		}
		elseif((69 >= $average) && ($average >= 60)){
			$title = "Poor";
			$font_color = "font-color-red";
			$chart_color = "RedZone";
			$average_score = 35 - $random_number;
		}
		else{
			$title = "Very Poor";
			$font_color = "font-color-grey";
			$chart_color = "GreyZone";
			$average_score = 20;
		}

		if($average_score < 60)
		{
			$website_heading = $average_score;
		}
		else{
			$website_heading = $average_score;
		}
		// array_push($seo_score_ar, ['name'=>$row['name'], 'website'=>$row['website'], 'seo_score'=>$seo_score]);
		array_push($seo_score_ar, '<li><div class="row"><div class="col-sm-10"><span><b>'.$row['name'].'</b></span></div><div class="col-sm-2"><span class="fot_pink '.$font_color.'">'.$average_score.'</span></div></div></li>');

		array_push($seo_chart_ar, '<li class="'.$chart_color.'"><div class="bar-wrapper"><div class="bar-container"><div class="bar-inner" style="height: '.$average_score.'%;"><span class="tooltiptext">'.$average_score.' '.$title.'</span></div></div></div></li>');
		array_push($seo_score_detail, '<tr><td>'. $row['name'] .'</td>
		        <td><a target="_blank" href="https://web.dev/measure/">'. round($seo_score) .'</a></td>
		        <td><a target="_blank" href="https://web.dev/measure/">'. round($performance_score) .'</a></td>
		        <td><a target="_blank" href="https://web.dev/measure/">'. round($accessibility_score) .'</a></td>
		      </tr>');
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
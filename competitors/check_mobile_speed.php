<?php
include "../vendor/autoload.php";

$mobile = array();
$website = array();
$website_chart = array();
$website_detail = array();
try
{
	foreach($_POST['competitors'] as $row)
	{
		if($row['website']!="")
		{
			$security_arr = explode('://', $row['website']);
			if($security_arr[0]=="https")
			{
				$security = "Pass";
				$security_score = 100;
			}
			else{
				$security = "Fail";
				$security_score = 0;
			}
			$website_str = $row['website'];
			try{
				$get_mobile_speed_data_url = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url='.$row['website'].'&key=AIzaSyASdVd39MsNnjcRp-bTz-ukZAqswBza_gM&strategy=mobile&category=PERFORMANCE';
				$mobile_website_client = new GuzzleHttp\Client();
				$mobile_website_response = $mobile_website_client->request('GET', $get_mobile_speed_data_url);
				if($mobile_website_response->getStatusCode() == 200)
				{
					$mobile_website_res1 = $mobile_website_response->getBody();
					$mobile_website_res11 = json_decode($mobile_website_res1, true);
					
					$mobile_speed = $mobile_website_res11['lighthouseResult']['categories']['performance']['score'] * 100;
					$mobile_speed_score = $mobile_website_res11['lighthouseResult']['categories']['performance']['score'] * 100;
				}
			}
			catch(exception $e1)
			{
				$mobile_speed = "Not Found";
				$mobile_speed_score = 0;
			}
		}
		else{
			$mobile_speed = "Not Found";
			$mobile_speed_score = 0;
			$security = "Fail";
			$security_score = 0;
			$website_str = "Not Found";
		}
		if($row['desktop_speed']=="Not Found")
		{
			$desktop_speed = $row['desktop_speed'];
			$desktop_speed_score = 0;
		}
		else{
			$desktop_speed = $row['desktop_speed'];
			$desktop_speed_score = $row['desktop_speed'];
		}
		$average = ($security_score + $mobile_speed_score + $desktop_speed_score) / 3;

		if((100 >= $average) && ($average >= 90)){
			$title = "Excellent";
			$font_color = "font-color-green";
			$chart_color = "GreenZone";
		}
		elseif((89 >= $average) && ($average >= 80)){
			$title = "Good";
			$font_color = "font-color-blue";
			$chart_color = "BlueZone";
		}
		elseif((79 >= $average) && ($average >= 70)){
			$title = "Fair";
			$font_color = "font-color-orange";
			$chart_color = "OrangeZone";
		}
		elseif((69 >= $average) && ($average >= 60)){
			$title = "Poor";
			$font_color = "font-color-red";
			$chart_color = "RedZone";
		}
		else{
			$title = "Very Poor";
			$font_color = "font-color-grey";
			$chart_color = "GreyZone";
		}

		if($average < 60)
		{
			$website_heading = "Below 60";
		}
		else{
			$website_heading = round($average);
		}

		// array_push($mobile, ['name'=>$row['name'], 'website'=>$row['website'], 'mobile_speed'=>$mobile_speed, 'security'=>$security]);

		array_push($website, '<li><div class="row"><div class="col-sm-10"><span><b>'.$row['name'].'</b></span></div><div class="col-sm-2"><span class="fot_pink '.$font_color.'">'.$website_heading.'</span></div></div></li>');

		array_push($website_chart, '<li class="'.$chart_color.'"><div class="bar-wrapper"><div class="bar-container"><div class="bar-inner" style="height: '.round($average).'%;"><span class="tooltiptext">'.round($average).' '.$title.'</span></div></div></div></li>');
		array_push($website_detail, '<tr>
		        <td>'. $row['name'] .'</td>
		        <td><a href="https://developers.google.com/speed/pagespeed/insights/?url='.$row['website'].'">'. round($row['desktop_speed']) .'</a></td>
		        <td><a href="https://developers.google.com/speed/pagespeed/insights/?url='.$row['website'].'">'. round($mobile_speed) .'</a></td>
		        <td>'. $security .'</td>
		      </tr>');

	}
	$result['website'] = $website;
	$result['website_chart'] = $website_chart;
	$result['website_detail'] = $website_detail;
	$result['status'] = 'true';
	echo json_encode($result);
}
catch(exception $e){
	$result['status'] = 'false';
	echo json_encode($result);
}
?>
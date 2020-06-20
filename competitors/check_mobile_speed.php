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
		// $average = ($security_score + $mobile_speed_score + $desktop_speed_score) / 3;
		$average = ($mobile_speed_score + $desktop_speed_score) / 2;

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

		if($_POST['organization']==$row['name'])
		{
			if((0 >= $desktop_speed_score) && ($desktop_speed_score >= 9)){
				$desktop_deduct = 10;
			}
			elseif((10 >= $desktop_speed_score) && ($desktop_speed_score >= 19)){
				$desktop_deduct = 9;
			}
			elseif((20 >= $desktop_speed_score) && ($desktop_speed_score >= 29)){
				$desktop_deduct = 8;
			}
			elseif((30 >= $desktop_speed_score) && ($desktop_speed_score >= 39)){
				$desktop_deduct = 7;
			}
			elseif((40 >= $desktop_speed_score) && ($desktop_speed_score >= 49)){
				$desktop_deduct = 6;
			}
			elseif((50 >= $desktop_speed_score) && ($desktop_speed_score >= 59)){
				$desktop_deduct = 5;
			}
			elseif((60 >= $desktop_speed_score) && ($desktop_speed_score >= 69)){
				$desktop_deduct = 4;
			}
			elseif((70 >= $desktop_speed_score) && ($desktop_speed_score >= 79)){
				$desktop_deduct = 3;
			}
			elseif((80 >= $desktop_speed_score) && ($desktop_speed_score >= 89)){
				$desktop_deduct = 2;
			}
			else{
				$desktop_deduct = 1;
			}

			if((0 >= $mobile_speed_score) && ($mobile_speed_score >= 9)){
				$mobile_deduct = 10;
			}
			elseif((10 >= $mobile_speed_score) && ($mobile_speed_score >= 19)){
				$mobile_deduct = 9;
			}
			elseif((20 >= $mobile_speed_score) && ($mobile_speed_score >= 29)){
				$mobile_deduct = 8;
			}
			elseif((30 >= $mobile_speed_score) && ($mobile_speed_score >= 39)){
				$mobile_deduct = 7;
			}
			elseif((40 >= $mobile_speed_score) && ($mobile_speed_score >= 49)){
				$mobile_deduct = 6;
			}
			elseif((50 >= $mobile_speed_score) && ($mobile_speed_score >= 59)){
				$mobile_deduct = 5;
			}
			elseif((60 >= $mobile_speed_score) && ($mobile_speed_score >= 69)){
				$mobile_deduct = 4;
			}
			elseif((70 >= $mobile_speed_score) && ($mobile_speed_score >= 79)){
				$mobile_deduct = 3;
			}
			elseif((80 >= $mobile_speed_score) && ($mobile_speed_score >= 89)){
				$mobile_deduct = 2;
			}
			else{
				$mobile_deduct = 1;
			}

			$your_growth_score = $_POST['your_rank'] - ($mobile_deduct+$desktop_deduct);

			if((100 >= $your_growth_score) && ($your_growth_score >= 90)){
				$growth_title = "Excellent";
				$growth_font_color = "font-color-green";
				$growth_color = "#07c597";
			}
			elseif((89 >= $your_growth_score) && ($your_growth_score >= 80)){
				$growth_title = "Good";
				$growth_font_color = "font-color-blue";
				$growth_color = "#1f8bf7";
			}
			elseif((79 >= $your_growth_score) && ($your_growth_score >= 70)){
				$growth_title = "Fair";
				$growth_font_color = "font-color-orange";
				$growth_color = "#f9bc3c";
			}
			elseif((69 >= $your_growth_score) && ($your_growth_score >= 60)){
				$growth_title = "Poor";
				$growth_font_color = "font-color-red";
				$growth_color = "#f25562";
			}
			else{
				$growth_title = "Very Poor";
				$growth_font_color = "font-color-grey";
				$growth_color = "#bcc0cd";
			}

			$your_growth = '<h3 class="'.$growth_font_color.'">'.$growth_title.'</h3>
							<p>Your practice is behind the competition in practice growth. A complete audit of your processes is strongly recommended.</p>';
			if($security_score==0)
			{
				// if searched organization's security score is 0 then website score is 0
				$average = 0;
			}
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
	$result['your_growth'] = $your_growth;
	$result['your_growth_score'] = $your_growth_score;
	$result['your_growth_color'] = $growth_color;
	$result['status'] = 'true';
	echo json_encode($result);
}
catch(exception $e){
	$result['status'] = 'false';
	echo json_encode($result);
}
?>
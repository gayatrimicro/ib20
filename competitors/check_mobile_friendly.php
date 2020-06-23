<?php
include "../vendor/autoload.php";

$mobile_friendly_score_ar = array();
$mobile_friendly_score = array();
$mobile_friendly_screens = array();
$mobile_friendly_details = array();
set_time_limit(16000);
try
{
	foreach($_POST['competitors'] as $row)
	{
		if($row['website']!="")
		{
			try
			{
				$get_mobile_friendly_data_url = 'https://searchconsole.googleapis.com/v1/urlTestingTools/mobileFriendlyTest:run?key=AIzaSyASdVd39MsNnjcRp-bTz-ukZAqswBza_gM';
				$ar = 	[
						'form_params' =>	[
								'url' => $row['website'],
								'requestScreenshot' => 'true'
							]];
				$mobile_friendly_client = new GuzzleHttp\Client();
				$mobile_friendly_response = $mobile_friendly_client->request('POST', $get_mobile_friendly_data_url, $ar);
				if($mobile_friendly_response->getStatusCode() == 200)
				{
					$mobile_friendly_res1 = $mobile_friendly_response->getBody();
					$mobile_friendly_res11 = json_decode($mobile_friendly_res1, true);
					if(isset($mobile_friendly_res11['mobileFriendliness']))
					{
						if($mobile_friendly_res11['mobileFriendliness'] == "MOBILE_FRIENDLY")
						{
							$mobile_friendly_score_str = "<i class='fa fa-check' aria-hidden='true'></i>";
							$screen_shot = '<img src="data:'. $mobile_friendly_res11['screenshot']['mimeType'] .';base64,' . $mobile_friendly_res11['screenshot']['data'] . '" />';
							// $screen_shot = "";
							$font_color = "font-color-green";
						}
						else{
							$mobile_friendly_score_str = "<i class='fa fa-times' aria-hidden='true'></i>";
							$screen_shot = '<img src="com-assets/img/imgnava.jpg">';
							$font_color = "font-color-red";
						}
					}
					else{
						$mobile_friendly_score_str = "<i class='fa fa-times' aria-hidden='true'></i>";
						$screen_shot = '<img src="com-assets/img/imgnava.jpg">';
						$font_color = "font-color-red";
					}
				}
				else{
					$mobile_friendly_score_str = "<i class='fa fa-times' aria-hidden='true'></i>";
					$screen_shot = '<img src="com-assets/img/imgnava.jpg">';
					$font_color = "font-color-red";
				}
			}
			catch(exception $e1)
			{
				$mobile_friendly_score_str = "<i class='fa fa-times' aria-hidden='true'></i>";
				$screen_shot = '<img src="com-assets/img/imgnava.jpg">';
				$font_color = "font-color-red";
			}
		}
		else{
			$mobile_friendly_score_str = "<i class='fa fa-times' aria-hidden='true'></i>";
			$screen_shot = '<img src="com-assets/img/imgnava.jpg">';
			$font_color = "font-color-red";
		}

		// array_push($mobile_friendly_score_ar, ['name'=>$row['name'], 'website'=>$row['website'], 'mobile_friendly'=>$mobile_friendly_score, 'screen_shot'=>$screen_shot]);
		array_push($mobile_friendly_score, '<li><div class="row"><div class="col-sm-10"><span><b>'.$row['name'].'</b></span></div><div class="col-sm-2"><span class="fot_pink '.$font_color.'">'.$mobile_friendly_score_str.'</span></div></div></li>');
		array_push($mobile_friendly_screens, '<span class="DisSpn"><span class="MobSit">'.$screen_shot.'</span><img src="com-assets/img/border.png"></span>');
		array_push($mobile_friendly_details, '<tr><td>'. $row['name'] .'</td><td><a class="'.$font_color.' target="_blank" href="https://search.google.com/test/mobile-friendly?url='.$row['website'].'">'.$mobile_friendly_score_str.'</a></td></tr>');
	}
	$result['mobile_friendly_score'] = implode('', $mobile_friendly_score);
	$result['mobile_friendly_screens'] = implode('', $mobile_friendly_screens);
	$result['mobile_friendly_details'] = implode('', $mobile_friendly_details);
	$result['status'] = 'true';
	echo json_encode($result);
}
catch(exception $e){
	$result['status'] = 'false';
	echo json_encode($result);
}
?>
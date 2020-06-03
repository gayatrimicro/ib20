<?php
include "../vendor/autoload.php";

$mobile_friendly_score_ar = array();
try
{
	foreach($_POST['competitors'] as $row)
	{
		if($row['website']!="")
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
				if($mobile_friendly_res11['mobileFriendliness'] == "MOBILE_FRIENDLY")
				{
					$mobile_friendly_score = "TRUE";
					$screen_shot = '<img width="200" height="300" src="data:'. $mobile_friendly_res11['screenshot']['mimeType'] .';base64,' . $mobile_friendly_res11['screenshot']['data'] . '" />';
					// $screen_shot = "";
				}
				else{
					$mobile_friendly_score = "FALSE";
					$screen_shot = "";
				}
			}
			else{
				$mobile_friendly_score = "FALSE";
				$screen_shot = "";
			}
		}
		else{
			$mobile_friendly_score = "FALSE";
			$screen_shot = "";
		}
		array_push($mobile_friendly_score_ar, ['name'=>$row['name'], 'website'=>$row['website'], 'mobile_friendly'=>$mobile_friendly_score, 'screen_shot'=>$screen_shot]);
	}
	$result['mobile_friendly'] = $mobile_friendly_score_ar;
	$result['status'] = 'true';
	echo json_encode($result);
}
catch(exception $e){
	$result['status'] = 'false';
	echo json_encode($result);
}
?>
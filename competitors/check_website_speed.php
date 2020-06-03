<?php
include "../vendor/autoload.php";
$website = array();
try
{
	foreach($_POST['competitors'] as $row)
	{
		if($row['website']!="")
		{
			// $security_arr = explode('://', $website_str);
			// if($security_arr[0]=="https")
			// {
			// 	$security = "Pass";
			// }
			// else{
			// 	$security = "Fail";
			// }
			$get_desktop_speed_data_url = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url='.$row['website'].'&key=AIzaSyASdVd39MsNnjcRp-bTz-ukZAqswBza_gM&strategy=desktop&category=PERFORMANCE';
			$desktop_website_client = new GuzzleHttp\Client();
			$desktop_website_response = $desktop_website_client->request('GET', $get_desktop_speed_data_url);
			if($desktop_website_response->getStatusCode() == 200)
			{
				$desktop_website_res1 = $desktop_website_response->getBody();
				$desktop_website_res11 = json_decode($desktop_website_res1, true);

				$desktop_speed = $desktop_website_res11['lighthouseResult']['categories']['performance']['score'] * 100;
			}	
		}
		else{
			$desktop_speed = "Not Found";
		}
		array_push($website, ['name'=>$row['name'], 'website'=>$row['website'], 'desktop_speed'=>$desktop_speed]);
	}
	$result['website_speed'] = $website;
	$result['status'] = 'true';
	echo json_encode($result);
}
catch(exception $e){
	$result['status'] = 'false';
	echo json_encode($result);
}
?>
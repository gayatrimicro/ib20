<?php
include "vendor/autoload.php";

// var_dump($_POST);
// exit();

use PHPMailer\PHPMailer\PHPMailer;
set_time_limit(5016000);

//var_dump($_POST); exit();
$servername = "64.207.177.102";
$username = "usr_google";
$password = "Kd%x761x";

$databese = 'google';
// Create connection
$conn = new mysqli($servername, $username, $password, $databese);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
try{
$sql = "SELECT * FROM business_category where id = '".$_POST['category']."'";
$db_result = $conn->query($sql);
$cat_result = $db_result->fetch_row();
$category = $cat_result[1];

$insert_sql = "INSERT INTO contact_details (ip_address, name, email_id, contact_number, organization, city, state, country, category, compared_at)
VALUES ('".$_SERVER['REMOTE_ADDR']."', '".$_POST['user_name']."', 
			'".$_POST['user_email']."',
			'".$_POST['user_contact']."',
			'".$_POST['name']."',
			'".$_POST['city']."',
			'".$_POST['state']."',
			'".$_POST['country']."',
			'".$category."',
			'".date('Y-m-d h:m:i')."'
		)";
if (mysqli_query($conn, $insert_sql)) {
	//echo "New record created successfully";
} else {
	//echo "Error: " . $insert_sql . "<br>" . mysqli_error($conn);
}

$mail = new PHPMailer;

//From email address and name
$mail->From = $_POST['user_email'];
$mail->FromName = $_POST['user_name'];

//To address and name
$mail->addAddress("laravel@gmicro.us", "User Details");
$mail->addAddress("seo@gmicro.us", "User Details");

//Send HTML or Plain Text email
$mail->isHTML(true);

$mail->Subject = "Search Details";
$mail->Body = "<i><b>Comparision Details<b/></i>".
	"<br><br><b>User Details</b><br>".
	"<b>User Name : ".$_POST['user_name']."</b><br>".
	"<b>User Email : ".$_POST['user_email']."</b><br>".
	"<b>User Contact Number : ".$_POST['user_contact']."</b><br>".
	"<br><b>Search Details</b><br>".
	"<b>Organization Name : ".$_POST['name']."</b><br>".
	"<b>City : ".$_POST['city']."</b><br>".
	"<b>State : ".$_POST['state']."</b><br>".
	"<b>Country : ".$_POST['country']."</b><br>".
	"<b>Category searched for : ".$category."</b><br>".
	"<b>Compared At : ".date('d M, Y h:m a')."</b><br>";

if(!$mail->send()) 
{
   // echo "Mailer Error: " . $mail->ErrorInfo;
} 
else 
{
   // echo "Message has been sent successfully";
}

$organization_name = $_POST['name'];
$organization_website = $_POST['website'];
echo "<br>";
$str = $category.' '.$_POST['city'].' '.$_POST['state'];
$url = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query='.$str.'&key=AIzaSyDtHgeG6tFU_I7r3bqcLkx5OyKLcgEuMt4';

$i = 0;
//echo "<h3 style='color:green;'>Competitors</h3>";
echo "<h4>".$organization_name .' ('. $category .')'."</h4>";
echo "<pre>";
$your_organization_flag = false;
$competitors_ar = array();
$google_rank = array();
$reputation = array();
$website = array();
$seo_score_ar = array();
$mobile_friendly_score_ar = array();
$security_ar = array();
//get desktop and mobile speed from website
if($organization_website!="")
{
	$my_security_ar = explode('://', $organization_website);
	if($my_security_ar[0]=="https")
	{
		$my_security = "Pass";
	}
	else{
		$my_security = "Fail";
	}
	$get_desktop_speed_data_url = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url='.$organization_website.'&key=AIzaSyASdVd39MsNnjcRp-bTz-ukZAqswBza_gM&strategy=desktop&category=PERFORMANCE';
	$desktop_website_client = new GuzzleHttp\Client();
	$desktop_website_response = $desktop_website_client->request('GET', $get_desktop_speed_data_url);
	if($desktop_website_response->getStatusCode() == 200)
	{
		$desktop_website_res1 = $desktop_website_response->getBody();
		$desktop_website_res11 = json_decode($desktop_website_res1, true);

		$my_desktop_speed = $desktop_website_res11['lighthouseResult']['categories']['performance']['score'] * 100;
	}
	$get_mobile_speed_data_url = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url='.$organization_website.'&key=AIzaSyASdVd39MsNnjcRp-bTz-ukZAqswBza_gM&strategy=mobile&category=PERFORMANCE';
	$mobile_website_client = new GuzzleHttp\Client();
	$mobile_website_response = $mobile_website_client->request('GET', $get_mobile_speed_data_url);
	if($mobile_website_response->getStatusCode() == 200)
	{
		$mobile_website_res1 = $mobile_website_response->getBody();
		$mobile_website_res11 = json_decode($mobile_website_res1, true);
		
		$my_mobile_speed = $mobile_website_res11['lighthouseResult']['categories']['performance']['score'] * 100;
	}
	
	$get_my_seo_data_url = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url='.$organization_website.'&key=AIzaSyASdVd39MsNnjcRp-bTz-ukZAqswBza_gM&category=SEO';
	$my_seo_client = new GuzzleHttp\Client();
	$my_seo_response = $my_seo_client->request('GET', $get_my_seo_data_url);
	if($my_seo_response->getStatusCode() == 200)
	{
		$my_seo_res1 = $my_seo_response->getBody();
		$my_seo_res11 = json_decode($my_seo_res1, true);

		$my_seo_score = $my_seo_res11['lighthouseResult']['categories']['seo']['score'] * 100;
	}
	else{
		$my_seo_score = "0";
	}
	
	$get_my_mobile_friendly_data_url = 'https://searchconsole.googleapis.com/v1/urlTestingTools/mobileFriendlyTest:run?key=AIzaSyASdVd39MsNnjcRp-bTz-ukZAqswBza_gM';
		$ar = 	[
				'form_params' =>	[
						'url' => $organization_website,
						'requestScreenshot' => 'true'
					]];
		$my_mobile_friendly_client = new GuzzleHttp\Client();
		$my_mobile_friendly_response = $my_mobile_friendly_client->request('POST', $get_my_mobile_friendly_data_url, $ar);
		if($my_mobile_friendly_response->getStatusCode() == 200)
		{
			$my_mobile_friendly_res1 = $my_mobile_friendly_response->getBody();
			$my_mobile_friendly_res11 = json_decode($my_mobile_friendly_res1, true);
			if($my_mobile_friendly_res11['mobileFriendliness'] == "MOBILE_FRIENDLY")
			{
				$my_mobile_friendly_score = "TRUE";
				$my_screen_shot = '<img width="200" height="300" src="data:'. $my_mobile_friendly_res11['screenshot']['mimeType'] .';base64,' . $my_mobile_friendly_res11['screenshot']['data'] . '" />';
				// $my_screen_shot = "";
			}
			else{
				$my_mobile_friendly_score = "FALSE";
				$my_screen_shot = "";
			}
		}
		else{
			$my_mobile_friendly_score = "FALSE";
			$my_screen_shot = "";
		}
}
else{
	$my_security = "Fail";
	$my_desktop_speed = "Not Found";
	$my_mobile_speed = "Not Found";
	$my_seo_score = "0";
	$my_mobile_friendly_score = "FALSE";
	$my_screen_shot = "";
}

$client = new GuzzleHttp\Client();
$response = $client->request('GET', $url);
if($response->getStatusCode() == 200)
{
	$res1 = $response->getBody();
	$res11 = json_decode($res1, true);

	// print_r($res11); exit();

	if($res11['status'] == 'OK')
	{
		$rank = 100;
		//--------------------------- DISPLAYING COMPETITORS ------------------------------
		foreach($res11['results'] as $row)
		{
			if($your_organization_flag==false)
			{
				$n = 2;
			}
			else{
				$n = 3;
			}

			if($i>$n)
			{
				break;
			}
			else{
				if($organization_name == $row['name'])
				{
					$your_organization_flag = true;
					"<b style='color:red;'>".($i+1)."  <i>".$organization_name."</i></b><br><br>";
					$g_rank = $rank;
					$name = "Your Organization";
					$rating = $row['rating'];
					$reviews = $row['user_ratings_total'];
				}
				else{
					"<b>".($i+1)."  <i>".$row['name']."</i><b><br><br>";
					$g_rank = $rank;
					$name = $row['name'];
					$rating = $row['rating'];
					$reviews = $row['user_ratings_total'];
					//get website from place_id
					$get_website_data_url = 'https://maps.googleapis.com/maps/api/place/details/json?place_id='.$row['place_id'].'&fields=name,website&key=AIzaSyDtHgeG6tFU_I7r3bqcLkx5OyKLcgEuMt4';
					$website_client = new GuzzleHttp\Client();
					$website_response = $website_client->request('GET', $get_website_data_url);
					if($website_response->getStatusCode() == 200)
					{
						$website_res1 = $website_response->getBody();
						$website_res11 = json_decode($website_res1, true);
						if(isset($website_res11['result']['website']))
						{
							$website_str = $website_res11['result']['website'];
						}
						else{
							$website_str = "";	
						}
					}
					else{
						$website_str = "";
					}

					if($website_str!="")
					{
						$security_arr = explode('://', $website_str);
						if($security_arr[0]=="https")
						{
							$security = "Pass";
						}
						else{
							$security = "Fail";
						}
						$get_desktop_speed_data_url = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url='.$website_str.'&key=AIzaSyASdVd39MsNnjcRp-bTz-ukZAqswBza_gM&strategy=desktop&category=PERFORMANCE';
						$desktop_website_client = new GuzzleHttp\Client();
						$desktop_website_response = $desktop_website_client->request('GET', $get_desktop_speed_data_url);
						if($desktop_website_response->getStatusCode() == 200)
						{
							$desktop_website_res1 = $desktop_website_response->getBody();
							$desktop_website_res11 = json_decode($desktop_website_res1, true);

							$desktop_speed = $desktop_website_res11['lighthouseResult']['categories']['performance']['score'] * 100;
						}
						$get_mobile_speed_data_url = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url='.$website_str.'&key=AIzaSyASdVd39MsNnjcRp-bTz-ukZAqswBza_gM&strategy=mobile&category=PERFORMANCE';
						$mobile_website_client = new GuzzleHttp\Client();
						$mobile_website_response = $mobile_website_client->request('GET', $get_mobile_speed_data_url);
						if($mobile_website_response->getStatusCode() == 200)
						{
							$mobile_website_res1 = $mobile_website_response->getBody();
							$mobile_website_res11 = json_decode($mobile_website_res1, true);
							
							$mobile_speed = $mobile_website_res11['lighthouseResult']['categories']['performance']['score'] * 100;
						}
						
						$get_seo_data_url = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url='.$website_str.'&key=AIzaSyASdVd39MsNnjcRp-bTz-ukZAqswBza_gM&category=SEO';
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
						
						$get_mobile_friendly_data_url = 'https://searchconsole.googleapis.com/v1/urlTestingTools/mobileFriendlyTest:run?key=AIzaSyASdVd39MsNnjcRp-bTz-ukZAqswBza_gM';
						$ar = 	[
								'form_params' =>	[
										'url' => $website_str,
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
						$desktop_speed = "Not Found";
						$mobile_speed = "Not Found";
						$security = "Fail";
						$seo_score = "0";
						$mobile_friendly_score = "FALSE";
						$screen_shot = "";
					}
					array_push($website, ['name'=>$name, 'website_url'=>$website_str, 'mobile_speed'=>$mobile_speed, 'desktop_speed'=>$desktop_speed, 'security'=>$security]);
					array_push($seo_score_ar, ['name'=>$name, 'website_url'=>$website_str, 'seo_score'=>$seo_score]);
					array_push($mobile_friendly_score_ar, ['name'=>$name, 'website_url'=>$website_str, 'mobile_friendly'=>$mobile_friendly_score, 'screen_shot'=>$screen_shot]);
					//array_push($security_ar, ['name'=>$name, 'status'=>$security]);
				}
				array_push($competitors_ar, ['name'=>$name]);
			}
			$i++;
			$rank -= 5;
			$ar = array('name'=>$name, 'g_rank'=>$g_rank);
			array_push($google_rank, $ar);
			if(($row['rating']*20) == 100)
			{ 
				$reputation_var1 = ($row['rating'] * 20); 
			}
			else 
			{ 
				$reputation_var1 =  (($row['rating']*20)+1);
			}
			if($reputation_var1 < 60)
			{
				$reputation_var = "Below 60";
			}
			else{
				$reputation_var = $reputation_var1;
			}
			$reputation_ar = array('name'=>$name, 'rating'=>$rating, 'reviews'=>$reviews, 'reputation' => $reputation_var);
			array_push($reputation, $reputation_ar);
		}
		if($your_organization_flag==false)
		{
			//echo "<b>4  <i>".$organization_name."</i><b><br><br>";			
			$g_rank = 60;
			$name = "Your Organization";
			array_push($competitors_ar, ['name'=>$name]);
			$ar = array('name'=>$name, 'g_rank'=>$g_rank);
			array_push($google_rank, $ar);
			$reputation_ar = array('name'=>$name, 'rating'=>$rating, 'reviews'=>$reviews, 'reputation' => $reputation_var);
			array_push($reputation, $reputation_ar);
			array_push($website, ['name'=>$name, 'website_url'=>$organization_website, 'mobile_speed'=>$my_mobile_speed, 'desktop_speed'=>$my_desktop_speed, 'security'=>$my_security]);
			array_push($seo_score_ar, ['name'=>$name, 'website_url'=>$organization_website, 'seo_score'=>$my_seo_score]);
			array_push($mobile_friendly_score_ar, ['name'=>$name, 'website_url'=>$organization_website, 'mobile_friendly'=>$my_mobile_friendly_score, 'screen_shot'=>$my_screen_shot]);
			//array_push($security_ar, ['name'=>$name, 'status'=>$my_security]);
		}
	}
	else{
		echo "Something went wrong";
	}
}
else{
	echo "in else of status code 200";
}

//-------------------------- DISPLAYING GOOGLE RANK ---------------------------------
echo "<hr>";
echo "<h3 style='color:green;'>Competitors<br><i>Here's how you rank against your competitors</i></h3><br>";
$i=0;
foreach ($google_rank as $row) {
	if($row['name'] == "Your Organization")
	{
		echo ($i+1)." <b>".$organization_name."</b><br><br>";
		$i++;
	}
	else{
		echo ($i+1)." <b>".$row['name']."</b><br><br>";
		$i++;
	}
}
//-------------------------- DISPLAYING GOOGLE RANK ---------------------------------
echo "<hr>";
echo "<h3 style='color:green;'>Google Rank<br><i>This shows where you appear in Google search results</i></h3><br>";
$i=0;
foreach ($google_rank as $row) {
	if($row['name'] != "Your Organization")
	{
		echo ($i+1)." <b>".$row['name']." - ".$row['g_rank']."</b><br><br>";
		$i++;
	}
	else{
		echo ($i+1)." <b>".$organization_name." - ".$row['g_rank']."</b><br><br>";
		$i++;
	}
}

//-------------------------- DISPLAYING REPUTATION ---------------------------------
echo "<hr>";
echo "<h3 style='color:green;'>Reputation</h3>";
$i=0;
// arsort($reputation);
foreach ($reputation as $row) {
	if($row['name'] != "Your Organization")
	{
		echo ($i+1)." <b>".$row['name']." - ". $row['reputation'] ."<br>\tRating (".$row['rating'].") - Reviews (".$row['reviews'].") </b><br><br>";
		$i++;
	}
	else{
		echo ($i+1)." <b>".$organization_name." - ". $row['reputation'] ."<br>\tRating (".$row['rating'].") - Reviews (".$row['reviews'].") </b><br><br>";
		$i++;
	}
}

//-------------------------- DISPLAYING WEBSITE ---------------------------------
echo "<hr>";
echo "<h3 style='color:green;'>Website <br><i>Your website score is calculated based on the following factors:</i><br>";
echo "\t - Desktop speed<br>";
echo "\t - Mobile speed<br>";
echo "\t - Security</h3><br>";
$i=0;
// arsort($reputation);
foreach ($website as $row) {
	if($row['name'] != "Your Organization")
	{
		echo ($i+1)." <b>".$row['name']."<br>\t".$row['website_url']."<br>\tDesktop Speed (".$row['desktop_speed'].") <br>\tMobile Speed (".$row['mobile_speed'].") <br>\tSecurity (".$row['security'].")</b><br><br>";
		$i++;
	}
	else{
		echo ($i+1)." <b>".$organization_name."<br>\t".$row['website_url']."<br>\tDesktop Speed (".$row['desktop_speed'].") <br>\tMobile Speed (".$row['mobile_speed'].") <br>\tSecurity (".$row['security'].")</b><br><br>";
		$i++;
	}
}

//-------------------------- DISPLAYING SEO SCORE ---------------------------------
echo "<hr>";
echo "<h3 style='color:green;'>Website SEO Score</h3>";
$i=0;
// arsort($reputation);
foreach ($seo_score_ar as $row) {
	if($row['name'] != "Your Organization")
	{
		echo ($i+1)." <b>".$row['name']."<br>\t".$row['website_url']."<br>\tSEO Score (".$row['seo_score'].")<br><br>";
		$i++;
	}
	else{
		echo ($i+1)." <b>".$organization_name."<br>\t".$row['website_url']."<br>\tSEO Score (".$row['seo_score'].")<br><br>";
		$i++;
	}
}

//-------------------------- DISPLAYING MOBILE FRIENDLY STATUS ---------------------------------
echo "<hr>";
echo "<h3 style='color:green;'>Website Mobile Friendly Status</h3>";
$i=0;
// arsort($reputation);
foreach ($mobile_friendly_score_ar as $row) {
	if($row['name'] != "Your Organization")
	{
		echo ($i+1)." <b>".$row['name']."<br>\t".$row['website_url']."<br>\tMobile Friendly Status (".$row['mobile_friendly'].")<br>\t".$row['screen_shot']."
		<br><br>";
		$i++;
	}
	else{
		echo ($i+1)." <b>".$organization_name."<br>\t".$row['website_url']."<br>\tMobile Friendly Status (".$row['mobile_friendly'].")<br>\t".$row['screen_shot']."
		<br><br>";
		$i++;
	}
}

}
catch(exception $e){
	print_r("Something went wrong");	
}
?>
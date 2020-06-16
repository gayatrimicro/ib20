
<?php
include "../vendor/autoload.php";
include "db_connection.php";

use PHPMailer\PHPMailer\PHPMailer;


$sql = "SELECT * FROM business_category where id = '".$_POST['category']."'";
$db_result = $conn->query($sql);
$cat_result = $db_result->fetch_row();
$category = $cat_result[1];

$organization_name = $_POST['name'];
$organization_website = $_POST['website'];

$organizationdetails['name'] = $_POST['name'];
$organizationdetails['website'] = $_POST['website'];
$organizationdetails['user_rating'] = $_POST['user_rating'];
$organizationdetails['user_reviews'] = $_POST['user_reviews'];
$organizationdetails['category'] = $category;

$pre_comp_ar = array();
$index = 0;
$search_str_ar = [$_POST['area'], $_POST['city'], $_POST['state'], $_POST['country']];

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

start_search: $search_str = implode(' ', $search_str_ar);
$str = echo $category.' '.$search_str;
$url = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query='.$str.'&key=AIzaSyDWVxEKUAr7SKD8oJdaX-SVF3FW3wsk0CU';
$client = new GuzzleHttp\Client();
$response = $client->request('GET', $url);
if($response->getStatusCode() == 200)
{
	$res1 = $response->getBody();
	$res11 = json_decode($res1, true);

	if($res11['status'] == 'OK')
	{
		if($res11['results'][0]['name']!=$organization_name && $res11['results'][1]['name']!=$organization_name && $res11['results'][2]['name']!=$organization_name)
		{
			foreach($res11['results'] as $row)
			{
				array_push($pre_comp_ar, $row);
			}
			get_competitor_list($organizationdetails, $pre_comp_ar);
		}
		else{
			if(count($search_str_ar)>1)
			{
				unset($search_str_ar[$index]);
				$index++;
				goto start_search;
			}
			else{
				foreach($res11['results'] as $row)
				{
					array_push($pre_comp_ar, $row);
				}
				get_competitor_list($organizationdetails, $pre_comp_ar);
			}
		}
	}
	else{
		$result['status'] = 'false';
		echo json_encode($result);
	}
}
else{
	$result['status'] = 'false';
	echo json_encode($result);
}

function get_competitor_list($organizationdetails, $org_name_ar)
{
	$org_name = $organizationdetails['name'];
	$ar_count = count($org_name_ar);
	$comp_ar = array();
	if(in_array($org_name, $org_name_ar))
	{
		//if organization name is exists in first page result means in frist 20 result
		if($org_name_ar[0]!=$org_name && $org_name_ar[1]!=$org_name && $org_name_ar[2]!=$org_name)
		{
			$key = array_search($org_name, $org_name_ar);
			for($i=$key-3; $i<=$key; $i++)
			{
				array_push($comp_ar, $org_name_ar[$i]);
			}			
			$result = get_competitor_details($organizationdetails, $comp_ar);
			echo json_encode($result);
			// return $comp_ar;
		}
		else{ // if searched name falls in first position
			for($i=0; $i<4; $i++)
			{
				array_push($comp_ar, $org_name_ar[$i]);
			}
			$result = get_competitor_details($organizationdetails, $comp_ar);
			echo json_encode($result);
		}
	}
	else{
		if($ar_count > 3)
		{
			for($i=$ar_count-3; $i<$ar_count; $i++)
			{
				array_push($comp_ar, $org_name_ar[$i]);
			}
			$result = get_competitor_details($organizationdetails, $comp_ar);
			echo json_encode($result);
		}
		else{
			$result = get_competitor_details($organizationdetails, $org_name_ar);
			echo json_encode($result);
		}
	}
}
function get_competitor_details($organizationdetails, $data)
{
	// $i = 0;
	$category = $organizationdetails['category'];
	$your_organization_flag = false;
	$competitors_ar = array();
	$competitors_html = array();
	$google_rank = array();
	$google_rank_html = array();
	$google_rank_detail = array();

	$reputation = array();
	$reputation_chart = array();
	$total_reviews = array();
	$average_rating = array();
	array_push($google_rank_detail, '<li class="TimLin"></li>');
	$result = array();

	$google_rank = array();
	$rank = 100;
	$i = 0;
	$user_rating = $organizationdetails['user_rating'];
	$user_reviews = $organizationdetails['user_reviews'];
	$organization_name = $organizationdetails['name'];
	$organization_website = $organizationdetails['website'];
	foreach($data as $row)
	{		
		$g_rank = $rank;
		$name = $row['name'];
		$rating = $row['rating'];
		$reviews = $row['user_ratings_total'];

		$get_website_data_url = 'https://maps.googleapis.com/maps/api/place/details/json?place_id='.$row['place_id'].'&fields=name,website&key=AIzaSyDWVxEKUAr7SKD8oJdaX-SVF3FW3wsk0CU';
		$website_client = new GuzzleHttp\Client();
		$website_response = $website_client->request('GET', $get_website_data_url);
		if($website_response->getStatusCode() == 200)
		{
			$website_res1 = $website_response->getBody();
			$website_res11 = json_decode($website_res1, true);
			if(isset($website_res11['result']['website']))
			{
				if($website_res11['result']['website']!="undefined")
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
		}
		else{
			$website_str = "";
		}
		$rank -= 5;
			if((count($competitors_html)+1)==1){
				$com_rank = "1st";
			}elseif((count($competitors_html)+1)==2){
				$com_rank = "2nd";
			}elseif((count($competitors_html)+1)==3){
				$com_rank = "3rd";
			}elseif((count($competitors_html)+1)==4){
				$com_rank = "4th";
			}
			array_push($competitors_ar, ['name'=>$name, 'website'=>$website_str]);
			array_push($competitors_html, '<li><p><span class="Rnk">'.$com_rank.'</span><span class="RTxt"> '.$name.'</span></p></li>');
			if(($row['rating']*20) == 100)
			{ 
				$reputation_var1 = ($row['rating'] * 20); 
			}
			else 
			{ 
				$reputation_var1 =  (($row['rating']*20)+1);
			}

			if((100 >= $reputation_var1) && ($reputation_var1 >= 90)){
				$reputation_title = "Excellent";
				$font_color = "font-color-green";
				$chart_color = "GreenZone";
			}
			elseif((89 >= $reputation_var1) && ($reputation_var1 >= 80)){
				$reputation_title = "Good";
				$font_color = "font-color-blue";
				$chart_color = "BlueZone";
			}
			elseif((79 >= $reputation_var1) && ($reputation_var1 >= 70)){
				$reputation_title = "Fair";
				$font_color = "font-color-orange";
				$chart_color = "OrangeZone";
			}
			elseif((69 >= $reputation_var1) && ($reputation_var1 >= 60)){
				$reputation_title = "Poor";
				$font_color = "font-color-red";
				$chart_color = "RedZone";
			}
			else{
				$reputation_title = "Very Poor";
				$font_color = "font-color-grey";
				$chart_color = "GreyZone";
			}

			if($reputation_var1 < 60)
			{
				$reputation_var = "Below 60";
				$reputation_var1 = 60;
			}
			else{
				$reputation_var = $reputation_var1;
			}
			if($name==$organizationdetails['name'])
			{
				$your_rank = $g_rank;
			}
			array_push($google_rank, '<li class="GreenZone"><div class="bar-wrapper"><div class="bar-container"><div class="bar-inner" style="height:'.$g_rank.'%;"><span class="tooltiptext">'.$g_rank.' Excellent</span></div></div></div></li>');
			array_push($google_rank_html, '<li><div class="row"><div class="col-sm-10"><span><b>'.$name.'</b></span></div><div class="col-sm-2"><span class="fot_pink font-color-green">'.$g_rank.'</span></div></div></li>');
			array_push($google_rank_detail, '<li class="LiGP GreenZone"><p class="GP1">'.$name.'</p><p class="GP2">'.$website_str.'</p><p class="GPs1"></p><p class="GPs2"></p></li>');
			array_push($reputation, '<li><div class="row"><div class="col-sm-10"><span><b>'.$name.'</b></span></div><div class="col-sm-2"><span class="fot_pink '.$font_color.'">'.$reputation_var.'</span></div></div></li>');

			array_push($reputation_chart, '<li class="'.$chart_color.'">
									<div class="bar-wrapper">
										<div class="bar-container">
											<div class="bar-inner" style="height: '.$reputation_var1.'%;"><span class="tooltiptext">'.$reputation_var1.' ',$reputation_title.'</span></div>
										</div>
									</div>
								</li>');
			array_push($total_reviews, '<tr><td>'.$name.'</td><td>'.$reviews.'</td></tr>');
			array_push($average_rating, '<tr><td>'.$name.'</td><td>'.$rating.'</td></tr>');
		$i++;
	}
	if(count($data) == 3)
	{
		$g_rank = 60;
		// $name = "Your Organization";
		if($_POST['website']!="undefined")
		{
			$your_website_str = $_POST['website'];
		}
		else{
			$your_website_str = "";
		}

		if((100 >= $reputation_var1) && ($reputation_var1 >= 90)){
			$reputation_title = "Excellent";
			$font_color = "font-color-green";
			$chart_color = "GreenZone";
		}
		elseif((89 >= $reputation_var1) && ($reputation_var1 >= 80)){
			$reputation_title = "Good";
			$font_color = "font-color-blue";
			$chart_color = "BlueZone";
		}
		elseif((79 >= $reputation_var1) && ($reputation_var1 >= 70)){
			$reputation_title = "Fair";
			$font_color = "font-color-orange";
			$chart_color = "OrangeZone";
		}
		elseif((69 >= $reputation_var1) && ($reputation_var1 >= 60)){
			$reputation_title = "Poor";
			$font_color = "font-color-red";
			$chart_color = "RedZone";
		}
		else{
			$reputation_title = "Very Poor";
			$font_color = "font-color-grey";
			$chart_color = "GreyZone";
		}
		$name = $_POST['name'];
		$your_rank = 60;
		array_push($competitors_ar, ['name'=>$name, 'website'=>$your_website_str]);
		array_push($competitors_html, '<li><p><span class="Rnk">4th</span><span class="RTxt"> '.$name.'</span></p></li>');

		// $ar = array('name'=>$name, 'g_rank'=>$g_rank);
		array_push($google_rank, '<li class="RedZone"><div class="bar-wrapper"><div class="bar-container"><div class="bar-inner" style="height:60%;"><span class="tooltiptext">60 Poor</span></div></div></div></li>');
		array_push($google_rank_html, '<li><div class="row"><div class="col-sm-10"><span><b>'.$name.'</b></span></div><div class="col-sm-2"><span class="fot_pink font-color-red">'.$g_rank.'</span></div></div></li>');
		array_push($google_rank_detail, '<li class="LiGP RedZone"><p class="GP1">'.$name.'</p><p class="GP2">'.$your_website_str.'</p><p class="GPs1"></p><p class="GPs2"></p></li>');


		$reputation_ar = array('name'=>$name, 'rating'=>$organizationdetails['user_rating'], 'reviews'=>$organizationdetails['user_reviews'], 'reputation' => $reputation_var);

		array_push($reputation, '<li><div class="row"><div class="col-sm-10"><span><b>'.$name.'</b></span></div><div class="col-sm-2"><span class="fot_pink '.$font_color.'">'.$reputation_var.'</span></div></div></li>');

		// $reputation_chart_ar = array('name'=>$name, 'rating'=>$rating, 'reviews'=>$reviews, 'reputation' => $reputation_var);
		array_push($reputation_chart, '<li class="'.$chart_color.'">
								<div class="bar-wrapper">
									<div class="bar-container">
										<div class="bar-inner" style="height: '.$reputation_var1.'%;"><span class="tooltiptext">'.$reputation_var1.' ',$reputation_title.'</span></div>
									</div>
								</div>
							</li>');

		// $reputation_detail_ar = array('name'=>$name, 'rating'=>$rating, 'reviews'=>$reviews, 'reputation' => $reputation_var);
		array_push($total_reviews, '<tr><td>'.$name.'</td><td>'.$organizationdetails['user_reviews'].'</td></tr>');
		array_push($average_rating, '<tr><td>'.$name.'</td><td>'.$organizationdetails['user_rating'].'</td></tr>');
	}

	$result['competitors'] = $competitors_ar;
	$result['competitors_div'] = implode('', $competitors_html);
	$result['google_rank'] = implode('', $google_rank_html);
	$result['google_rank_chart'] = implode('', $google_rank);
	$result['google_rank_detail'] = implode('', $google_rank_detail);
	$result['reputation'] = implode('', $reputation);
	$result['reputation_chart'] = implode('', $reputation_chart);
	$result['total_reviews'] = implode('', $total_reviews);
	$result['average_rating'] = implode('', $average_rating);
	$result['organization_name'] = $name;
	$result['category_name'] = $category;
	$result['your_rank'] = $your_rank;
	$result['status'] = 'true';
	return $result;
}
?>
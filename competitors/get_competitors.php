
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

$str = $category.' '.$_POST['city'].' '.$_POST['state'];
$url = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query='.$str.'&key=AIzaSyDtHgeG6tFU_I7r3bqcLkx5OyKLcgEuMt4';

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

$i = 0;
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
$client = new GuzzleHttp\Client();
$response = $client->request('GET', $url);
if($response->getStatusCode() == 200)
{
	$res1 = $response->getBody();
	$res11 = json_decode($res1, true);

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
					$g_rank = $rank;
					$name = "Your Organization";
					$rating = $row['rating'];
					$reviews = $row['user_ratings_total'];
				}
				else{
					$g_rank = $rank;
					$name = $row['name'];
					$rating = $row['rating'];
					$reviews = $row['user_ratings_total'];

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
					
					if(($i+1)==1){
						$com_rank = "1st";
					}elseif(($i+1)==2){
						$com_rank = "2nd";
					}elseif(($i+1)==3){
						$com_rank = "3rd";
					}elseif(($i+1)==4){
						$com_rank = "4th";
					}					
					array_push($competitors_ar, ['name'=>$name, 'website'=>$website_str]);
					array_push($competitors_html, '<li><p><span class="Rnk">'.$com_rank.'</span><span class="RTxt"> '.$name.'</span></p></li>');
				}
			}
			$i++;
			$rank -= 5;
			// $ar = array('name'=>$name, 'g_rank'=>$g_rank);
			array_push($google_rank, '<li><div class="bar-wrapper"><div class="bar-container"><div class="bar-inner" style="height:'.$g_rank.'%;"><span class="tooltiptext">'.$g_rank.' Excellent</span></div></div></div></li>');
			array_push($google_rank_html, '<li><div class="row"><div class="col-sm-10"><span><b>'.$name.'</b></span></div><div class="col-sm-2"><span class="fot_pink">'.$g_rank.'</span></div></div></li>');
			array_push($google_rank_detail, '<li class="LiGP"><p class="GP1">'.$name.'</p><p class="GP2">'.$website_str.'</p><p class="GPs1"></p><p class="GPs2"></p></li>');
			if(($row['rating']*20) == 100)
			{ 
				$reputation_var1 = ($row['rating'] * 20); 
			}
			else 
			{ 
				$reputation_var1 =  (($row['rating']*20)+1);
			}

			if((100 <= $reputation_var1) && ($reputation_var1 >= 90)){
				$reputation_title = "Excellent";
			}
			elseif((89 <= $reputation_var1) && ($reputation_var1 >= 80)){
				$reputation_title = "Good";
			}
			elseif((79 <= $reputation_var1) && ($reputation_var1 >= 70)){
				$reputation_title = "Fair";
			}
			elseif((69 <= $reputation_var1) && ($reputation_var1 >= 60)){
				$reputation_title = "Poor";
			}
			else{
				$reputation_title = "Very Poor";
			}

			if($reputation_var1 < 60)
			{
				$reputation_var = "Below 60";
				$reputation_var1 = 60;
			}
			else{
				$reputation_var = $reputation_var1;
			}
			// $reputation_ar = array('name'=>$name, 'rating'=>$rating, 'reviews'=>$reviews, 'reputation' => $reputation_var);
			array_push($reputation, '<li><div class="row"><div class="col-sm-10"><span><b>'.$name.'</b></span></div><div class="col-sm-2"><span class="fot_pink">'.$reputation_var.'</span></div></div></li>');

			// $reputation_chart_ar = array('name'=>$name, 'rating'=>$rating, 'reviews'=>$reviews, 'reputation' => $reputation_var);
			array_push($reputation_chart, '<li>
									<div class="bar-wrapper">
										<div class="bar-container">
											<div class="bar-inner" style="height: '.$reputation_var1.'%;"><span class="tooltiptext">'.$reputation_var1.' ',$reputation_title.'</span></div>
										</div>
									</div>
								</li>');

			// $reputation_detail_ar = array('name'=>$name, 'rating'=>$rating, 'reviews'=>$reviews, 'reputation' => $reputation_var);
			array_push($total_reviews, '<tr><td>'.$name.'</td><td>'.$reviews.'</td></tr>');
			array_push($average_rating, '<tr><td>'.$name.'</td><td>'.$rating.'</td></tr>');
		}
		if($your_organization_flag==false)
		{
			$g_rank = 60;
			// $name = "Your Organization";
			$name = $_POST['name'];
			array_push($competitors_ar, ['name'=>$name, 'website'=>$_POST['website']]);
			array_push($competitors_html, '<li><p><span class="Rnk">4th</span><span class="RTxt"> '.$name.'</span></p></li>');

			// $ar = array('name'=>$name, 'g_rank'=>$g_rank);
			array_push($google_rank, '<li><div class="bar-wrapper"><div class="bar-container"><div class="bar-inner" style="height:60%;"><span class="tooltiptext">60 Poor</span></div></div></div></li>');
			array_push($google_rank_html, '<li><div class="row"><div class="col-sm-10"><span><b>'.$name.'</b></span></div><div class="col-sm-2"><span class="fot_pink">'.$g_rank.'</span></div></div></li>');
			array_push($google_rank_detail, '<li class="LiGP"><p class="GP1">'.$name.'</p><p class="GP2">'.$_POST['website'].'</p><p class="GPs1"></p><p class="GPs2"></p></li>');


			$reputation_ar = array('name'=>$name, 'rating'=>$rating, 'reviews'=>$reviews, 'reputation' => $reputation_var);

			array_push($reputation, '<li><div class="row"><div class="col-sm-10"><span><b>'.$name.'</b></span></div><div class="col-sm-2"><span class="fot_pink">'.$reputation_var.'</span></div></div></li>');

			// $reputation_chart_ar = array('name'=>$name, 'rating'=>$rating, 'reviews'=>$reviews, 'reputation' => $reputation_var);
			array_push($reputation_chart, '<li>
									<div class="bar-wrapper">
										<div class="bar-container">
											<div class="bar-inner" style="height: '.$reputation_var1.'%;"><span class="tooltiptext">'.$reputation_var1.' ',$reputation_title.'</span></div>
										</div>
									</div>
								</li>');

			// $reputation_detail_ar = array('name'=>$name, 'rating'=>$rating, 'reviews'=>$reviews, 'reputation' => $reputation_var);
			array_push($total_reviews, '<tr><td>'.$name.'</td><td>'.$reviews.'</td></tr>');
			array_push($average_rating, '<tr><td>'.$name.'</td><td>'.$rating.'</td></tr>');
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
		$result['status'] = 'true';
		echo json_encode($result);
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

?>
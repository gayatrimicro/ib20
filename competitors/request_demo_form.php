
<?php
include "../vendor/autoload.php";
include "db_connection.php";

use PHPMailer\PHPMailer\PHPMailer;

$mail = new PHPMailer;

//From email address and name
$mail->From = $_POST['email'];
$mail->FromName = $_POST['full_name'];

//To address and name
$mail->addAddress("laravel@gmicro.us", "Request for Demo");
// $mail->addAddress("seo@gmicro.us", "User Details");

//Send HTML or Plain Text email
$mail->isHTML(true);

$mail->Subject = "Request for Demo";
$mail->Body = "<i><b>Request for Demo<b/></i>".
	"<br><br><b></b><br>".
	"<b>Full Name : ".$_POST['full_name']."</b><br>".
	"<b>Practice Name : ".$_POST['practice_name']."</b><br>".
	"<b>Email : ".$_POST['email']."</b><br>".
	"<br><b></b><br>".
	"<b>Phone : ".$_POST['phone']."</b><br>".
	"<b>Zip : ".$_POST['zip']."</b><br>".
	"<b>Number of providers : ".$_POST['provider_number']."</b><br>";

	if(!$mail->send())
	{
		$result['status'] = 'true';
		echo json_encode($result);
	}
	else
	{
		$result['status'] = 'false';
		echo json_encode($result);
	}
?>
<?php
if(isset($_POST))
{
	include "db_connection.php";
	$from_date = date('Y-m-d', strtotime(date('Y-m-d') .'-7 days'));
	$sql = "SELECT COUNT(*) as 'attempt_count' FROM `contact_details` where date(`compared_at`) > '".$from_date."' AND date(`compared_at`) < '".date('Y-m-d')."' AND `ip_address` = '".$_SERVER['REMOTE_ADDR']."'";
	$db_result = $conn->query($sql);
	$query_result = $db_result->fetch_row();

	if($query_result[0] > 3)
	{
		$result['status'] = 'false';
		// $result['status'] = 'true';
		echo json_encode($result); 
	}
	else{
		$result['status'] = 'true';
		echo json_encode($result);
	}
}
?>
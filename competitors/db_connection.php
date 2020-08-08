<?php
$servername = "70.32.97.149";
$username = "usr_ib116com_db";
$password = "C*y7i3s9df";

$databese = 'ibcom_db';

$conn = new mysqli($servername, $username, $password, $databese);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
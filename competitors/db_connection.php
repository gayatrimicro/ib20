<?php
$servername = "64.207.177.102";
$username = "usr_google";
$password = "Kd%x761x";

$databese = 'google';

$conn = new mysqli($servername, $username, $password, $databese);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
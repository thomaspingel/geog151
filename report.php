<?php

//https://support.godaddy.com/help/article/216/connecting-to-mysql-using-php

//Connect To Database
$hostname="68.178.143.103";
$username="mapthing";
$password="M@pth1ng";
$dbname="mapthing";
$usertable="simplelog";
$field = "logstring";
$data = $_POST["data"];

mysql_connect($hostname,$username, $password) or die ("<html><script language='JavaScript'>alert('Unable to connect to database! Please try again later.'),history.go(-1)</script></html>");
mysql_select_db($dbname);

$result = mysql_query("INSERT INTO $usertable ($field) VALUES('$data')");
	
echo($data);

?>
<?php

$name=$_POST['name'];

$data="Hello ".$name;

$json_data=array("Name"=>$data);

$data_return=json_encode($json_data);

echo $data_return;

?>
<?php 
	require 'db_connection.php';

	$data = json_decode(file_get_contents("php://input"));

	if(isset($data->customer_first_name)
		&& isset($data->customer_last_name) 
		&& isset($data->customer_email) 
		&& isset($data->customerids) 

		&& !empty(trim($data->customer_first_name))
		&& !empty(trim($data->customer_last_name))
		&& !empty(trim($data->customer_email))
		&& !empty(trim($data->customerids))
		){
			
		$customer_first_name = mysqli_real_escape_string($db_conn, trim($data->customer_first_name));
		$customer_last_name = mysqli_real_escape_string($db_conn, trim($data->customer_last_name));
		$customer_email = mysqli_real_escape_string($db_conn, trim($data->customer_email));  
		$customerids = mysqli_real_escape_string($db_conn, trim($data->customerids));

		$add = mysqli_query($db_conn,"UPDATE customers_v02 
			SET 
				customer_first_name ='$customer_first_name', 
				customer_last_name ='$customer_last_name', 				
				customer_email ='$customer_email' 
			WHERE customer_id='$customerids'");

		if($add){
			echo json_encode(["success"=>true]);
			return;
			}else{
					echo json_encode(["success"=>false,"msg"=>"Server Problem. Please Try Again"]);
			return;
			} 

	} else{
			echo json_encode(["success"=>false,"msg"=>"Please fill all the required fields!"]);
		return;
	}
?>
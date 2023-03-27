<?php
  require 'db_connection.php';

  $data = json_decode(file_get_contents("php://input"));

  if(isset($data->customerids) 
    && !empty(trim($data->customerids))
    ){
    $addcustomerid = mysqli_real_escape_string($db_conn, trim($data->customerids));
    $allCustomers = mysqli_query($db_conn,"SELECT * FROM customer_v02 WHERE customer_id = '".$addcustomerid."'");
    
    if(mysqli_num_rows($allCustomers) > 0){

      while($row = mysqli_fetch_array($allCustomers)){

        $viewjson["customer_id"] = $row['customer_id'];
        $viewjson["customer_first_name"] = $row['customer_first_name'];
        $viewjson["customer_last_name"] = $row['customer_last_name'];
        $viewjson["customer_email"] = $row['customer_email'];
        $viewjson["customer_created"] = $row['customer_created'];
        $viewjson["customer_updated"] = $row['customer_updated'];

        $json_array["customerdata"][] = $viewjson;
      }
      echo json_encode(["success"=>true,"userlist"=>$json_array]);
      return;
        
    }
    else{
      echo json_encode(["success"=>false]);
      return;
    }      
  }
?>
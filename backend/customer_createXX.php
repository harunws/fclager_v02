<?php
  require 'db_connection.php';

  $data = json_decode(file_get_contents("php://input"));

  if(isset($data->customerfirstname) 
    && isset($data->customerlastname)
    && isset($data->customeremail)
   

    && !empty(trim($data->customerfirstname))
    && !empty(trim($data->customerlastname))
    && !empty(trim($data->customeremail))
    ){

      $customerfirstname = mysqli_real_escape_string($db_conn, trim($data->customerfirstname));
      $customerlastname = mysqli_real_escape_string($db_conn, trim($data->customerlastname));      
      $customeremail = mysqli_real_escape_string($db_conn, trim($data->customeremail));      


      $add = mysqli_query($db_conn, " INSERT INTO customers_v02 ( customer_first_name, customer_last_name,      customer_email)  VALUES  ('$customerfirstname',        '$customerlastname', '$customeremail')");

      if($add){
        $last_id =  mysqli_insert_id($db_conn);
        echo json_encode(["success" => true, "insertid" => $last_id]);
        return; 
      }
      else
      {
        echo json_encode(["success" => false, "msg" => "Server problem. Try again!"]);
        return;
      }

    }else
    {
      echo json_encode(["success" => false, "msg" => "Fill all required fields!"]);
      return;
    }
?>
<?php
  require 'db_connection.php';
  
  $data = json_decode(file_get_contents("php://input"));

  if(isset($data->userids) && !empty(trim($data->userids)))
  {
    $userids = mysqli_real_escape_string($db_conn, trim($data->userids));

    $add = mysqli_query($db_conn, "DELETE FROM user WHERE user_id = '$userids'");

      if($add)
      {
        echo json_encode(["success" => true]);
        return;
      }
      else
      {
        echo json_encode(["success" => false, "message" => "Server!"]);
        return;
      }
  }
  else
  {
    echo json_encode(["success" => false, "message" => "Please fill all required fields!"]);
    return;
  }
?>
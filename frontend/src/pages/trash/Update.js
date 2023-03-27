import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import UpdateUser from "./UpdateUser";

export default function Update() 
{
  let params = useParams(); 

  useEffect( () => {
    window.scrollTo(0, 0);
   updateuserlist(params.ids);
  }, [params.ids]); 
  //! Dependency "param.ids" not include in tut_src in array [param.ids] added after react warning.

  const [isuser, setuser] = useState([]);
  const [isloaduser, setloaduser] = useState(false);

  const updateuserlist = async (ids) => {
    try {
      axios.post(`http://localhost/fclager/fclager_v01/backend/singleuser.php`, { 
       
        userids: ids,
      })
      .then(res => {

        console.log(res.data.userlist.userdata)

        setuser(res.data.userlist.userdata[0]);

        setloaduser(true);
       
      })
    } catch (error) { throw error;}    
  }

  return (
    <div>
    {isloaduser && 

      < UpdateUser list={isuser} />
    }
    </div>
  );
};

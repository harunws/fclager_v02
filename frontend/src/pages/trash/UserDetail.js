import React from 'react';
import axios from 'axios';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function UserDetail(){
  let params = useParams(); 

  useEffect( () => {   
   single_user_detail(params.ids);
  }, [params.ids]); 

  //! Dependency "param.ids" not include in tut_src in array [param.ids] added after react warning.

  const [isuser, setuser] = useState([]);
  
  const single_user_detail = async (ids) => {
    try {
      axios.post(`http://localhost/fclager/fclager_v01/backend/singleuser.php`, { 
       
        userids: ids,
      })
      .then(res => {

        console.log(res.data.userlist.userdata)

        setuser(res.data.userlist.userdata[0]);
            
      })
    } catch (error) { throw error;}    
  }

  return (

    <div className='container mt-4'>
      <h4> User Detail Page</h4>

      { isuser ? 
        <div>
          {/* Here find a solution for index */}
          <p> # {isuser.id}</p>
          <p>Name : {isuser.name} </p> 
          <p>Email : {isuser.email} </p> 
          <p>Date : {isuser.date} </p> 
        </div> : null      
      }
    </div>
  )
}

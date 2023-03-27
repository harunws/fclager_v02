import React from 'react';
import axios from 'axios';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function CustomerDetail(){
  let params = useParams(); 

  useEffect( () => {   
   single_customer_detail(params.ids);
  }, [params.ids]); 

  //! Dependency "param.ids" not include in tut_src in array [param.ids] added after react warning.

  const [iscustomer, setCustomer] = useState([]);
  
  const single_customer_detail = async (ids) => {
    try {
      axios.post(`http://localhost/fclager_v02/backend/customer_single.php`, { 
       
        customerids: ids,
      })
      .then(res => {

        console.log(res.data.customerlist.customerdata)

        setCustomer(res.data.customerlist.customerdata[0]);
            
      })
    } catch (error) { throw error;}    
  }

  return (

    <div className='container mt-4'>
      <h4> Customer Detail Page</h4>

      { iscustomer ? 
        <div>
          {/* Here find a solution for index */}
          <p> # {iscustomer.customer_id}</p>
          <p>First Name : {iscustomer.customer_first_name} </p> 
          <p>Last Name : {iscustomer.customer_last_name} </p> 
          <p>Email : {iscustomer.customer_email} </p> 
          <p>Created at : {iscustomer.customer_created} </p> 
          <p>Updated at : {iscustomer.customer_updated} </p> 
        </div> : null      
      }
    </div>
  )
}

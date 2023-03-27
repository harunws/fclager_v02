import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import CustomerUpdateForm from "./CustomerUpdateForm";

export default function CustomerUpdate() 
{
  let params = useParams(); 

  useEffect( () => {
    window.scrollTo(0, 0);
   updatecustomerlist(params.ids);
  }, [params.ids]); 
  
  //! Dependency "param.ids" not include in tut_src in array [param.ids] added after react warning.

  const [iscustomer, setCustomer] = useState([]);
  const [isloadcustomer, setLoadCustomer] = useState(false);

  const updatecustomerlist = async (ids) => {
    try {
      axios.post(`http://localhost/fclager_v02/backend/customer_single.php`, { 
       
        customerids: ids,
      })
      .then(res => {

        console.log(res.data.customerlist.customerdata)

        setCustomer(res.data.customerlist.customerdata[0]);

        setLoadCustomer(true);
       
      })
    } catch (error) { throw error;}    
  }

  return (
    <div>
    {isloadcustomer && 

      < CustomerUpdateForm list={iscustomer} />
    }
    </div>
  );
};

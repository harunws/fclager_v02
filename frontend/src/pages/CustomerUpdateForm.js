import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function CustomerUpdateForm(props){
  const navigate = useNavigate();
  const [customerInfo, setCustomerInfo] = useState({    
    customer_first_name: props.list.customer_first_name,
    customer_last_name: props.list.customer_last_name,
    customer_email: props.list.customer_email,
  });

  const onChangeValue = (e) => {
    setCustomerInfo({
      ...customerInfo,
      [e.target.name]:e.target.value
    });
  } 

  // Inserting a new user into the Database.
  const submitCustomer= async(event) => {
    try {
      event.preventDefault();
      event.persist();

      axios.post(`http://localhost/fclager_v02/backend/customer_update.php`, { 
        customerfirstname: customerInfo.customer_first_name,
        customerlastname: customerInfo.customer_last_name,
        customeremail: customerInfo.customer_email,
        customerids: props.list.customer_id,
      })
      .then(res => {
        console.log(res.data);
        navigate(`/`);
        return;
      })
    } catch (error) { throw error;}    
  };

  return (
    <form className="container" onSubmit={submitCustomer}>
      <div className='mb-3'>
      <h3> Update Customer Form</h3>

        <label htmlFor="_customer_first_name" className='form-label'>First Name :</label>
        <input
          className='form-control'
          type="text"
          id="_customer_first_name"
          name="customer_first_name"
          value={customerInfo.customer_first_name}
          onChange={onChangeValue}
          placeholder="Enter First Name"
          autoComplete="off"
          required          
        />
        
        <label htmlFor="_customer_last_name" className='form-label'>Last Name :</label>
        <input
          className='form-control'
          type="text"
          id="_customer_last_name"
          name="customer_last_name"
          value={customerInfo.customer_last_name}
          onChange={onChangeValue}
          placeholder="Enter Last Name"
          autoComplete="off"
          required          
        />
        
        <label htmlFor="_customer_email" className='form-label'>Email</label>
        <input
          className='form-control'
          type="customer_email"
          id="_customer_email"
          name="customer_email"
          value={customerInfo.customer_email}
          onChange={onChangeValue}
          placeholder="Enter email"
          autoComplete="off"
          required
          
        />
    </div>
    <input 
      type="submit" 
      value="update" 
      className='btn btn-success'
    />
  </form>
  );
};

import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

export default function CustomerCreate() {
  const navigate =useNavigate();
  
  const [customerInfo, setCustomerInfo] = useState({

    customer_first_name: '',
    customer_last_name: '',
    customer_email: '' ,   
  });

  const onChangeValue = (e) => {
    setCustomerInfo({
      ...customerInfo,
      [e.target.name]:e.target.value
    })
  }

  //? Submit Form
  const submitCustomer = async (event) => {
    try{
      event.preventDefault();
      event.persist();

      axios.post(`http://localhost/fclager_v02/backend/customer_create.php`, {

        customerfirstname: customerInfo.customer_first_name,
        customerlastname: customerInfo.customer_last_name,
        customeremail: customerInfo.customer_email,

      })
      .then(res => {
        console.log(res.data);
        navigate('/');
        return;

      })

    }catch(error){
      throw error;
    }

  }

  return (
    <div className='container col-6'>
      <h3> + Add User Form</h3>
      <form 
        onSubmit = {submitCustomer} 
         >
        <div className='mb-3'>

          <label
            className='form-label'
            htmlFor="_customer_first_name"          
            > First Name :
          </label>
          <input
            type="text"
            className='form-control'
            id="_customer_first_name"
            name="customer_first_name"
            onChange={onChangeValue}
            placeholder="Enter name"
            autoComplete="off"
            required
          >
          </input>

          <label
            className='form-label'
            htmlFor="_customer_last_name"          
            > Last Name :
          </label>
          <input
            type="text"
            className='form-control'
            id="_customer_last_name"
            name="customer_last_name"
            onChange={onChangeValue}
            placeholder="Enter name"
            autoComplete="off"
            required
          >
          </input>

          <label
            className='form-label'
            htmlFor="_customer_email"          
            > Email :
          </label>
          <input
            type="customer_email"
            className='form-control'
            id="_customer_email"
            name="customer_email"
            onChange={onChangeValue}
            placeholder="Enter email"
            autoComplete="off"
            required
          >
          </input>
        </div>
        <input
          type="submit"
          value="insert"
          className='btn btn-success'
        ></input>
      </form>      
    </div>
  )
}

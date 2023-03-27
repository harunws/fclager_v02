import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

export default function Insert() {
  const navigate =useNavigate();
  
  const [userInfo, setuserInfo] = useState({
    name: '',
    email: '' ,   
  });

  const onChangeValue = (e) => {
    setuserInfo({
      ...userInfo,
      [e.target.name]:e.target.value
    })
  }

  //? Submit Form
  const submitUser = async (event) => {
    try{
      event.preventDefault();
      event.persist();

      axios.post(`http://localhost/fclager/fclager_v01/backend/addusers.php`, {
        username: userInfo.name,
        useremail: userInfo.email
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
        onSubmit = {submitUser} 
         >
        <div className='mb-3'>
          <label
            className='form-label'
            htmlFor="_name"          
            > Name :
          </label>
          <input
            type="text"
            className='form-control'
            id="_name"
            name="name"
            onChange={onChangeValue}
            placeholder="Enter name"
            autoComplete="off"
            required
          >
          </input>

          <label
            className='form-label'
            htmlFor="_email"          
            > Name :
          </label>
          <input
            type="email"
            className='form-control'
            id="_email"
            name="email"
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

import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function UpdateUser(props){
  const navigate = useNavigate();
  const [userInfo, setuserInfo] = useState({
    name: props.list.name,
    email: props.list.email,
  });

  const onChangeValue = (e) => {
    setuserInfo({
      ...userInfo,
      [e.target.name]:e.target.value
    });
  } 

  // Inserting a new user into the Database.
  const submitUser = async(event) => {
    try {
      event.preventDefault();
      event.persist();

      axios.post(`http://localhost/fclager/fclager_v01/backend/updateusers.php`, { 
        username: userInfo.name,
        useremail: userInfo.email,
        userids: props.list.user_id,
      })
      .then(res => {
        console.log(res.data);
        navigate(`/`);
        return;
      })
    } catch (error) { throw error;}    
  };

  return (
    <form className="container" onSubmit={submitUser}>
      <div className='mb-3'>
      <h3> Update User Form</h3>
        <label htmlFor="_name" className='form-label'>Name</label>
        <input
          className='form-control'
          type="text"
          id="_name"
          name="name"
          value={userInfo.customer_name}
          onChange={onChangeValue}
          placeholder="Enter name"
          autoComplete="off"
          required
          
        />
        <br /> <br />
        <label htmlFor="_email" className='form-label'>Email</label>
        <input
          className='form-control'
          type="email"
          id="_email"
          name="email"
          value={userInfo.customer_email}
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

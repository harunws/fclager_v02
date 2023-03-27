import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

export default function Home() {
  const [isuser, setuser] = useState([]);  
  const alluser = async (ids) => 
  {
    try
    {
     
      axios.get(`http://localhost/fclager/fclager_v01/backend/users.php`)
      .then(res => {
        setuser(res.data.userlist.userdata);
       
      })
    }
    catch(error)
    {
      throw error;
    }
  }

  useEffect(() => {
    alluser();
  }, []); 

  //? Delete confirm Message;
  const deleteConfirm = (id) => {
    if(window.confirm("Are you sure?")){
      deleteUser(id);
    }
  }

  //? Delete function;  
  const deleteUser = async (id)=>{
    // console.log(id);
    try
    {
      axios.post(`http://localhost/fclager/fclager_v01/backend/deleteusers.php`,
      {
        userids:id,
      })
      .then(res => {
        setuser([]);
        alluser();
        return;
      })
    }
    catch (error)
    {
      throw error;
    }
  }

  return (
    <div className='container col-9'>

       <div className="d-flex justify-content-end mt-4">
        {/* Check her again. to="/insert" seems not correct */}
        <Link to="/insert"
          className='btn btn-outline-info btn-sm'        
        >+ Add User</Link> 
      </div>

      <h3 className=''>User List</h3>     
      <table className="table">

        <thead>
          <tr>
            <th scope="col">#Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            isuser.map((item, index) =>(

              <tr key={item.user_id}>
              <td>{index}</td>
              <td>{item.name} </td>
              <td>{item.email} </td>
              <td>{item.date} </td>          
              <td>
                <Link to={`details/${item.user_id}`}
                  className='bi bi-eye-fill text-info'
                />

                <Link to={`update/${item.user_id}`}
                  className='bi bi-pencil-fill mx-1 text-primary mx-3'
                />
                {/* <Link to={`update/${item.user_id}`} */}

                 <Link to 
                  className='bi bi-trash3-fill text-danger'
                  onClick = {() => deleteConfirm(item.user_id)}
                />
                
              </td> 
            </tr>
            ))            
          }
        </tbody>
      </table>
    </div>
  )
}

import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

export default function CustomerHome() {
  const [iscustomer, setCustomer] = useState([]);  
  const allCustomer = async (ids) => 
  {
    try
    {  
     
      axios.get(`http://localhost/fclager_v02/backend/customer_all.php`)
      .then(res => {
        setCustomer(res.data.customerlist.customerdata);
       
      })
    }
    catch(error)
    {
      throw error;
    }
  }

  useEffect(() => {
    allCustomer();
  }, []); 

  //? Delete confirm Message;
  const deleteConfirm = (id) => {
    if(window.confirm("Are you sure?")){
      deleteCustomer(id);
    }
  }

  //? Delete function;  
  const deleteCustomer = async (id)=>{
    // console.log(id);
    try
    {
      axios.post(`http://localhost/fclager_v02/backend/customer_delete.php`,
      {
        customerids:id,
      })
      .then(res => {
        setCustomer([]);
        allCustomer();
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
        <Link to="/create"
          className='btn btn-outline-info btn-sm'        
        >+ Add User</Link> 
      </div>

      <h3 className=''>User List</h3>     
      <table className="table">

        <thead>
          <tr>
            <th scope="col">#Id</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Created At</th>
            <th scope="col">Updated At</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            iscustomer.map((item, index) =>(

              <tr key={item.customer_id}>
              <td>{index}</td>
              <td>{item.customer_first_name} </td>
              <td>{item.customer_last_name} </td>
              <td>{item.customer_email} </td>
              <td>{item.customer_created} </td>
              <td>{item.customer_updated} </td>          
              <td>
                <Link to={`details/${item.customer_id}`}
                  className='bi bi-eye-fill text-info'
                />

                <Link to={`update/${item.customer_id}`}
                  className='bi bi-pencil-fill mx-1 text-primary mx-3'
                />
                {/* <Link to={`update/${item.user_id}`} */}

                 <Link to 
                  className='bi bi-trash3-fill text-danger'
                  onClick = {() => deleteConfirm(item.customer_id)}
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

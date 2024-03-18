import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import { Link } from 'react-router-dom'; 

function Getdata() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const res = await axios.get("http://localhost:1111/users");
    setUsers(res.data.reverse());
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:1111/users/${id}`);
    loadUsers();
  };

  return (
    <div className='container'>
      <h1>Data</h1>

      <div className='text-right'>
        <Link to="/Postdata" className='btn btn-primary'>Add Data</Link>
      </div>

      <table className='table table-bordered table-dark mt-5'>
        <thead>
          <tr>
            <th>s.no</th>
            <th>Name</th>
            <th>Email</th>
            <th>Number</th>
            <th>Age</th>
            <th>Action</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.number}</td>
              <td>{user.age}</td>
              <td>
                <button onClick={() => deleteUser(user.id)} className="btn btn-danger">
                  <i className="ri-delete-bin-6-line"></i>
                </button>
              </td>
              <td> <Link to={`/Putdata/${user.id}`}><button 
              className='btn btn-warning '><i class="ri-edit-2-fill"></i></button></Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Getdata;


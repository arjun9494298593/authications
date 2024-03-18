import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

const Putdata = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    email: "",
    number: "",
    age: "",
  });

  const { name, email, number, age } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };


  useEffect(() => {
  loadUsers();
  }, []);


  const loadUsers = async () => {
    const result = await axios.get(`http://localhost:1111/users/${id}`);
    setUser(result.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:1111/users/${id}`, user);
    navigate("/Getdata");
  };

  return (
    <div className='container mt-1 bgcolour'>
      <div className="imgcontainer">
        <img src="https://i.pinimg.com/originals/ac/a0/67/aca067916c883420b89620e5e8c2dbf9.gif" alt="Avatar" className="avatar" />
        <h1 className='mt-2'>Enter Data</h1>
        <form onSubmit={handleSubmit}>
          <input
            type='name'
            placeholder='Entry Name'
            className="form-control mt-3"
            value={name}
            name="name"
            onChange={handleChange}
            required
          />

          <input
            type='email'
            placeholder='Entry email'
            className='form-control mt-5'
            value={email}
            name="email"
            onChange={handleChange}
            required
          />

          <input
            type='number'
            placeholder='Entry Number'
            className='form-control mt-5'
            value={number}
            name="number"
            onChange={handleChange}
            required
          />

          <input
            type='number'
            placeholder='Entry Age'
            className='form-control mt-5'
            value={age}
            name="age"
            onChange={handleChange}
            required
          />

          <button className='btn btn-warning mt-4 bt' type='submit'>update</button>
        </form>
      </div>
    </div>
  );
}

export default Putdata;

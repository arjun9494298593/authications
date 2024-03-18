import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import axios from 'axios';


const Postdata = () => {
    let navigate = useNavigate();
  const [user,setuser] = useState ({
    name :"",
    email : "",
    number : "",
    age : "",

  })

  const {name,email,number,age} =user

  const handlechainge = (e)=>{
    setuser({...user,[e.target.name]:e.target.value})
  }

  
   
  const handlesubmit = async(e)=>{
    e.preventDefault();
   await axios.post ('http://localhost:1111/users',user )
   console.log(user);
   navigate("./Getdata")
  };


  return (
    <div>
       <div className='container mt-1 bgcolour'>
       <div class="imgcontainer">
       <img src="https://i.pinimg.com/originals/ac/a0/67/aca067916c883420b89620e5e8c2dbf9.gif"  alt="Avatar" class="avatar" />  
       <h1 className='mt-2'>Enter Data</h1>    
        <form onSubmit={handlesubmit}>
        <input type='' 
        placeholder='Entry Name'
        className="form-control mt-3"
        value={name}
        name="name"
        onChange={handlechainge} required />

         <input type='email'
          placeholder='Entry email' 
          className='form-control mt-5'
          value={email}
          name="email"
          onChange={handlechainge} required />

         <input type='number' 
         placeholder='Entry Number' 
         className='form-control mt-5'
         value={number}
         name="number"
         onChange={handlechainge} required />

         <input type='number' 
         placeholder='Entry Age' 
         className='form-control mt-5'
         value={age}
         name="age"
         onChange={handlechainge} required />
          
      
          <button className='btn btn-primary mt-4 bt' type='submit'>Submit</button>
        </form>
       </div>
    </div>
    </div>
  )
}

export default Postdata

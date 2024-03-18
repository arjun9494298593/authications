import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import axios from 'axios';

const Signup = () => {

  let navigate = useNavigate();
  const [user,setuser] = useState ({
    email : "",
    password :""

  })

  const {email, password} =user

  const handlechainge = (e)=>{
    setuser({...user,[e.target.name]:e.target.value})
  }

  
   
  const handlesubmit = async(e)=>{
    e.preventDefault();
   await axios.post ('http://localhost:1111/loginusers',user )
   console.log(user);
   navigate("./Loginpage")
  };



  return (
    <form onSubmit={handlesubmit} className='body' >
      <div class="container">
        <h1>Sign Up</h1>
        <p >Please fill in this form to create an account.</p>
        
        <hr/>
           <label for="email"><b>Email</b></label>
           <input type="text" 
            placeholder="Enter Email" 
            name="email"
            value={email} 
            onChange={handlechainge}
            required/>

            <label for="password"><b>Password</b></label>
            <input type="password" 
            placeholder="Enter Password" 
            name="password"
            value={password}
            onChange={handlechainge} 
            required/>

         

            <div class="clearfix">
            <button type="button" class="cancelbtn">Cancel</button>
            <button  type="submit" class="signupbtn">Sign Up</button>
            </div>
            </div>
    </form>
)}
export default Signup


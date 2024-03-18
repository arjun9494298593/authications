
import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';



const Loginpage = () => {
    const [Email, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        
        if (Email !== '' && password !== '') {
               axios.get('http://localhost:1111/loginusers', {
                params: {
                    email: Email,
                  password: password
                }
              })
                .then(function (response) {
                    if (response.data.length === 0 ) {
                        setError('Invalid username or password. Please try again.');
                    } else {
                        navigate("/Postdata");
                    }
                })
                .catch(function (error) {
                  console.log(error);
                });
          
        } else {
            setError('Invalid username or password. Please try again.');
        }
    };
    
        // const x = document.getElementById("password");
        // if (x === "password") {
        //   x.type = "text";
        // } else {
        //   x.type = "password";
        // }
      


    return (
        <div className='container-fluid'>
            <form id="loginForm" className='forma' onSubmit={handleLogin}>
                <div className="imgcontainer">
                    <img src="https://blog.commlabindia.com/hubfs/Imported_Blog_Media/animated-gifs-corporate-training.gif" width="100px" alt="Avatar" className="avatar" />
                </div>
                <div className="container">
                    <label htmlFor="Email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" id="Email" value={Email} onChange={(e) => setUsername(e.target.value)} required />

                    <label htmlFor="password" ><b>Password</b></label>
                    <input  type="password"laceholder="Enter Password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                     <div>              
                    <input type="checkbox" onclick="myFunction()"/> Show Password
                    </div> 
                    <button className='submit' type="submit">Login</button>        
                </div>    
                <div className='error'>
                {error && <p>{error}</p>}     
                </div> 
                <p>
                  <h6 className='signup'>i Dont Have an Account <Link to="./Signup"><span style={{color:"red"}}>Signup</span></Link></h6>
                </p>
            </form>
        </div>
    )}



export default Loginpage;

import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
 

const Register = () => {
    let navigate = useNavigate();
    const [userData,setUserData]=useState({
        email:"",
        name:"",     
        password:"",        
    });
    const handleSubmit = (event) => {
        event.preventDefault();
        axios
        .post("http://127.0.0.1:8000/api/register", userData )
        .then((res)=>{  
            console.log(res.data);
            //nakonn sto se registruje da ga posaljemo na stranicu za login
            alert("Successful!");
            navigate("/login");
        })
        .catch(function (error) {
            if (error.response) {
            // Request made and server responded
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
            } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
            }
        
        });
    };
  function handleInput(e){  
   
    let newUserData = userData; 
 


    newUserData[e.target.name]=e.target.value;
    console.log(newUserData);
    //console.log(newUserData);//probaj
    setUserData(newUserData); 
 
}
  return (
    <div className="registration-form-container">
      <form onSubmit={handleSubmit} className="registration-form">
        <h2>Registracija</h2>

        <label htmlFor="name">Ime:</label>
        <input type="text" id="name" name="name" required onInput={handleInput} />

        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" name="email" required  onInput={handleInput}/>

        <label htmlFor="password">Lozinka:</label>
        <input type="password" id="password" name="password" required onInput={handleInput} />

        <button type="submit">Registruj se</button>
      </form>
    </div>
  );
};

export default Register;

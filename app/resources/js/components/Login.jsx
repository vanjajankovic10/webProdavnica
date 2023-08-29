import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
 

const Login = ({addToken,addRole}) => {
    let navigate = useNavigate();
    const [userData,setUserData]=useState({
        email:"",
        password:""
    });
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
    .post("http://127.0.0.1:8000/api/login", userData )
    .then((res)=>{ //ako se uspesno izvrsi logovanje uci ce u funkciju (zbog ovog then)
        console.log(res.data[0]);
        if(res.data.success===true){
            alert("Successful");  
           
          
            //token koji smo dobili od korisnika treba da sacuvamo u storag-u da bismo znali cemu taj korisnik ima pristup
            window.sessionStorage.setItem("auth_token",res.data[0].token);
            window.sessionStorage.setItem("auth_name",res.data[0].username);
            window.sessionStorage.setItem("auth_id",res.data[0].id);

            addToken(res.data[0].token);
            
            console.log(res.data[0].token);
            if(res.data[0].role === 'admin')
            {
                window.sessionStorage.setItem("auth_name","Admin");
                addRole("Admin");

                 navigate("/admin")
            }
            else{
                navigate("/ponuda");  
            }



        }else{
            alert("Unsuccessful");
        }
    });
  };
  function handleInput(e){  
    
    let newUserData = userData; 
    newUserData[e.target.name]=e.target.value;  
    console.log(newUserData);//probaj
    setUserData(newUserData);  
 
}
  return (
    <div className="login-form-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Prijava</h2>

        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" name="email" required  onInput={handleInput}/>

        <label htmlFor="password">Lozinka:</label>
        <input type="password" id="password" name="password" required  onInput={handleInput}/>

        <button type="submit">Prijavi se</button>
      </form>
    </div>
  );
};

export default Login;

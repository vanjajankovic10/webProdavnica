 
import { Link } from 'react-router-dom'

function Navbar({token,addToken}) {
  function handleLogout(){ 
   
     
    var config = {
      method: 'post',
      url: '/api/logout',
      headers: { 
        'Authorization': 'Bearer '+window.sessionStorage.getItem("auth_token")
        
      },
    };
    console.log(window.sessionStorage.getItem("auth_token"))
    
    axios(config)
    .then(function (response) {
     
      console.log(response);
     
      window.sessionStorage.setItem('auth_token',null); 
      window.sessionStorage.setItem('auth_name',null); 
      window.sessionStorage.setItem('auth_id',null); 
      addToken(null)

    })
    .catch(function (error) {
     
      
      console.log(error);
      

    }); 
  }
  return (
    <div className="topnav">

    {token == null ?   //ako nije ulogovan moze da se uloguje ili registruje
      <>
       <Link  to="/">Pocetna</Link>
       <Link  to="/kontakt">Kontakt</Link>
       <Link    to="/login">Login</Link>
        <Link    to="/register">Register</Link>
      </>

      :
      <>
        {window.sessionStorage.getItem("auth_name")=='Admin'  ? 
            <>
            <Link to="/admin">Admin</Link>
            <Link to="/admin/dodaj">Dodaj proizvod</Link>
            <Link to="/admin/productList">Proizvodi</Link>


            </>
            :
            <>
            <Link to="/ponuda">Ponuda</Link>

            </>

        }
         <Link   onClick={handleLogout} to="/">Odjava</Link>
      </>
  }
       

       
       
 
       
     
        

    </div>





  );
}

export default Navbar;

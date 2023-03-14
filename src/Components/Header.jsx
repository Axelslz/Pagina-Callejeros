import '../assets/Styles/header.css';


import {  Outlet, Link } from "react-router-dom";

function Header(){

return(


    <div>
      
      <nav className="navbar">
         <div className="inner-width">
            <a href="/" className="logo"></a>
            <h1>Callejeros</h1>
            <br></br>
             <button className="menu-toggler"></button>

             <div className="navbar-menu">
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link> 
                <Link to="/plantilla">Catalogo</Link>
                <Link to="/cart">Comprar</Link>
                
             
             </div>
             
         </div>
       
       </nav> <Outlet />
    </div>
)


}

export default Header;
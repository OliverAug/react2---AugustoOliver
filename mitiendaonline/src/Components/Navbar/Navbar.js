import React from "react";
import Button from "../button/button";
import '../Navbar/estilo.css'
import MainLogo from '../Navbar/alcampo.jpg';
import Carrito from '../Navbar/carrito.png'

function Navbar () {
    return ( <nav className="nav-conteiner"> 
    
    <div className="container">
          
          <img  src={MainLogo} alt="fireSpot"/>
        </div>
<ul>

<div className="container">
          
          <img  src={Carrito} alt="fireSpot"/>
        </div>
  

</ul>
</nav> );

}

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link className="menu-link" to="/"><h1>Clothes</h1></Link>
      <ul className="menu">
        <li><Link className="menu-link" to="/logo"></Link></li>
        <li><Link className="menu-link" to="/productos">Productos</Link></li>
        <li><Link className="menu-link" to="/productos/pantalones">Pantalones</Link></li>
        <li><Link className="menu-link" to="/productos/remeras">Remeras</Link></li>
        <li><Link className="menu-link" to="/contacto">Contacto</Link></li>
        <li><CartWidget /></li>
      </ul>
    </nav>
  )
}

export default NavBar
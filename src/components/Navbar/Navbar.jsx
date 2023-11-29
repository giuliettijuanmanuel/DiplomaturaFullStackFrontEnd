import React from "react";
import { NavbarWrapper } from "../../styles/Navbar/Navbar";
import { Link } from "react-router-dom";

const Navbar = ({ open }) => {
  return (
    <NavbarWrapper open={open}>
      <Link to="/">Inicio</Link>
      <Link to="">Categorias</Link>
      <Link to="/novedades">Novedades</Link>
      <Link to="/contacto">Contacto</Link>
      <Link to="">
        <button className="button">Email</button>
      </Link>
      <div className="icons">
        <Link to="">
          <button className="icon">
            <i className="fa-solid fa-right-to-bracket"></i>
          </button>
        </Link>
        <Link to="">
          <button className="icon">
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
        </Link>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;

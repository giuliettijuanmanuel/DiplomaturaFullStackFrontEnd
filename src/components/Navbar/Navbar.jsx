import React from "react";
import { NavbarWrapper } from "../../styles/Navbar/Navbar";
import { Link } from "react-router-dom";

const Navbar = ({ open }) => {
  return (
    <NavbarWrapper open={open}>
      <Link to="/">Inicio</Link>
      <Link to="/catalogo">Categorias</Link>
      <Link to="/novedades">Novedades</Link>
      <Link to="/contacto">Contacto</Link>
      <Link to="">
        <button className="btn">
          <i className="fa-solid fa-right-to-bracket"></i>
        </button>
      </Link>
      <Link to="">
        <button className="btn">
          <i className="fa-solid fa-cart-shopping"></i>
        </button>
      </Link>
    </NavbarWrapper>
  );
};

export default Navbar;

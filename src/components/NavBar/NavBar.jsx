import React from "react";
import "./NavBar.css"; // por si hace falta añadir estilos personalizados
import genomapharma from "../../assets/genomapharma.jpg";
import mainphoto from "../../assets/mainphoto.jpg";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand">
            <img src={genomapharma} alt="" />
          </Link>
          <button
            className="navbar-toggler custom-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="nav-item">
                <Link to={"/product"}>Products</Link>
              </li>
              <li className="nav-item">
                <Link to={"/auth"}>Product Authentication</Link>
              </li>
              <li className="nav-item">
                <Link to={"/merchandaising"}>Merchandaising</Link>
              </li>
              <li className="nav-item">
                <Link to={"/aboutus"}>About us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="navbar-image"></div>
    </>
  );
};

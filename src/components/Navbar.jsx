import React from "react";
import logo from "/CheckrsLogo.png";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md bg-secondary" aria-label="Twelfth navbar example">
      <div className="container-fluid">

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample10" aria-controls="navbarsExample10" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample10">
          <ul className="navbar-nav">
            <li className="d-flex nav-item align-items-end lead fw-semibold mx-1">
              <img className="nav-link active" src={logo} style={{width: "12rem"}}/>
            </li>
            <li className="d-flex nav-item align-items-end lead fw-semibold mx-1">
              <a className="nav-link" href="#">Register</a>
            </li>
            <li className="d-flex nav-item align-items-end lead fw-semibold mx-1">
              <a className="nav-link" href="#">About Us</a>
            </li>
            <li className="d-flex nav-item align-items-end lead fw-semibold mx-1 dropdown">
              <a className="nav-link dropdown-toggle fs-4" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="bi bi-person-fill-gear"></i>
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Verify</a></li>
                <li><a className="dropdown-item" href="#">Migrate student</a></li>
                <li><a className="dropdown-item" href="#">My Account</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

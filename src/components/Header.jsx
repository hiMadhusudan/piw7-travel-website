import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../images/logo.png';
function Header() {
  return (
    <header>
  <nav className="navbar navbar-expand-lg navbar-dark " style={{ backgroundColor: '#2979FF' }}>
        <div className="container">
          {/* Logo */}
          <a className="navbar-brand" href="#">
            <img src={Logo} alt="Travel Website" style={{ height: 30 }} />
          </a>
          
          {/* Hamburger Menu Button */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          {/* Navbar Links and Search Box */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Destinations</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
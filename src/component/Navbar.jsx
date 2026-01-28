import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const nav = useNavigate();
  const gohome = ()=> {
    nav('/');
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom py-3">
      <div className="container">
        {/* Logo / Brand */}
        <button className="btn navbar-brand" onClick={()=> gohome()}>
          <img 
            src="/images/logo_portfolio.jpg" 
            alt="Logo" 
            height="60"
            width="70" 
            className="d-inline-block align-text-top"
          />
        </button>

        {/* Hamburger Menu for Mobile */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item px-2">
              <Link className="nav-link fw-bold text-dark" to="/" >HOME</Link>
            </li>
            <li className="nav-item px-2">
              <Link className="nav-link fw-bold text-dark" to="/a" >ABOUT</Link>
            </li>
            <li className="nav-item px-2">
              <Link className="nav-link fw-bold text-dark" to="/p">PORTFOLIO</Link>
            </li>
            <li className="nav-item px-2">
              <Link className="nav-link fw-bold text-dark" to="/r" >RESUME</Link>
            </li>
            <li className="nav-item px-2">
              <Link className="nav-link fw-bold text-dark" to="/c">CONTACT</Link>
            </li>
             
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
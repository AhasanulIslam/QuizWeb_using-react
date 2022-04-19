import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap'
import "./NavBar.css";


const Navber = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const logout = () => {
    localStorage.clear();
    window.location.href = '/';
    }
  return (
    <nav className="navbar">
    <div className="nav-container">
      <NavLink exact to="/" className="nav-logo">
        AdminPanel
        <i className="fas fa-code"></i>
      </NavLink>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <NavLink
            exact
            to="/adv"
            activeClassName="active"
            className="nav-links"
            onClick={handleClick}
          >
            ApprovePage
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            exact
            to="/ap"
            activeClassName="active"
            className="nav-links"
            onClick={handleClick}
          >
            Approve
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            exact
            to="/rej"
            activeClassName="active"
            className="nav-links"
            onClick={handleClick}
          >
            Reject
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            exact
            to="/contact"
            activeClassName="active"
            className="nav-links"
            onClick={handleClick}
          >
            Contact Us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            exact
            to="/login"
            activeClassName="active"
            className="nav-links"
            onClick={handleClick}
          >
            Login
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            exact
            to="/signup"
            activeClassName="active"
            className="nav-links"
            onClick={handleClick}
          >
            SignUp
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            exact
            to="/"
            activeClassName="active"
            className="nav-links"
            onClick={logout}
          >
            Logout
          </NavLink>
        </li>

        
      </ul>
      <div className="nav-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    </div>
  </nav>
  )
}

export default Navber
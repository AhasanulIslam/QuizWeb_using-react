import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap'
import "./NavBar.css";

const Navber = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  
  
  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink  to="/" className="nav-logo">
          <>AdminPanel </>
          <i className="fas fa-code"></i>
        </NavLink>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          {/* {localStorage.getItem('role') === '2'} */}
          <li className="nav-item">
            <NavLink
              
              to="/approvepage"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Pending Users
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              
              to="/aprrove"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Approve Users
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              
              to="/rej"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Reject Users
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              
              to="/studentlist"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Student List
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              
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
  );
};

export default Navber;

import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap'
import "./NavBar.css";


const NavberTutor = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const logout = () => {
    localStorage.clear();
    window.location.href = '/';
    }
  return (
    <nav className="navbar">
    <div className="nav-container">
      <NavLink  to="/" className="nav-logo">
        Tutor
        <i className="fas fa-code"></i>
      </NavLink>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        {/* {localStorage.getItem('role') === '2'} */}
        <li className="nav-item">
          <NavLink
    
            to="/tquizlist"
            activeClassName="active"
            className="nav-links"
            onClick={handleClick}
          >
            Quiz List
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            
            to="/quizfm"
            activeClassName="active"
            className="nav-links"
            onClick={handleClick}
          >
            Create Quiz
          </NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink
            
            to="/tutor_stulist"
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
  )
}

export default NavberTutor
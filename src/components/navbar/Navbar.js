// Import React
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
        <p className="heading">
            <Link to="/">My Website</Link>
        </p>
      <ul className="navbar-links">
        <div className="links">
            <li>
            <Link to="/home">Home</Link>
            </li>
            <li>
            <Link to="/nothome">NotHome</Link>
            </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css'; // Make sure the correct path to your CSS file is used
import Home from './Home';
import Owner from './Owner'; // Import the Owner component (assuming it exists)

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            {/* Use Link to navigate to the Home page */}
            <Link to="/Home" className="list">
              Home
            </Link>
          </li>
          <li className="nav-item">About</li>
          <li className="nav-item">
            {/* Use Link to navigate to the Owner page */}
            <Link to="/owner" className="list">
              Owner
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

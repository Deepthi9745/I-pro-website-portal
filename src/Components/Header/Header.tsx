import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import iproimage from '../../Images/I-Pro logo with white BG.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header: React.FC = () => {
  const [isServicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isClaimDropdownOpen, setClaimDropdownOpen] = useState(false);

  return (
    <div className = "container">
    <header className="header">
   
      <div className="search-bar">
        <input 
          type="text" 
          className="search-input" 
          placeholder="Search..."
        />
        <div className="searchicon">
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <NavLink to="/home" className="Home navbar-link">Home</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/about-us" className="aboutUS navbar-link">Our Service</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/our-service" className="Ourservice navbar-link">About Us</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/blog" className="blog navbar-link">Blog</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/claim" className="Claim navbar-link">Claim</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/support" className="support navbar-link">Support</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/login" className="Login navbar-link">Login</NavLink>
          </li>
        </ul>
      </nav>
    </header>
    </div>
  );
};

export default Header;


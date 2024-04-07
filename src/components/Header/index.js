// Header.js

import React from 'react';

import { IoBookSharp } from "react-icons/io5";
import './index.css'; // Assuming you have a CSS file named styles.css

const Header = () => {
  return (
    <nav>
      <div className="logo">
        <div className='log-container'>
        <IoBookSharp className='log-height'/>
        <h2>ACCA</h2>
        </div>
      </div>
      <ul className="nav-links">
        <li><a href="#">HOME</a></li>
   
        <li><a href="#">100% PLACEMENT</a></li>
        <li><a href="#">LEARN ACCA
</a></li>
        <li><a href="#"> START YOUR JOURNEY</a></li>
      </ul>
      <div className="login-signup">
        <a href="#">Log In</a>
        <a href="#">Sign Up</a>
      </div>
    </nav>
  );
};

export default Header;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiChurch } from "react-icons/bi";

import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            <BiChurch />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className='nav-item'>
              <Link to='/about' className='nav-links'>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/ministries' className='nav-links'>
                Ministries
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/media' className='nav-links'>
                Media
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contact' className='nav-links'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

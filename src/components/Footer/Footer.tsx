import React from "react";
import { Link } from "react-router-dom";
import { BiChurch } from "react-icons/bi";
import { FaFacebook, FaInstagram } from "react-icons/fa";

import "./Footer.css";

function Footer() {
  return (
    <>
      <footer className='footer-container'>
        <Link to='/' className='footer-logo'>
          <div className='footer-logo-container'>
            <BiChurch />
          </div>
        </Link>
        <div className='footer-info'>
          <span>Sunday Service</span>
          <span>10:30AM - 12PM</span>
          <span>929 S Westlake Ave</span>
          <span>Los Angeles, CA 90006</span>
        </div>

        <ul className='footer-icons'>
          <li className='icons'>
            <a href='https://www.facebook.com/thebeaconla/' className='icon-links' target='_blank' rel='noreferrer'>
              <FaFacebook />
            </a>
          </li>
          <li className='icons'>
            <a
              href='https://www.instagram.com/thebeaconlosangeles/'
              className='icon-links'
              target='_blank'
              rel='noreferrer'
            >
              <FaInstagram />
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default Footer;

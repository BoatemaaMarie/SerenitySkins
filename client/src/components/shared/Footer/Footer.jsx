import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'


const Footer = () =>
  <footer>
    <div className="footer">
      <div className='footer-links'>
        <Link className="decoration">About Us</Link>
        <Link className="decoration">Contact Us</Link>
        <Link className="decoration">FAQ</Link>
      </div>
    </div>
  </footer>

export default Footer
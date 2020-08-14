import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className='header'>
      <Link to=""><h1 className="store-name">Serenity  Skin Spa</h1></Link>
        <nav className="nav-links">
        
          <Link  className="nav-links" to="">Home</Link>
          <Link  className="nav-links" to="">Services</Link>
          <Link  className="nav-links" to="">Appointments</Link>
          <Link  className="nav-links">Hello, User</Link>
        
        </nav>

      </div>
    </header>
  )
}

export default Header
import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = (props) => {

  return (
    <header>
      <div className='header'>
      <Link to={`/welcomepage`}><h1 className="store-name">Serenity Skin Spa</h1></Link>
        <nav className="nav-links">
        
          <Link  className="nav-links" to="/WelcomePage">Home</Link>
          <Link className="nav-links" to="/services">Services</Link>
          
          <Link className="nav-links" to="/ShowAppointments">Appointments</Link>
          {props.currentUser ? 
            <Link className="nav-links">Hello, {props.currentUser.username}</Link> : 
            <Link className="nav-links" to="/login">Login/Register</Link>
          }
        
        </nav>

      </div>
    </header>
  )
}

export default Header
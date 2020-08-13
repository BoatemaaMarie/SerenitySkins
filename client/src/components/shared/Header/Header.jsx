import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className='header'>
        <h1>Serenity  Skin Spa</h1>
        <nav>
          <Link>Home</Link>
          <Link>Services</Link>
          <Link>Appointments</Link>
          <p>Hello, User</p>
        </nav>
        {/* <img src={`${ghostLogo}`} className='header-ghost' /><Link style={{ textDecoration: 'none' }} to={`/subscriptions`}><h1 className= 'header-subbusters'>SubBusters</h1></Link> */}
      </div>
    </header>
  )
}

export default Header
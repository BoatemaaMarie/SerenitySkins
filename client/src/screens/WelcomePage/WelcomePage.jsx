import React from 'react'
import './WelcomePage.css'
import {Link} from 'react-router-dom'

export default function WelcomePage() {
  return (
    <>

        <div className="welcome-page">
         <Link to="/services" className="welcome"><h1 >Welcome to Serenity Skin Spa</h1></Link>
        </div>
    </>
  )
}

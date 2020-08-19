import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import './Services.css'

export default function Services(props) {
  return (
    <div>
      <h1 className="title" >Services</h1>

      <div className="container">
        {props.services.map((service) => (
          <>

            <div className="grid">
              <img className="attributes" src={service.img_url} />
              <div className="button-name-container">

                <p className="service-name">{service.name}</p>


                <Link to={`/appointment/${service.id}/new`}> <button className="create-button">Create Appointment</button></Link>
              </div>
            </div>
          </>
        ))}
      </div>
      <div className="footer-space"></div>

    </div>
  )
}

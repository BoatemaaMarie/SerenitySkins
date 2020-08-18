import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import './Services.css'

export default function Services(props) {
  return (
    <div>
      <h1 className="title" >Services</h1>
     
        {props.services.map((service) => (
          <>
        <div className="grid">
            <img className="attributes" src={service.img_url} />
        </div>

            <p>{service.name}</p>

            <Link to={`/appointment/${service.id}/new`}><button>Create Appointment</button></Link>
          </>
        ))}
    </div>
  )
}

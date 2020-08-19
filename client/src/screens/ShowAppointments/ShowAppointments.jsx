import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './ShowAppointments.css'


export default function ShowAppointments(props) {


  return (
    <div className="appointment-container">
      <h1 className="title-appointment">My Appointments</h1>

      {props.appointments.map((appointment) => (
        <>
          <div classname="appointment-list">
            <p classname="">{appointment.name}</p>
            <p>{appointment.date}</p>
            <p>{appointment.time}</p>
            <Link to={`/updateanddelete/${appointment.id}`} ><button>Update</button></Link>
          </div>
        </>
      ))}

    </div>
  )
} 

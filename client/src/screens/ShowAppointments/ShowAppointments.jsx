import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './ShowAppointments.css'


export default function ShowAppointments(props) {


  return (
    <div className="appointment-container">
      <h1 className="title-appointment">My Upcoming Appointments</h1>

      {props.appointments.map((appointment) => (
        <>
          <div classname="appointment-list">
            <p className="bold">Treatment: {appointment.name}</p>
            <p className="bold">Date: {appointment.date}</p>
            <p className="bold">Time: {appointment.time}</p>
           
            <Link className="update-app" to={`/updateanddelete/${appointment.id}`} >
              <button>Update Appointment</button>
            </Link>

          </div>
        </>
      ))}

    </div>
  )
} 

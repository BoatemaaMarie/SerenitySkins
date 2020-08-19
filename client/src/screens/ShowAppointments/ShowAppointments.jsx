import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'


export default function ShowAppointments(props) {
 

  return (
        <div>
        <h1>My Appointments</h1>

      {props.appointments.map((appointment) => (
        <>
          <p>{appointment.name}</p>
          <p>{appointment.date}</p>
          <p>{appointment.time}</p>
          <Link to={`/updateanddelete/${appointment.id}`} ><button>Update</button></Link>
          </>
        ))}

        </div>
  )
}

import React, { useState, useEffect } from 'react'
import ShowApp from '../../components/ShowApp/ShowApp'
import CreateAppForm from '../../components/CreateAppForm/CreateAppForm'
import './CreateAppointment.css'


export default function CreateAppointment(props) {

  return (
    <div className="create-container">
      <h3>Create Appointments</h3>
      <div className="create-app">

        <div className="show-app">
          <ShowApp {...props} />
        </div>

        <div className="create-app-form">
          <CreateAppForm {...props} />
        </div>
      </div>

    </div>

  )
}

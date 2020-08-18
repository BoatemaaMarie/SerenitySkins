import React, { useState, useEffect } from 'react'
import ShowApp from '../../components/ShowApp/ShowApp'
import CreateAppForm from '../../components/CreateAppForm/CreateAppForm'


export default function CreateAppointment(props) {

  return (
    <div>

      <h3>Create Appointments</h3>
      <div >

        <ShowApp {...props} />
        
        <CreateAppForm {...props} />
        
      </div>

    </div>

  )
}

import React, {useState} from 'react'
import Layout from '../../components/shared/Layout/Layout'
import Calendar from 'react-calendar'



export default function CreateAppointment(props) {

  const handleChange = (e) => {
    const {value} =e.target
  }
  return (
    <div>
      <Layout>
        <h3>My Upcoming Appointments</h3>
        <p>select date and time</p>

    
      </Layout>
    </div>
  )
}

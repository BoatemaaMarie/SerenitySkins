import React, { useState, useEffect } from 'react'
import { putAppointment, destroyAppointment } from '../../services/appointments'
import {Link} from 'react-router-dom'

export default function UpdateDeleteAppointment(props) {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: ""
  })

  useEffect(() => {
    defaultFormData()
  }, [props.appointments])
  
  const defaultFormData = ()=> {
    const appointment = props.appointments.find((appointment) => {
      return appointment.id===parseInt(props.match.params.id)
    })
    if (appointment) {
      setFormData({name: appointment.name, date: appointment.date, time: appointment.time})
    }
  }

  const handleChange = (e) => {
    const { value, name } = e.target
    setFormData({...formData, [name]:value})
  }

  const handleDelete = async (id) => {
    await destroyAppointment(id)
    props.setAppointments(
      props.appointments.map((appointment) => {
return appointment.id !== id
      })
    )
    props.history.push("/showappointments")
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    const { id } = props.match.params
    const newAppointment = await putAppointment(id, formData)
    props.setAppointments(
      props.appointments.map((appointment) => {
        return appointment.id===parseInt(id)? newAppointment:appointment
      })
    )
    props.history.push('/showappointments')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <p>select date and time</p>
        <input name="name" type="text" value={formData.name} onChange={handleChange}/>
          <input name="date" type="date" value={formData.date} onChange={handleChange}/>
          <input name="time" type="time" value={formData.time} onChange={handleChange}/>
          <button>Update</button>
      </form>
      
      {/* redirect to appointments page */}
<button onClick={()=>handleDelete(props.match.params.id)}>Delete Appointment</button>
    </>
)
}

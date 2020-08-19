import React, { useState, useEffect } from 'react'
import { putAppointment, destroyAppointment } from '../../services/appointments'
import { Link } from 'react-router-dom'
import './UpdateDeleteAppointment.css'


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
      <div className="update-container-div">

      <form onSubmit={handleSubmit}>
        <p className="update-title">Something came up? No worries select a differnet date and time:</p>
          <div>
            
          <input name="name" type="text" value={formData.name} onChange={handleChange} />
          <input name="date" type="date" value={formData.date} onChange={handleChange}/>
          <input name="time" type="time" value={formData.time} onChange={handleChange}/>
            <button onClick={handleSubmit}>Update</button>
        </div>
      </form>
      
      </div>
      <div className="delete-button">
<Link style={{ textDecoration: 'none', color: '#e16162', marginTop:'50px' }} classname="delete-link" onClick={()=>handleDelete(props.match.params.id)}>Delete Appointment</Link>
</div>
    </>
)
}

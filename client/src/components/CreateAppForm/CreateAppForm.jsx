import React, { useState, useEffect } from 'react'
import { postAppointment } from '../../services/appointments'
import { readOneService } from '../../services/services'
import './CreateAppForm.css'

export default function CreateAppForm(props) {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    name: ""
  })

  const [service, setService] = useState(null)

  useEffect(() => {
    getService()

  }, [])

  const getService = async () => {
    const oneService = await readOneService(props.match.params.id)
    setFormData({ name: oneService.name })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newApp = await postAppointment(props.match.params.id, formData)
    props.history.push("/showappointments")
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p className="center-select">Select date and time:</p>

        <div className="create-form">
          <input className="input" name="name" type="text" value={formData.name} onChange={handleChange} />
          <input className="input" name="date" type="date" value={formData.date} onChange={handleChange} />
          <input className="input" name="time" type="time" value={formData.time} onChange={handleChange} />
          <button className="book-now">Book Now</button>
        </div>
      </form>
      <div classname="space"></div>
    </div>
  )
}

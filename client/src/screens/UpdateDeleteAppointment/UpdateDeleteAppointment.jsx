import React, { useState, useEffect } from 'react'
import { putAppointment } from '../services/appointments'
import Layout from '../../components/shared/Layout/Layout'

export default function UpdateDeleteAppointment(props) {
  const [formData, setFormData] = useState({
    name: ""
  })
  useEffect(() => {
    defaultFormData()
  }, [props.foods])
  
  const defaultFormData = ()=> {
    const appointment = props.appointments.find((appointment) => {
      return appointment.id===parseInt(props.match.params.id)
    })
    if (appointment) {
      setFormData({name: appointment.name})
    }
  }

  const handleChange = (e) => {
    const { value } = e.target
    setFormData({name:value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { id } = props.match.params
    const newAppointment = await putAppointment(id, formData)
    props.setAppointment(
      props.appointments.map((appointment) => {
        return appointment.id===parseInt(id)? newAppointment:appointment
      })
    )
    props.history.push('/appointments')
  }

  return (
    <Layout>
      
  </Layout>
)

}

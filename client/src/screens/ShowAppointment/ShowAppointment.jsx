import React, { useState, useEffect } from 'react'
import { readOneAppointment, addService } from '../../services/appointments'

export default function ShowAppointment(props) {
  const [appointment, setAppointment] = useState(null);
  const [serviceId, setServiceId] = useState(null);

  // useEffect(() => {
  //   getAppointment()
  // }, [])

  // const getAppointment= async () => {
  //   const showAppointment = await readOneAppointment(props.match.params.id)
  //   setAppointment(showAppointment)
  // }

  const handleChange = (e) => {
    const { value } = e.target;
    setServiceId(value);
  }

  const handleSubmit = async (e)=> {
    e.preventDefault();
    const showAppointment = await addService(serviceId, appointment.id);
    setAppointment(showAppointment);
  }

  return (
    <div>
      {
        appointment && (
          <>
            <h3>{appointment.name}</h3>
            {appointment.services.map((service) => (
              <p key={service.id}>{service.name}</p>
            ))}

            <form onSubmit={handleSubmit}>
              <select onChange={handleChange}>
                <option selected disabled>-- Select a service --</option>
                {props.services.map((service) => (
                  <option value={service.id}>{service.name}</option>
                ))}
              </select>
              <button>Add</button>
            </form>
          </>
        )
      }
    </div>
  )
}

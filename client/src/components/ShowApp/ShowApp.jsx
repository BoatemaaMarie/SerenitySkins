import React, { useState, useEffect } from 'react'
import { readOneService } from '../../services/services'
import './ShowApp.css'

export default function ShowApp(props) {
  const [service, setService] = useState(null)

  useEffect(() => {
    getService()
  }, [])

  const getService = async () => {
    const oneService = await readOneService(props.match.params.id)
    setService(oneService)
  }

  return (
    <div>
      {service &&

        <div className="showapp-css">
          <img src={service.img_url} alt={service.name} />

          <p className="name">Treatment: {service.name}</p>
        <p>Price: {service.price}</p>
        <p>Treatment Duration: {service.duration}</p>
          <p className="description" >{service.description}</p>
        </div>
      }
    </div>
  )
}

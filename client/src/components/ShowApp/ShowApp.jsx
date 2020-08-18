import React, { useState, useEffect } from 'react'
import {readOneService} from '../../services/services'

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

        <div>
          <img src={service.img_url} alt={service.name} />

          <p>{service.name}</p>
          <p>{service.price}</p>
          <p>{service.description}</p>
        </div>
      }
    </div>
  )
}

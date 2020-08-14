import React, {useState, useEffect} from 'react'
import Layout from '../../components/shared/Layout/Layout'
import {readAllServices} from '../../services/services'

export default function Services(props) {
  const [services, setServices] = useState([])

  const showServices = async() => {
    const services = await readAllServices()
  setServices(services)
  }

  useEffect(() => {
    showServices()
  },[])

  return (

      <Layout>
        <div>
        <h1>Services</h1>
        </div>

      {services.map((service) => (
        <>
        <img src={service.img_url}/>
          <p>{service.name}</p>
          </>
        ))}

      </Layout>  

  )
}
 
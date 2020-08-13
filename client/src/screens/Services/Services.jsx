import React from 'react'
import Layout from '../../components/shared/Layout/Layout'

export default function Services(props) {
  return (

      <Layout>
        <div className="services-title">
        <h1>Services</h1>
        </div>

          {props.services.map((service) => (
            <p>{service.name}</p>
        ))}

      </Layout>  

  )
}

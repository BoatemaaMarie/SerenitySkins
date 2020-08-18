import React, { useState, useEffect } from 'react'
import Layout from '../Layout/Layout'
import { readAllServices } from '../../../services/services'
import { Route } from 'react-router-dom'
import Services from '../../../screens/Services/Services'
import WelcomePage from '../../../screens/WelcomePage/WelcomePage'
import ShowAppointments from '../../../screens/ShowAppointments/ShowAppointments'
import UpdateDeleteAppointment from '../../../screens/UpdateDeleteAppointment/UpdateDeleteAppointment'
import CreateAppointment from '../../../screens/CreateAppointment/CreateAppointment'
import AuthForm from '../../../screens/AuthForm/AuthForm'
import { loginUser, registerUser, verifyUser } from '../../../services/auth'
import { readAllAppointments } from '../../../services/appointments'


export default function Main() {
  const [services, setServices] = useState([])
  const [currentUser, setCurrentUser] = useState(null)
  const [appointments, setAppointments] = useState([])

  const handleVerify = async () => {
    const userData = await verifyUser()
    setCurrentUser(userData)
  }


  const showServices = async () => {
    const services = await readAllServices()
    setServices(services)
  }

  const showAppointments = async () => {
    const appointments = await readAllAppointments()
    setAppointments(appointments)
  }

  useEffect(() => {
    showServices()
    handleVerify()
    showAppointments()
  }, [])

  return (

    <Layout currentUser={currentUser}>
      <main>
        <Route path="/login" render={(props) => (
          <AuthForm
            {...props}
            title="Login"
            apiCall={loginUser}
            setCurrentUser={setCurrentUser}
          />
        )} />

        <Route path="/register" render={(props) => (
          <AuthForm
            {...props}
            title="Register"
            apiCall={registerUser}
            setCurrentUser={setCurrentUser}
          />
        )} />

        <Route path="/services" render={() => (
          <Services services={services} />

        )} />

        <Route path="/welcomepage" render={() => (
          <WelcomePage />
        )} />

        <Route path="/appointment/:id/new" render={(props) => (
          <CreateAppointment {...props} />
        )} />

        <Route path="/updateanddelete/:id" render={(props) => (
          <UpdateDeleteAppointment
            {...props}
            appointments={appointments}
            setAppointments={setAppointments}
          />
        )} />


        <Route path="/showappointments" render={(props) => (
          <ShowAppointments
            {...props}
            appointments={appointments}
          />

        )} />

      </main>


    </Layout>

  )
}

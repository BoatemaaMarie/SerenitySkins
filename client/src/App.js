import React from 'react';
import './App.css';
import Login from './screens/Login/Login'
import WelcomePage from './screens/WelcomePage/WelcomePage';
import Services from './screens/Services/Services'
import ShowAppointment from './screens/ShowAppointment/ShowAppointment'
import UpdateDeleteAppointment from './screens/UpdateDeleteAppointment/UpdateDeleteAppointment'
import CreateAppointment from './screens/CreateAppointment/CreateAppointment';
import Calendar from './components/Calendar/Calendar'

export default function App(props) {
  return (
    <div>
      {/* <Login /> */}
      {/* <WelcomePage/> */}
      {/* <Services /> */}
      {/* <ShowAppointment /> */}
      {/* <CreateAppointment/> */}
      {/* <Calendar/> */}
      <UpdateDeleteAppointment/>
      </div>
  );
}



import React from 'react';
import './App.css';
import Login from './screens/Login/Login'
import WelcomePage from './screens/WelcomePage/WelcomePage';
import Services from './screens/Services/Services'
import ShowAppointment from './screens/ShowAppointment/ShowAppointment'
import CreateAppointment from './screens/CreateAppointment/CreateAppointment';

export default function App(props) {
  return (
    <div>
      {/* <Login /> */}
      {/* <WelcomePage/> */}
      {/* <Services /> */}
      <ShowAppointment />
      {/* <CreateAppointment/> */}
      </div>
  );
}



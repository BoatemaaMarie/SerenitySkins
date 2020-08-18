import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Main from './components/shared/Main/Main'
import Calendar from './components/Calendar/Calendar'

export default function App(props) {
  return (
    <div>
      <Main />
    </div>
  );
}



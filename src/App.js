// src/App.js

import React from 'react';
import ReminderForm from './ReminderForm';
import './App.css';
const App = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1 className='h1'>Gym Fee Reminder Application</h1>
      <ReminderForm />
    </div>
  );
};

export default App;

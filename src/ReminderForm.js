// src/ReminderForm.js

import React, { useState } from 'react';
import axios from 'axios';
import './Reminderform.css'; // Import the CSS file

const ReminderForm = () => {
  const [userId, setUserId] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiUrl = 'https://242b8e5vk4.execute-api.ap-south-1.amazonaws.com/dev/reminderfunc';

    try {
      const response = await axios.post(apiUrl, {
        action: 'set',
        user_id: userId,
        due_date: dueDate
      });

      setResponseMessage(response.data);
    } catch (error) {
      setResponseMessage(`Error: ${error.response ? error.response.data : error.message}`);
    }
  };

  return (
    <div className="container">
      <h2 className="title">Set Gym Fee Reminder</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="input-group">
          <label className="label">
            User ID:
            <input
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              required
              className="input"
            />
          </label>
        </div>
        <div className="input-group">
          <label className="label">
            Due Date:
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              required
              className="input"
            />
          </label>
        </div>
        <button type="submit" className="button">
          Set Reminder
        </button>
      </form>
      {responseMessage && (
        <div className="response">
          <h3>Response:</h3>
          <p>{responseMessage}</p>
        </div>
      )}
    </div>
  );
};

export default ReminderForm;

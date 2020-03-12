import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
function getBaseURL() {
  return process.env.NODE_ENV === 'development'
    ? 'http://localhost:5000'
    : ''
}
function App() {
  const [message, setMessage] = useState('')
  useEffect(() => {
    fetch(getBaseURL() + '/api')
      .then(res => res.json())
      .then(data => {
        setMessage(data.message)
      })
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        { message }
      </header>
    </div>
  );
}

export default App;
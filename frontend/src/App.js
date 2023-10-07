import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './modules/Header.jsx';
import Form from './modules/Form.jsx';


function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api')
    .then((res) => res.json())
    .then((data) => setMessage(data.message));
  }, [])

  return (
    <React.StrictMode>
      <Header/>
      <Form/>
    </React.StrictMode>
  );
}

export default App;

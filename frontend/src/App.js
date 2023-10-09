import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './modules/Header.jsx';
import Form from './modules/Form.jsx';
import List from './modules/List.jsx';


function App() {
  const [memos, setMemos] = useState([]);

  useEffect(() => {
    fetch('/api')
    .then((res) => res.json())
    .then((data) => setMemos(data));
  }, [])


  return (
    <React.StrictMode>
      <Header/>
      <Form/>
      <List memos={memos}/>
    </React.StrictMode>
  );
}

export default App;

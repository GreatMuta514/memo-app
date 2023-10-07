import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './modules/Header.jsx';
import Form from './modules/Form.jsx';
import List from './modules/List.jsx';


function App() {
  const [memo, setMemo] = useState('');

  useEffect(() => {
    fetch('/api')
    .then((res) => res.json())
    .then((data) => setMemo(data.memo));
  }, [])


  return (
    <React.StrictMode>
      <Header/>
      <Form/>
      <List memo={memo}/>
    </React.StrictMode>
  );
}

export default App;

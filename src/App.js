import './App.css';
import React, { useState, useEffect } from 'react';
import Landing from './components/Landing';
import Logger from './components/Logger';
import publicIp from 'public-ip';
import axios from 'axios';
import Load from './components/Load';
import Navigation from './components/Navigation';
import BottomFooter from './components/BottomFooter';
import Projects from './components/Projects';
import Courses from './components/Courses';

function App() {
  const url = 'https://jsonplaceholder.typicode.com/todos/1';
  const [state, setState] = useState(null);

  useEffect(() => {
    axios.get(url)
    .then(res => {setState(res.data)})
  }, [url])

  if(state) { 
    return (
      <div className="App">
         <Navigation />
        <Landing />
        <Logger />
        {/* <Projects /> */}
        <Courses />
        <BottomFooter />
      </div>
    );
  }
    
    return (
      <div>
        <Load />
      </div>
    )
}

export default App;

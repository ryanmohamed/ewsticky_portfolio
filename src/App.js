import './App.css';
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';

import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Me from './components/Me/Me';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';

function App() {

  const [home, setHome] = useState(false);
  const [currTab, setCurrTab] = useState('/');
  const passDataBack = (data) => {
    setCurrTab(data);
  }

  useEffect(() => {
    // on mount
    setCurrTab(window.location.pathname);
  }, []);

  useEffect(() => {
    (currTab == '/' || currTab == '/home') ? setHome(true) : setHome(false);
    console.log(home, currTab);
  }, [currTab]);
  
  return (
    <div className="App">
      <Navbar backToParent={passDataBack}/>

      {/* not in a route bc we want to avoid unmount! */}
      {/* <Home toggle={home}/> PUT ME BACK */}

      <Routes>
        <Route path="/"/>
        <Route path="/me" element={<Me />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

import './App.scss';
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Home from './containers/home';
import About from './containers/about';
import Resume from './containers/resume';
import Contact from './containers/contact';
import Skills from './containers/skills';
import Portfolio from './containers/portfolio';
import Navbar from './components/navBar';
// import Particle from './utils/ParticleBackground';
import ParticleBackground from './utils/ParticleBackground';




function App() {
  const location = useLocation();
  console.log(location)

  const renderParticlesJsInHomePage = location.pathname === "/";

  return (
    <div className="App">
      {/* particles js */}

      {
        renderParticlesJsInHomePage &&(
        <ParticleBackground />)

      }

      {/* navbar */}
      <Navbar />

      {/* main page content */}
      <div className='App__main-page-content'>

      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/about" element={<About />} />
        <Route index path="/resume" element={<Resume />} />
        <Route index path="/skills" element={<Skills />} />
        <Route index path="/portfolio" element={<Portfolio />} />
        <Route index path="/contact" element={<Contact />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;



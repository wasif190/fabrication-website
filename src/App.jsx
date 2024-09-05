import React, { useEffect } from 'react';
import './App.css';
import { About, Contact, Gallery, Home, Navbar, Service } from './Components/index';

function App() {
  return (
    <div>
      <Navbar/>
      <Home />
      <Service />
      <About />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;

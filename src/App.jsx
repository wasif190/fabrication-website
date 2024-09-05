import React, { useEffect } from 'react';
import './App.css';
import { About, Contact, Gallery, Home, Service } from './Components/index';

function App() {
  return (
    <div>
      <Home />
      <Service />
      <About />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;

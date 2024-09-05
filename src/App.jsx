import React from 'react';
import './App.css';
import { About, Contact, Gallery, Home, Navbar, Service } from './Components/index'

function App() {
  return (
    <div>
      <Home/>
      <Service/>
      <About/>
      <Gallery/>
      <Contact/>
    </div>
  )
}

export default App
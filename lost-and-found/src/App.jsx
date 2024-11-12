import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home.jsx'
import Navbar from './Components/Navbar.jsx'

const App = () => {
  return (
    <>
      <Navbar />  
      <Home />
     
    </>
  );
};


export default App

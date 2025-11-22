import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from "./components/Footer";
import Hero from './components/Hero';

function App() {
  return (
    <>
      {/* Your pages */}
      <Navbar></Navbar>
      <Hero></Hero>
      <Home></Home>
      <Footer />
    </>
  );
}

export default App;

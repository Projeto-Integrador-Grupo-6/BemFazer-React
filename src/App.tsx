import React from 'react';
import Home from './paginas/home/Home';
import './App.css';
import Navbar from './components/static/navbar/Navbar';
import Footer from './components/static/footer/Footer';


function App() {
  return (
    <>
      <Navbar />
        <Home />
    </>
  );
}

export default App;

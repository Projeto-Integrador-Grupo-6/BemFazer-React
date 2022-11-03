import React from 'react';
import Home from './paginas/home/Home';
import Navbar from './components/static/navbar/Navbar';
import Footer from './components/static/footer/Footer';
import './App.css';


function App() {
  return (
    <>
      <Navbar />
        <Home />
      <Footer />
    </>
  );
}

export default App;

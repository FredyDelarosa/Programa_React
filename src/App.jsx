import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/molecules/Navbar';
import Footer from './components/atoms/Footer';
import Hero from './components/molecules/Hero';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <>
    <header className="titulo">
      <h1>Interstellar</h1>
    </header>
    <div className="nav-bg">
      <Navbar />
    </div>
    <Hero />
    <Outlet />
    <Footer />
  </>
);

export default App;



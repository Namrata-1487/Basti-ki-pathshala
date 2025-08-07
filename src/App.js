import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import VolunteerForm from './components/VolunteerForm';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <NavigationBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/volunteer" element={<VolunteerForm />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
};

export default App;

import React, { Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import './App.css';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import VolunteerForm from './components/VolunteerForm';
import Footer from './components/Footer';

const App = () => {
  const location = useLocation();
  return (
    <>
    
      <NavigationBar />
      <AnimatePresence mode="wait">

      <Suspense fallback={<div>Loading...</div>}>
        <Routes   location={location} key={location.pathname}>
          <Route path="*" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/volunteer" element={<VolunteerForm />} />
        </Routes>
      </Suspense>
      </AnimatePresence>

      <Footer />
    </>
  );
};

export default App;

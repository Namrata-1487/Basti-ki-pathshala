import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/NavigationBar'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import VolunteerForm from './components/VolunteerForm'
import Footer from './components/Footer'
const App = () => {
  return (
    <div>
      <div className="app-container">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/volunteer" element={<VolunteerForm />} />
        </Routes>
        <Footer />
      </div>
</div>
  )
}

export default App
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/NavigationBar'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import VolunteerForm from './components/VolunteerForm'
const App = () => {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/volunteer" element={<VolunteerForm />} />
      </Routes>
</div>
  )
}

export default App
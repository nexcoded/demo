import React from 'react';
import {Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Home from './pages/Home'
import BlogDetails from './pages/BlogDetails'; // Create this component for blog details
import Navbar from './components/Navbar'
import AboutUs from './pages/aboutUs'

import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Blog/:id" element={<BlogDetails />} />
      </Routes>
    </div>
  );
}

export default App;

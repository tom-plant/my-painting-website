// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import PaintingGallery from './components/PaintingGallery';
import About from './components/About';
import Research from './components/Research';



import './App.css';

function App() {
  const paintings = [
    {
      title: 'Test Painting 1',
      description: 'This is a Description of Painting 1',
      imageUrl: '/images/painting1.jpg', // Adjust the path to your image file
    },
    {
      title: 'Test Painting 2',
      description: 'This is a Description of Painting 2',
      imageUrl: '/images/painting2.jpg', // Adjust the path to your image file
    },
    // Add more painting objects as needed
  ];

  return (
    <Router>
    <div className="App">
      <Header /> {/* Include the Header component outside of Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<PaintingGallery paintings={paintings} />} />
        {/* Add routes for other pages */}
      </Routes>
    </div>
  </Router>
);
}

export default App;
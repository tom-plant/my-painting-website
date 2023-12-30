// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import PaintingGallery from './components/PaintingGallery';
import Home from './components/Home';

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
    <div className="App">
      <Header />
      <h1>Estonia Painting Portfolio</h1>
      <PaintingGallery paintings={paintings} />
    </div>
  );
}

export default App;
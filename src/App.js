
import './App.css';
import React from 'react'
import Header from './components/Header';
import Home from './components/pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cars from './components/pages/Cars';
import Houses from './components/pages/Houses';

function App() {
  return (
    
     <BrowserRouter>
      <Header/>
    <Routes>
      <Route path="cars" element={<Cars />} />
      <Route path="houses" element={<Houses />} />
      <Route index element={<Home />} />
    </Routes>
    </BrowserRouter>
  
  );
}

export default App;

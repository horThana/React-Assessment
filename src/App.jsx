import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import AdminHome from './components/AdminHome';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      
      <Routes>
        <Route path="/"  element={<Home />}/>
        <Route path="/AdminHome" element={<AdminHome />} />
      </Routes>

    </>
  );
}

export default App;

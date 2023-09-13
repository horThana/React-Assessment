import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Link, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import AdminHome from './components/AdminHome';


function App() {
  return (
    <>
      <Navbar /> {/* Use the Navbar component */}
      {/* <h1>Generation Thailand</h1> */}
      <nav>
        {/* <Link to="/" className="list">
          Home
        </Link> */}
        
      </nav>
      <Routes>
        <Route path="/"  element={<Home />}/>
        <Route path="/AdminHome" element={<AdminHome />} />
      </Routes>
      <Link to="/AdminHome" className="list">
          Admin Home
        </Link>
      <Link to="/UserHome" className="list">
           UserHome
        </Link>
    </>
  );
}

export default App;

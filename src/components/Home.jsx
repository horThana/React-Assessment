import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Home = () => {
  return (
    <>
    <Navbar/>
      <h1>Generation Thailand</h1>
      <Link to="/AdminHome" className="list">
        Admin Home Sector
      </Link>
      <Link to="/UserHome" className="list">
        User Home Sector 
      </Link>
    </>
  );
}

export default Home;

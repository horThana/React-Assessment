import React, { useState } from "react";
import Navbar from "./Navbar";
import UserHome from "./UserHome";
import { Link } from 'react-router-dom';

const AdminHome = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [position, setPosition] = useState("");

  const handleSave = () => {
    console.log("Name:", name);
    console.log("Last Name:", lastName);
    console.log("Position:", position);
  }

  return (
    <>
      <Navbar />
      <h1>Generation Thailand</h1>
      <h1>Home - Admin Sector</h1>
      <Link to="/AdminHome" className="list">
        Admin Home Sector
      </Link>
      <Link to="/UserHome" className="list">
        User Home  Sector
      </Link>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div>
          <label>Position:</label>
          <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} />
        </div>
        <button type="button" onClick={handleSave}>Save</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Position</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John</td>
            <td>Doe</td>
            <td>Manager</td>
          </tr>
          <tr>
            <td>Jane</td>
            <td>Smith</td>
            <td>Developer</td>
          </tr>
          <tr>
            <td>Bob</td>
            <td>Johnson</td>
            <td>Designer</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default AdminHome;

import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link } from 'react-router-dom';
import axios from 'axios';

const AdminHome = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [position, setPosition] = useState("");
  const [employees, setEmployees] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://jsd5-mock-backend.onrender.com/members"
        );
        setEmployees(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, [reload]);

  const createData = async () => {
    try {
      const requestData = {
        name: name,
        lastname: lastName,
        position: position,
      };

      const response = await axios.post(
        "https://jsd5-mock-backend.onrender.com/members",
        requestData
      );

      if (response.status === 200) {
        setReload(!reload);
        setName("");
        setLastName("");
        setPosition("");
      }
    } catch (error) {
      console.error("Error creating data:", error);
    }
  };

  const handleDelete = (index) => {
    const updatedEmployees = [...employees];
    updatedEmployees.splice(index, 1);
    setEmployees(updatedEmployees);
  };

  

  return (
    <>
      <Navbar />
      <h1>Generation Thailand</h1>
      <h1>Home - Admin Sector</h1>
      <Link to="/AdminHome" className="list">
        Admin Home Sector
      </Link>
      <Link to="/UserHome" className="list">
        User Home Sector
      </Link>

      <form>
        <h2>Create User Here</h2>
        <div>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="LastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
        </div>
        <button type="button" onClick={createData}>
          Save
        </button>
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
          {employees.map((employee) => (
              <tr key={employee.member_id}> 
                <td>{employee.name}</td>
                <td>{employee.lastname}</td>
                <td>{employee.position}</td>
                <td>
        <button onClick={() => handleDelete(employee.member_id)}>Delete</button>
      </td>
    </tr>
  ))}
</tbody>

      </table>
    </>
  );
};

export default AdminHome;

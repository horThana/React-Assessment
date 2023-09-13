import { useState, useEffect } from "react"; // Import useEffect from React
import Navbar from "./Navbar";
import { Link } from 'react-router-dom';
import axios from 'axios';

const userHome = () => {
  const [reload, setReload] = useState(false);
  const [employees, setEmployees] = useState([]); // Initialize employees state

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

  return (
    <>
      <Navbar />
      <h1>Generation Thailand</h1>
      <h1>Home - User Sector</h1>

      <Link to="/AdminHome" className="list">
        Admin Home Sector
      </Link>
      <Link to="/UserHome" className="list">
        User Home Sector
      </Link>

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
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.name}</td>
              <td>{employee.lastname}</td>
              <td>{employee.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default userHome;

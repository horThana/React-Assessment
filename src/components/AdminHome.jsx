import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import axios from "axios";

const AdminHome = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [position, setPosition] = useState("");
  const [employees, setEmployees] = useState([]);
  const [reload, setReload] = useState(false);
  const [editId, setEditId] = useState(-1);

/// Get////////
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

  ////POST////
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


//// Put //////////////
  const handleEdit = (id) => {
    setEditId(id);
  };

  const handleUpdate = async () => {
    try {
      const updatedEmployee = employees.find((employee) => employee.id === editId);

      if (!updatedEmployee) {
        console.error("Employee not found for update");
        return;
      }

      const updatedData = {
        name: name || updatedEmployee.name,
        lastname: lastName || updatedEmployee.lastname,
        position: position || updatedEmployee.position,
      };

      const response = await axios.put(
        `https://jsd5-mock-backend.onrender.com/members/${editId}`,
        updatedData
      );

      if (response.status === 200) {
        setReload(!reload);
        setEditId(-1); // Reset editId to stop editing
      }
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  ////Delete////////

  const handleDelete = (index) => {
    const updatedEmployees = [...employees];

    updatedEmployees.splice(index, 1);
    setEmployees(updatedEmployees);
  };

  const handleDeleteAll = async () => {
    try {
      await axios.delete("https://jsd5-mock-backend.onrender.com/members");
      setReload(!reload);
    } catch (error) {
      console.error("Error deleting all data:", error);
    }
  };

  return (
    <>
      <Navbar />
      <h1>Generation Thailand</h1>
      <h1>Home - Admin Sector</h1>
      <div class>
        <Link to="/AdminHome" className="list">
          Admin Home Sector
        </Link>
        <Link to="/UserHome" className="list">
          User Home Sector
        </Link>
      </div>

      <h2>Create User Here</h2>

      <form>
        <div className="input">
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
        {editId === -1 ? (
          <button className="saveButton" type="button" onClick={createData}>
            Save
          </button>
        ) : (
          <button className="saveButton" type="button" onClick={handleUpdate}>
            Update
          </button>
        )}
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
            employee.id === editId ? (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                  />
                </td>
                <td>
                  <button onClick={handleUpdate}>Update</button>
                </td>
                <td></td>
              </tr>
            ) : (
              <tr key={employee.member_id}>
                <td>{employee.name}</td>
                <td>{employee.lastname}</td>
                <td>{employee.position}</td>
                <td>
                  <button onClick={() => handleEdit(employee.id)}>Edit</button>
                  <button onClick={() => handleDelete(employee.id)}>Delete</button>
                </td>
              </tr>
            )
          ))}
        </tbody>
      </table>
      <button onClick={handleDeleteAll}>Delete ALL</button>
    </>
  );
};

export default AdminHome;

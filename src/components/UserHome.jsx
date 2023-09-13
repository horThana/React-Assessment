import Navbar from "./Navbar"
import { Link } from 'react-router-dom';


const userHome = () =>  {


  return (
    <>
    <Navbar/>
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
  )
}

export default userHome

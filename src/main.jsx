import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
}from "react-router-dom"

//// Component
import AdminHome from './components/AdminHome.jsx';
import UserHome from './components/UserHome.jsx';
import Owner from './components/Owner.jsx';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';


const router = createBrowserRouter([
  {
    path:"/",
    element:<>
    <App/>
    </>
  },
  {
    path:"/adminHome",
    element:<>
    <AdminHome />
    </>
  },
  {
    path:"/userHome",
    element:<>
    <UserHome />
    </>
  },
  {
    path:"/owner",
    element:<>
    <Owner />
    </>
  },{
    path:"/Home",
    element:<>
    <Home />
    </>
  },{
    path:"/Navbar",
    element:<>
    <Navbar/>
    </>
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

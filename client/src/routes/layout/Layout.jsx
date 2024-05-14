import { Outlet } from "react-router-dom"
import Navbar from "../../components/navbar/Navbar"
import "./layout.scss"
import React from 'react'

const Layout = () => {
  return (
    <div className="layout">
      <div className="nav">
        <Navbar/>
      </div>
      <div className="content">
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout
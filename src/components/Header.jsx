import React from 'react'
import "../styles/header.css"
import { Link } from 'react-router-dom'
import logo from "../assets/images.png";

const Header = () => {
  return (
    <div className="header">
      <div className="left">
        <img src={logo}></img>
       
      </div>
      <div className="mid">
        <Link to={"/"} >Home</Link>
          <Link to={"/Product"}>Product</Link>
            <Link to={"/view"}>View</Link>
               <Link to={"/preorder"}>Products</Link>
      </div>
      <div className="right">  <Link to={"/preorder"}>Pre-order</Link></div>
    </div>
  )
}

export default Header

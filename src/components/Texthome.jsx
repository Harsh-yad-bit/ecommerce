import React from 'react'

import "@fontsource/inter/400.css"; // Regular
import "@fontsource/inter/500.css"; // Medium
import "@fontsource/inter/600.css"; // Semi-bold
import "@fontsource/inter/700.css"; // Bold
import { Link } from 'react-router-dom';

const texthome = () => {
  return (
    <div className='texthome'>
      <h1>Building the future spatial expreiences</h1> 
   <h4>Discover meticulously crafted timepieces that blend timeless elegance with everyday precision.</h4>
   <div className="textbtn">
        <Link className="demo" to={"/view"}>VIEW DEMO</Link>
       <Link  className="get"to={"/preorder"}>GET STARTED</Link>
   </div>
    </div>
  )
}

export default texthome

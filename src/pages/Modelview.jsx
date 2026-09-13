import React from 'react';
import { Link } from 'react-router-dom';
import Mdl from '../components/Mdl';
import "../styles/Modelview.css";

const Modelview = () => {
  return (
    <div className="page">
      <div className='model'>
        <Mdl />
      </div>

      <div className="text">  
        <h1>VISION PRO</h1>
        <p className="subtitle">Immersive spatial computing with ultra-high resolution micro-OLED displays.</p>
        <p className="price">From ₹3,49,900.00</p>
        <div className="preorderd-btn">
          <Link to="/preorder">Pre-Order</Link>
        </div>
      </div>
      <div className="hide"></div>
      <div className="sidebox">
        <div className="parameter-card">
          <img src="/wt.png" alt="Weight" />
          <div className="card-value">600g</div>
          <p className="card-label">Total Weight</p>
        </div>

        <div className="parameter-card">
          <img src="/battery.png" alt="Battery Life" />
          <div className="card-value">2.5 hrs</div>
          <p className="card-label">Battery Life</p>
        </div>

        <div className="parameter-card">
          <img src="/pixel.png" alt="Micro-OLED" />
          <div className="card-value">4K / Eye</div>
          <p className="card-label">Micro-OLED</p>
        </div>

        <div className="parameter-card">
          <img src="/sensor.png" alt="Tracking" />
          <div className="card-value">12 Cams</div>
          <p className="card-label">Tracking</p>
        </div>

        <div className="videolink">
          <a className="play-button" href="/Money Meme.mp4">▶</a>
        </div> 
      </div>
    </div>
  );
};

export default Modelview;
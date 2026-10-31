import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Product() {
  const iframeRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => { setLoading(false); }, 4000); 
    return () => clearTimeout(timer);
  }, []);

  const [activeMats, setActiveMats] = useState({
    front: 'up5',
    middle: 'side10',
    strap: 'rap0'
  });

  const handleMaterialChange = (part, objNames, matName) => {
    setActiveMats(prev => ({ ...prev, [part]: matName }));
    
    if (iframeRef.current) {
      iframeRef.current.contentWindow.postMessage({ 
        type: 'CHANGE_MATERIAL', 
        objects: objNames, 
        material: matName 
      }, '*');
    }
  };

  return (
    <div className="product-container">
  {loading && (
        <div className="mac-loader">
          <svg className="draw-text-svg" viewBox="0 0 400 150">
            <defs>
              <linearGradient id="text-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#a6687a" />
              </linearGradient>
            </defs>
            <text x="60" y="95" className="draw-letter l1">H</text>
            <text x="115" y="95" className="draw-letter l2">a</text>
            <text x="165" y="95" className="draw-letter l3">₹</text>
            <text x="215" y="95" className="draw-letter l4">s</text>
            <text x="260" y="95" className="draw-letter l5">h</text>
          </svg>
        </div>
      )}
 <div className="headbg"></div>
<div className="footbg">
  <div className="footer-content">
    <span className="footer-text">Craft Your Reality. Pre-Order the Future Today.</span>
    <Link to="/preorder" className="preorder-btn">Pre-order Now</Link>
  </div>
</div>

      <div className="watermark-hide"></div>
      <div className="interaction-blocker"></div>
      
      <iframe
        ref={iframeRef}
        src="/vrHeadset/vrHeadset.html"
        title="Verge3D VR"
        className="verge-frame"
      />

      {/* Headstrap UI -> Object_9 & Object_10 */}
      <div className="ui-group left-group strap-cover">
        <div className="glass-pill">
          <button 
            id="btn-strap-lightgray"
            className={`color-btn ${activeMats.strap === 'rap0' ? 'active' : ''}`} 
            style={{ backgroundColor: '#b8bcc2' }} 
            onClick={() => handleMaterialChange('strap', ['Object_9', 'Object_10'], 'rap0')} 
          />
          <button 
            id="btn-strap-pink"
            className={`color-btn ${activeMats.strap === 'rap1' ? 'active' : ''}`} 
            style={{ backgroundColor: '#bc8a89' }} 
            onClick={() => handleMaterialChange('strap', ['Object_9', 'Object_10'], 'rap1')} 
          />
          <button 
            id="btn-strap-charcoal"
            className={`color-btn ${activeMats.strap === 'rap2' ? 'active' : ''}`} 
            style={{ backgroundColor: '#2d3136' }} 
            onClick={() => handleMaterialChange('strap', ['Object_9', 'Object_10'], 'rap2')} 
          />
          <button 
            id="btn-strap-yellowgreen"
            className={`color-btn ${activeMats.strap === 'rap3' ? 'active' : ''}`} 
            style={{ backgroundColor: '#b5bc67' }} 
            onClick={() => handleMaterialChange('strap', ['Object_9', 'Object_10'], 'rap3')} 
          />
          <button 
            id="btn-strap-mint"
            className={`color-btn ${activeMats.strap === 'rap4' ? 'active' : ''}`} 
            style={{ backgroundColor: '#59b38d' }} 
            onClick={() => handleMaterialChange('strap', ['Object_9', 'Object_10'], 'rap4')} 
          />
        </div>
        <div className="connector-line right-line"></div> 
      </div>

      {/* Middle Part UI -> Object_4 */}
      <div className="ui-group right-group middle-cover">
        <div className="connector-line left-line"></div>
        <div className="glass-pill">
          <button 
            id="btn-middle-darkgray"
            className={`color-btn ${activeMats.middle === 'side10' ? 'active' : ''}`} 
            style={{ backgroundColor: '#333638' }} 
            onClick={() => handleMaterialChange('middle', ['Object_4'], 'side10')} 
          />
          <button 
            id="btn-middle-tealgreen"
            className={`color-btn ${activeMats.middle === 'side11' ? 'active' : ''}`} 
            style={{ backgroundColor: '#628178' }} 
            onClick={() => handleMaterialChange('middle', ['Object_4'], 'side11')} 
          />
          <button 
            id="btn-middle-pink"
            className={`color-btn ${activeMats.middle === 'side12' ? 'active' : ''}`} 
            style={{ backgroundColor: '#a6687a' }} 
            onClick={() => handleMaterialChange('middle', ['Object_4'], 'side12')} 
          />
          <button 
            id="btn-middle-blue"
            className={`color-btn ${activeMats.middle === 'side13' ? 'active' : ''}`} 
            style={{ backgroundColor: '#417b9c' }} 
            onClick={() => handleMaterialChange('middle', ['Object_4'], 'side13')} 
          />
          <button 
            id="btn-middle-white"
            className={`color-btn ${activeMats.middle === 'side14' ? 'active' : ''}`} 
            style={{ backgroundColor: '#e8ecef' }} 
            onClick={() => handleMaterialChange('middle', ['Object_4'], 'side14')} 
          />
          <button 
            id="btn-middle-green"
            className={`color-btn ${activeMats.middle === 'side15' ? 'active' : ''}`} 
            style={{ backgroundColor: '#617a55' }} 
            onClick={() => handleMaterialChange('middle', ['Object_4'], 'side15')} 
          />
        </div>
      </div>

      {/* Front Cover UI -> Object_5 (Ordered left to right from screenshot: grey-blue up5, bright blue up6, dusty rose up7, dark charcoal up8.001, olive green up9) */}
      <div className="ui-group right-group front-cover">
        <div className="connector-line left-line"></div>
        <div className="glass-pill">
          <button 
            id="btn-front-greyblue"
            className={`color-btn ${activeMats.front === 'up5' ? 'active' : ''}`} 
            style={{ backgroundColor: '#8790a0' }} 
            onClick={() => handleMaterialChange('front', ['Object_5'], 'up5')} 
          />
          <button 
            id="btn-front-blue"
            className={`color-btn ${activeMats.front === 'up6' ? 'active' : ''}`} 
            style={{ backgroundColor: '#3895d3' }} 
            onClick={() => handleMaterialChange('front', ['Object_5'], 'up6')} 
          />
          <button 
            id="btn-front-dustyrose"
            className={`color-btn ${activeMats.front === 'up7' ? 'active' : ''}`} 
            style={{ backgroundColor: '#9e737c' }} 
            onClick={() => handleMaterialChange('front', ['Object_5'], 'up7')} 
          />
          <button 
            id="btn-front-charcoal"
            className={`color-btn ${activeMats.front === 'up8.001' ? 'active' : ''}`} 
            style={{ backgroundColor: '#363a3f' }} 
            onClick={() => handleMaterialChange('front', ['Object_5'], 'up8.001')} 
          />
          <button 
            id="btn-front-olivegreen"
            className={`color-btn ${activeMats.front === 'up9' ? 'active' : ''}`} 
            style={{ backgroundColor: '#789364' }} 
            onClick={() => handleMaterialChange('front', ['Object_5'], 'up9')} 
          />
        </div>
      </div>
     
    </div>

  );
}

export default Product;

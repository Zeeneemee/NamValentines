import React, { useState, useContext } from 'react';
import './css/gift.css'; // Create a new CSS file for Gift component styles
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ThemeContext } from '../App';


const Gift = () => {
    const [isAnimating, setIsAnimating] = useState(false);
    const {showPic,setShowPic} = useContext(ThemeContext)
  
    const handleClick = () => {
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false)
        setShowPic(1);}, 2000); // Animation duration is set to 2 seconds (2000 milliseconds)
      
    };
  
    return (
      <div className={`gift ${isAnimating ? 'scale-up' : ''}`} onClick={handleClick}>
        <i className="bi bi-gift"></i>
      </div>
    );
  };

export default Gift;

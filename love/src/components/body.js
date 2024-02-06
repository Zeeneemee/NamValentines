import React, { useState, useContext } from 'react';
import Nav from './nav';
import './css/body.css';
import Announcement from './announcement';
import { ThemeContext } from '../App';
import Pagination from './pagination';
import Pic from './data';
import { createContext } from 'react';
import Play from './play';

export const Opening = createContext();

const Body = () => {
  const [open, setOpen] = useState(true);
  const [showImage, setShowImage] = useState(false); // New state to control image visibility
  const { no } = useContext(ThemeContext);

  const handleClick = () => {
    setOpen((cur) => !cur);
    setShowImage((cur) => !cur); // Show or hide the image when the envelope is clicked
  };

  return (
    <Opening.Provider value={{ open, setOpen, showImage, setShowImage }}>
      <div className="web-body">
        <Announcement />
        <Nav />
        <div className='play-con'>
          {/* <Play/> */}
        </div>
        <div className="frame">
          {/* Add the 'show' class to the image when showImage is true */}
          {Pic[no].video ? (
          <video
            src={Pic[no].video}
            alt="Video content"
            className={showImage ? 'show' : ''}
            autoPlay
            loop
            muted
            controls
          />
        ) : (
          <img src={Pic[no].pic} alt="Image content" className={showImage ? 'show' : ''} />
        )}
        </div>
        <div className="content">
          <h1>Study us click at the envelope</h1>
          <i onClick={handleClick} className={open ? 'bi bi-envelope' : 'bi bi-envelope-open'}></i>
        </div>
        <Pagination />
      </div>
    </Opening.Provider>
  );
};

export default Body;

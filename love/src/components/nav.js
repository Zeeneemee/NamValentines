import { useContext } from 'react';
import { ThemeContext } from '../pages/year1';
import Pic from './data';

import './css/nav.css';
// import { Link } from 'react-router-dom';
const Nav = ()=>{
    // const {setShowPic} = useContext(ThemeContext)
    const { no } = useContext(ThemeContext);
    return(
        <nav className="navbar">
            <div className='nav-con'>
              <h1>{Pic[no].text}</h1>
                
                
                

            </div>
        </nav>
    )
}

export default Nav;
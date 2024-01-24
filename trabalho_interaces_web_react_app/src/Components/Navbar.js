import React from 'react';
import Logo from '../Content/OIG2.png'; 

function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftSide'>
            <img src={Logo} alt=""/>
        </div>
        <div className='rightSide'></div>
    </div>
  );
}

export default Navbar;
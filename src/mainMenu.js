import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './assets/css/mainMenu.css';
import { MdOutlineArrowOutward, MdOutlineClose, MdOutlineMenu, MdOutlineMenuOpen } from 'react-icons/md';

function MainMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the mobile menu open/close state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };  
  
  const closeMenu = () => setIsOpen(false);

  
  const menu = (
    <>
      <div className="menu mHide topmost columns menuContainer spaceBetween" id="topmost">
        <div className="w70 columns">
          <Link to="/" className="logo">
            <span className="white">fe</span>
          </Link>

          <ul className="menuItems columns wt400">
            <Link to=""><li className="menuItem">about me</li></Link>
            <li className="menuseparator down">·</li>
            <Link to="/services"><li className="menuItem">services</li></Link>
            <li className="menuseparator down">•</li>
            <Link to="/work-experience"><li className="menuItem">work experience</li></Link>
            <li className="menuseparator down">·</li>
            <Link to=""><li className="menuItem">education</li></Link>
          </ul>
        </div>

        <div className=" right">
          <Link to="https://calendly.com/ewobefaith/consultation" className="white mont wt500 columns grid10"><span>book a call </span><MdOutlineArrowOutward className="bigText wt100 rh45"/></Link>
        </div>
      </div>

      
      <div className="menu dHide topmost w100" id="mtopmost">
        <div className="mcolumns  menuContainer vcenter" >
          <div className="w20">
            <Link to="/" className="logo">
              <span className="white">fe</span>
            </Link>
          </div>
          <div className="w60 center">
            <Link to="https://calendly.com/ewobefaith/consultation" className="white mont fp">book a call <MdOutlineArrowOutward className="down rh45" /></Link>
          </div>
          <div className="w20 right">
            <button onClick={toggleMenu} className="mtoggle down">{isOpen ? <MdOutlineClose /> : <MdOutlineMenu />} </button>
          </div>
        </div>

        <div className={`${'mmenu'} row grid50 vcenter ${isOpen ? 'open' : ''}`} id="mmenuBox">
          <Link to='/' className='white' onClick={closeMenu}>Home</Link>
          <Link to='/home#about' className='white' onClick={closeMenu}>About Me</Link>
          <Link to='/services' className='white' onClick={closeMenu}>Services</Link>
          <Link to='/work-experience' className='white' onClick={closeMenu}>work experience</Link>
          <Link to='https://calendly.com/ewobefaith/consultation'onClick={closeMenu}>book a call <MdOutlineArrowOutward className='down rh45' /> </Link>

        </div>
      </div>

    </>
  );

  return menu
}

window.addEventListener('scroll', () => {
  const verticalScrollPx = window.scrollY || window.pageYOffset;
  const menu = document.getElementById("topmost");
  const mmenu = document.getElementById("mtopmost");

  if (verticalScrollPx < 20) {
    menu.style.backgroundColor = 'transparent';
    mmenu.style.backgroundColor = 'transparent';
  } else if (verticalScrollPx > 20 && verticalScrollPx < 1000) {
    menu.style.backgroundColor = '#6A5950';
    mmenu.style.backgroundColor = '#6A5950';
  } else {
    menu.style.backgroundColor = '#6A5950';
    mmenu.style.backgroundColor = '#6A5950';
  }
});



export default MainMenu;

import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './assets/css/mainMenu.module.css';
import { MdMail, MdOutlineClose, MdOutlineLocationOn, MdOutlineMenu, MdOutlineMenuBook, MdOutlineMenuOpen, MdPhone } from 'react-icons/md';

function MainMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the mobile menu open/close state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };  
  
  const closeMenu = () => setIsOpen(false);

  
  const menu = (
    <>
      <div className="menu mHide topmost" id="topmost">
        <div className="menuContainer orderBottom" >
          <div className="menuItemsWrapper">
            <ul className="menuItems right">
              <li className="menuItem"><Link to='/about-us'>About Us</Link></li>
              <li className="menuItem"><Link to='/services'>Our Services</Link></li>
            </ul>
          </div>
          <div className="logo">
            <Link to='/' style={{cursor:'pointer'}}>
              <div className="blogo"> 
                <img alt="theleadman logo" src="https://res.cloudinary.com/dzfqshhzu/image/upload/v1708076254/IMG_0186-removebg-preview.png" height="50" id="#logo" />
              </div>  
            </Link>
          </div>
          
          <div className="menuItemsWrapper">
            <ul className="menuItems left vcenter'">
              <li className="menuItem"><Link to='/home'>Portfolio</Link></li>
              <li className=""><Link to='/contact-us'><button className="menuButton">Help Me Get Better</button></Link></li>
            </ul>
          </div>
        </div>
        <div className="bottomContainer borderBottom">
          <span><MdOutlineLocationOn /> 10, Olaleke Taiwo Street, Ikeja, lagos.</span>
          <Link to="tel:234703904100"><MdPhone /> +234703904100</Link>
          <Link to="mailto:info@theleadman.org"><MdMail /> info@theleadman.org</Link>
        </div>
      </div>

      
      <div className="menu dHide topmost columns100" id="mtopmost">
        <div className="mcolumns spaceBetween borderBottom  menuContainer vcenter" >
          <div className="columns80">
            <Link to='/' style={{cursor:'pointer'}}>
              <div className="blogo"> 
                <img alt="theleadman logo" src="https://res.cloudinary.com/dzfqshhzu/image/upload/v1708076254/IMG_0186-removebg-preview.png" height="50" id="#logo" />
              </div>  
            </Link>
          </div>
          <div className="columns20 right">
            <button onClick={toggleMenu} className="mtoggle">{isOpen ? <MdOutlineClose /> : <MdOutlineMenuOpen />} </button>
          </div>
        </div>

        <div className={`${mmenu} row grid50 vcenter ${isOpen ? open : ''}`} id="mmenuBox">
          <Link to='/' onClick={closeMenu}>Home</Link>
          <Link to='/about-us'onClick={closeMenu}>About Us</Link>
          <Link to='/services'onClick={closeMenu}>Our Services</Link>
          <Link to='/contact-us'onClick={closeMenu}><button className="menuButton">Help Me Get Better</button></Link>

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
    menu.style.backgroundColor = '#222222';
    mmenu.style.backgroundColor = '#222222';
  } else {
    menu.style.backgroundColor = '#222222';
    mmenu.style.backgroundColor = '#222222';
  }
});



export default MainMenu;

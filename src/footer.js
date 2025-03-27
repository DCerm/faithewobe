import React from 'react';
import { Link } from "react-router-dom";
import { MdOutlineArrowOutward } from "react-icons/md";

function Footer() {
  const footer = (
  <>
      <div className="creamBg topmost columns menuContainer spaceBetween">
         <div className="w70 columns mHide">
            <ul className="menuItems columns wt400">
            <a href="#about"><li className="menuItem">about me</li></a>
            <li className="menuseparator down">·</li>
            <Link to="/services"><li className="menuItem">services</li></Link>
            <li className="menuseparator down">•</li>
            <Link to="/work-experience"><li className="menuItem">work experience</li></Link>
            <li className="menuseparator down mHide dHide">·</li>
            <Link to=""><li className="menuItem mHide dHide">education</li></Link>
            </ul>
         </div>

         <div className=" right">
            <Link to="mailto:ewobefaith@gmail.com" className="white mont wt200 columns mcolumns pv10 grid10 bigText"><span>ewobefaith@gmail.com </span><MdOutlineArrowOutward className="bigText wt100 rh45"/></Link>
         </div>
      </div>
   </>
  );
  
return footer;
}

export default Footer;
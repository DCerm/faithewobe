import React from 'react';
import { Link } from "react-router-dom";
import { MdOutlinePhonelink, MdOutlineQueryStats, MdOutlineCall, MdOutlineForum, MdOutlineMarkAsUnread, MdOutlineRadar} from "react-icons/md";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  const footer = (
  <>
    <div className=" borderTop " style={{backgroundColor:"#202020"}}>
    <section className="columns footerGrid pt0 pb0">
        <div className="columns3 right" style={{paddingTop:"5px"}}>
            <div className="columns grid50 social mcolumns mcenter">
              <Link to="https://www.facebook.com/theleadmanafrica/"><FaFacebook/></Link> 
              <Link to="https://www.instagram.com/theleadmanafrica/"><FaInstagram/></Link> 
              <Link to="https://www.linkedin.com/company/the-leadman-africa"><FaLinkedin/></Link>
           </div>
        </div>
        <div className="columns3 center">
           <p className="footerP">
               © 2021 - 2024 TheLeadman Africa
           </p>
        </div>
        <div className="columns3 right">
            <div className="columns mcolumns grid20 alignright mcenter wt200">
                <Link to="/about-us" className="footerSmP">
                   About Us
                </Link>

                <Link to="/services" className="footerSmP">
                   Services
                </Link>
                <Link to="privacy-policy" className="footerSmP">
                   Privacy Policy
                </Link>
                <div className="mspacer"></div>
            </div>
        </div>
    </section>
    </div>
  </>
  );
  
return footer;
}

export default Footer;
import React from 'react';
import { Link } from 'react-router-dom';
import Faith from './assets/images/IMG_2463.JPG';
import workspace from './assets/images/workspace.jpg';
import calender from './assets/images/calender.JPG';
import travel from './assets/images/travel.png';
import minute from './assets/images/minute.PNG';
import gworkspace from './assets/images/Gworkspace.png';
import research from './assets/images/research.PNG';
import { MdOutlineArrowDownward, MdOutlineArrowOutward, MdOutlineBuildCircle, MdOutlineStopCircle, MdOutlineStars, MdOutlineMilitaryTech, MdOutlinePhone, MdOutlineMail } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';

function Services() {  

  return (
  <>

     {/*////HERO/                 /HERO/.              /HERO            HERO           */}

     <div className="p10">
      <div className="videoBg flex end">
        <img src={workspace}  width="100%" className="serviceBg" />
      </div>

      <div className="vidoverlay card columns ">
        <div className="w50 padLeft50">
          <h3 className="f100 mf50">My Services</h3>

        </div>
        
      </div>
    </div>
    
    {/*////REMOTE HELP                 /REMOTE HELP /.              /REMOTE HELP             REMOTE HELP            */}

    <section className="">
      <div className="columns grid100">
        <div className="w40 ">
          <h3 className="pr20p">Remote help that helps you run smoother</h3>
        </div>

        <div className="w60">
          
          <p> 
            My core service offerings are:
          </p>
          <li className="mont pv5 fp ">Community management</li>
          <li className="mont pv5 fp">Administrative support</li>
          <li className="mont pv5 fp">Customer support specialist</li>
          <div className="spacer20"></div>
          <Link to="https://calendly.com/ewobefaith/consultation" className=" mont fp">book a call <MdOutlineArrowOutward className="down rh45" /></Link>
        </div>

      </div>
      <div className='spacer100' />
      <div className='mspacer' />       <div className='mspacer' />
    

      {/*////PROJECTS                 /PROJECTS /.              /PROJECTS             PROJECTS            */}

    <div className="row creamBg grid10 card">
      <div className="columns mcolumns tag darkBg grid10">
        <MdOutlineStopCircle className="" />
        <span className="down"> Portfolio</span>
      </div>
      <h3 className="">Selected Projects</h3>

      <div className="columns spacer50 start mflcenter grid20 mw90">
        <div className="w20 darkBg card psticky">
          <MdOutlineBuildCircle className="bigText creamBg round p10" />
          <h2 className="pv20 uppercase">Tools</h2>

          <div className="">
            <li className="mont capitalize pv5">Google workspace</li>
            <li className="mont capitalize pv5">Trello</li>
            <li className="mont capitalize pv5">Triplt</li>
            <li className="mont capitalize pv5">Otter Ai</li>
            <li className="mont capitalize pv5">Time and Date</li>
            <li className="mont capitalize pv5">Calendly</li>
            <li className="mont capitalize pv5">MS Excel</li>
          </div>
        </div>

        {/*////PORTFOLIO                 /PORTFOLIO /.              /PORTFOLIO             PORTFOLIO            */}

        <div className="row w80 grid10">

          <div className="w100 columns grid10">
            <div className="p20 r10 darkBg w50">
              <img src={calender} alt="" className="portImg" />
              <Link to="/services/calender-and-email-management" className="white"><h4 className="capitalize spacer20 bigText ">
                calender and email management <MdOutlineArrowOutward className="down rh45" /></h4>
              </Link>
            </div>
            <div className="p20 r10 darkBg w50">
            <img src={travel} alt="" className="portImg" />
              <Link to="/services/travel-and-itinerary-planning" className="white"><h4 className="capitalize spacer20 bigText ">
                travel and itinerary planning <MdOutlineArrowOutward className="down rh45" /></h4>
              </Link>
            </div>
          </div>

          <div className="w100 columns mflcenter grid10 start">
            <div className="p20 r10 darkBg w50">
              <img src={gworkspace} alt="" className="portImg" />
              <Link to="/services/survey-administration-and-analysis" className="white"><h4 className="capitalize spacer20 bigText ">
                survey administration and analysis <MdOutlineArrowOutward className="down rh45" /></h4>
              </Link>
            </div>
            <div className="p20 r10 darkBg w50">
            <img src={minute} alt="" className="portImg" />
              <Link to="/services/community-engagement-and-minute-taking" className="white"><h4 className="capitalize spacer20 bigText ">
                community engagement and minute taking <MdOutlineArrowOutward className="down rh45" /></h4>
              </Link>
            </div>
          </div>

          <div className="w100 columns mflcenter grid10 start">
            <div className="p20 r10 darkBg w50">
              <img src={research} alt="" className="portImg" />
              <Link to="/services/data-entry-and-research" className="white"><h4 className="capitalize spacer20 bigText ">
                data entry and research <MdOutlineArrowOutward className="down rh45" /></h4>
              </Link>
            </div>
            <div className="p20 r10 darkBg w50 hidden">
              <img src={research} alt="" className="portImg" />
              <Link to="/services/data-entry-and-research" className="white"><h4 className="capitalize spacer20 bigText ">
                data entry and research <MdOutlineArrowOutward className="down rh45" /></h4>
              </Link>
            </div>
          </div>
        </div> 
        
      </div>
    </div>

    </section>

    {/*///////////////////////////////////////CONTACT ME/////////////////////////////////////////////////////////*/}

    <div className="columns h100 darkBg" style={{borderTop:"5px solid #6a5950"}}>
      <div className="w20 creamBg h100 flcenter vcenter flex" >
      <img className="Faith dHide center" src={Faith} alt="" />
      </div>
      <div className="w20" ></div>
      <div className="w60 mcenter" style={{zIndex:"10"}}>
        <div className="mspacer"></div><div className="mspacer"></div>
        <h4 className="uppercas bigHeading mcenter">Need reliable remote help?</h4>
        <p className="w70">I’d love to connect and see how we can
        collaborate to achieve great things together!</p>

        <div className="spacer20 columns grid20 ">
          <a href="tel:+2349030632789" className="mont" > <MdOutlinePhone className="down rh45" /> +2349030632789 <MdOutlineArrowOutward className="down rh45"/></a>
          <a href="mailto:ewobefaith@gmail.com" className="mont" > <MdOutlineMail className="down rh5" /> ewobefaith@gmail.com <MdOutlineArrowOutward className="down rh45"/></a>
          <a href="https://linkedin.com/in/faith-ewobe" className="mont" > <FaLinkedin className="down rh5" /> LinkedIn <MdOutlineArrowOutward className="down rh45"/></a>
          <a href="https://calendly.com/ewobefaith/consultation" className=" mont">book a call <MdOutlineArrowOutward className="down rh45" /></a>

        </div>

        
        <div className="mspacer"></div> <div className="mspacer"></div>
      </div>
    </div>
    <section className="FaithSection mcenter mHide">
      <img className="Faith" height="auto" width="300px" src={Faith} alt="" />
    </section>
  </>  
  )  
}

export default Services;
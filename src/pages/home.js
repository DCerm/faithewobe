import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './assets/css/home.css';
import Faith from './assets/images/IMG_2463.JPG';
import Faithvid from './assets/8635168531210152644.mov';
import calender from './assets/images/calender.JPG';
import travel from './assets/images/travel.png';
import minute from './assets/images/minute.PNG';
import gworkspace from './assets/images/Gworkspace.png';
import research from './assets/images/research.PNG';
import { MdOutlineArrowDownward, MdOutlineArrowOutward, MdOutlineBuildCircle, MdOutlineStopCircle, MdOutlineStars, MdOutlineMilitaryTech, MdOutlinePhone, MdOutlineMail } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';
import office from './assets/images/IMG_2572 Background Removed.png';
import canva from './assets/images/IMG_2575 Background Removed.png';
import asana from './assets/images/IMG_2577 Background Removed.png';
import adobe from './assets/images/IMG_2585 Background Removed.png';
import calendly from './assets/images/IMG_2579-removebg-preview.png';
import kayak from './assets/images/IMG_2581 Background Removed.png';
import zoom from './assets/images/IMG_2578-removebg-preview.png';
import trello from './assets/images/IMG_2576-removebg-preview.png';
import workspace from './assets/images/IMG_2573-removebg-preview.png';
import wanderlog from './assets/images/IMG_2583-removebg-preview.png';
import otter from './assets/images/IMG_2584-removebg-preview.png';




function Home() {  

  return (
  <>
    {/*////HERO/                 /HERO/.              /HERO            HERO           */}
    <div className="columns h90 mh100 lightBg ">
      <div className="w50 heroLeft padLeft50 columns black">
        <div className="w20 center mspacer">
          <p className="vtx r180 uppercase">2024 <span style={{letterSpacing:"0"}} className="mHide">–––––––––––––––––––––––––––––––</span> 
            <span style={{letterSpacing:"0"}} className="dHide">–––––––</span> Virtual Assistant
          </p>
        </div>
        <div className="w80 mw90 spaceBetween row grid100 start">
          <span className="mspacer">
            <span className="bigText cat wt700">ALX</span><br/>
            <span className="mont wt300 fp">certified</span>
          </span>
          <span className="mspacer">
            <h1 className=" boldHeader uppercase">Hello </h1>
            <p className="bigText">I'm Faith Ewobe, a virtual assistant | administrative support specialist</p>
          </span>
          <a href="#about"><p className="black" >scroll down <MdOutlineArrowDownward className="down" /></p></a>
        </div>
      </div>

      <div className="w50 h90 heroRight">
      </div>
    </div>


    {/*////ABOUT/                 /ABOUT/.              /ABOUT            ABOUT           */}
    <section className="columns start grid100" id="about">
      <div className="w40">
        <h2 className="uppercase">About Me</h2>
        <p className="mspacer">I’m a virtual assistant who thrives on organization
          and getting things done. With experience in
          social media management, customer relations, and administrative
          support, I aim to make life easier for clients by
          offering efficient, reliable remote help that
          improves productivity.
        </p>
        <p className="spacer50">Outside of work, I’m often crocheting, learning
          new skills, or reading novels.
        </p>
        <div className="mspacer"></div>
      </div>

      <div className="w20 mw90 card creamBg">
        <MdOutlineStars className="bigText darkBg round p10" />
        <h2 className="pv20 uppercase">Skills</h2>
        <li className="mont pv5">Administrative support</li>
        <li className="mont pv5">Data entry </li>
        <li className="mont pv5">Calendar and schedule <span className=""><br/> &nbsp;&nbsp; &nbsp;</span> management</li>
        <li className="mont pv5">Time management</li>
        <li className="mont pv5">Customer service</li>
        <li className="mont pv5">Invoicing and basic <span className=""><br/>&nbsp;&nbsp; &nbsp;</span> book keeping</li>
        <li className="mont pv5">Internet Research</li>
        <li className="mont pv5">Travel research and <span className=""><br/> &nbsp;&nbsp; &nbsp;</span> bookings</li>
        <li className="mont pv5">File management and <span className=""><br/> &nbsp;&nbsp; &nbsp;</span> organisation</li>
        <li className="mont pv5">Email management<span className=""><br/> &nbsp;&nbsp; &nbsp;</span> and communications</li>

      </div>
      
      {/*////SERVICES/                 /SERVICES/.              /SERVICES            SERVICES           */}

      <div className="w40 " >
        <div className="spacer100" />
        <div className="spacer100" />
        <div className="spacer100" />
        <h2 className="uppercase">Services</h2>
        <div className="spacer20" />
        <li className="mont pv5 fp ">Community management</li>
        <li className="mont pv5 fp">Administrative support</li>
        <li className="mont pv5 fp">Customer support specialist</li>

        <p className="spacer30">My goal is to help businesses run smoothly by
          managing workflows and supporting teams
          remotely.
        </p>
      </div>
    </section>

    {/*////TOOLS/                 /TOOLS/.              /TOOLS            TOOLS           */}

    <section className="pt0">
      <h2 className="pv20 uppercase">tools <span className="dHide" style={{letterSpacing:"0"}} > &nbsp; —————> </span></h2>
      <div className="columns mcolumns slider fcenter grid50 ">
        <img src={office} alt="microsoft office" className="toolsImg" />
        <img src={canva} alt="canva" className="toolsImg" />
        <img src={asana} alt="asana" className="toolsImg" />
        <img src={adobe} alt="adobe" className="toolsImg" />
        <img src={calendly} alt="calendly" className="toolsImg" />
        <img src={kayak} alt="kayak" className="toolsImg" />
        <img src={zoom} alt="zoom" className="toolsImg" />
        <img src={trello} alt="trello" className="toolsImg" />
        <img src={workspace} alt="Google workspace" className="toolsImg" />
        <img src={wanderlog} alt="wanderlog" className="toolsImg" />
        <img src={otter} alt="otter" className="toolsImg" />
      </div>
    </section>

    {/*////VIDEO/                 /VIDEO/.              /VIDEO            VIDEO           */}

    <div className="p10">
      <div className="videoBg">
        <video src={Faithvid}  width="100%"  autoPlay muted loop playsInline ></video>
      </div>

      <div className="vidoverlay card columns ">
        <div className="w50 padLeft50 ">
          <h3 className="f100 mf50">Work Experiences</h3>

        </div>
        
      </div>
    </div>

    {/*////EXPERIENCE                 /EXPERIENCE /.              /EXPERIENCE             EXPERIENCE            */}

    <section className="">
      <div className="columns grid100">
        <div className="w40 ">
          <h3 className="pr20p">Overview of My Administrative Journey</h3>
        </div>

        <div className="w60">
          <p>Over the past three years, I have
            worked with brands in the US and Nigeria. 
            I am skilled
            in supporting remote teams, managing client communications,
            organizing workflows, scheduling, and
            coordinating tasks to ensure smooth operations and
            enhance customer satisfaction.
          </p>
          <div className="spacer20 columns grid50 start">
            <Link to="https://calendly.com/ewobefaith/consultation" className=" mont fp">book a call <MdOutlineArrowOutward className="down rh45" /></Link>
            <Link to="/work-experience" className=" mont fp">view all experiences <MdOutlineArrowOutward className="down rh45" /></Link>
          </div>
        </div>
      </div>
    </section>

    {/*////PROJECTS                 /PROJECTS /.              /PROJECTS             PROJECTS            */}

    <section className="row creamBg grid10 ">
      <div className="columns mcolumns tag darkBg grid10">
        <MdOutlineStopCircle className="" />
        <span className="down"> Portfolio</span>
      </div>
      <h3 className="">Selected Projects</h3>

      <div className="columns spacer50 start mflcenter grid50 mw90">
        <div className="w20 darkBg card psticky">
          <MdOutlineBuildCircle className="bigText creamBg round p10" />
          <h2 className="pv20 uppercase">Tools</h2>

          <div className="">
            <li className="mont capitalize pv5">Google workspace</li>
            <li className="mont capitalize pv5">Trello</li>
            <li className="mont capitalize pv5">Asana</li>
            <li className="mont capitalize pv5">Canva</li>
            <li className="mont capitalize pv5">Zoom</li>
            <li className="mont capitalize pv5">Triplt</li>
            <li className="mont capitalize pv5">Otter Ai</li>
            <li className="mont capitalize pv5">Time and Date</li>
            <li className="mont capitalize pv5">Calendly</li>
            <li className="mont capitalize pv5">Microsoft Office</li>
            <li className="mont capitalize pv5">Kayak</li>
            <li className="mont capitalize pv5">Wandelog</li>
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
    </section>

    {/*////TESTIMONIAL                 /REVIEW /.              /REVIEW             TESTIMONIAL            */}

    <section className="columns grid50">
      <div className="w30 row grid10 mflcenter start">
        <div className="columns mcolumns tag creamBg grid10">
          <MdOutlineStopCircle className="" />
          <span className="down"> Reviews</span>
        </div>
        <h3 className="">Testimonials</h3>
      </div>

      <div className="w30 mw90 p20 r10 creamBg">
        <p className="testimonialText">“I am grateful to you and Faith, as you
          have been wonderful to work with as I
          navigate the rough seas of growing a
          business. I couldn’t have done it without
          your help. Faith has been a true (as her
          name entails) faithful warrior in
          continuing the effort.”
        </p> 
        <p className="testimonialGiverName capitalize">- small business client</p>
      </div> 
      <div className="w30 mw90 p20 r10 creamBg">
        <p className="testimonialText">"Faith and I worked together on a
          project, and I find her drive for
          excellence truly commendable. She
          consistently goes above and beyond
          to deliver exceptional service."
        </p> 
        <p className="testimonialGiverName capitalize">- Project Partner, Raven Gold</p>
      </div> 

      <div className="w10 mw90 right mcenter"><MdOutlineMilitaryTech className="reviewIcon cream" /></div> 

    </section>    
    
    {/*///////////////////////////////////////CONTACT ME/////////////////////////////////////////////////////////*/}

    <div className="columns h100 darkBg" style={{borderTop:"5px solid #6a5950"}}>
      <div className="w20 creamBg h100 flcenter vcenter flex" >
      <img className="Faith dHide center" src={Faith} alt="" />
      </div>
      <div className="w20" ></div>
      <div className="w60 mcenter" style={{zIndex:"10"}}>
        <div className="mspacer"></div><div className="mspacer"></div>
        <h4 className="uppercas boldHeader mcenter">Let's talk.</h4>
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

    
    {/*/////////////////FOOTER///////////////////*/}     
  </>  
  )  
}

export default Home;
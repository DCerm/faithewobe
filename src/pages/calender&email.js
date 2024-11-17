import React from 'react';
import { Link } from 'react-router-dom';
import Faith from './assets/images/IMG_2463.JPG';
import workspace from './assets/images/workspace.jpg';
import calender from './assets/images/calender.JPG';
import travel from './assets/images/travel.png';
import minute from './assets/images/minute.PNG';
import email from './assets/images/email.PNG';
import gworkspace from './assets/images/Gworkspace.png';
import { MdOutlineArrowDownward, MdOutlineArrowOutward, MdOutlineBuildCircle, MdOutlineStopCircle, MdOutlineStars, MdOutlineMilitaryTech, MdOutlinePhone, MdOutlineMail } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';


function Survey() {  

  return (
  <>

     {/*////HERO/                 /HERO/.              /HERO            HERO           */}

     <div className="p10">
      <div className="videoBg">
        <img src={calender}  width="100%" className="serviceBg" />
      </div>

      <div className="vidoverlay card columns ">
        <div className="w70 padLeft50">
          <h3 className="f100 mf40">Calendar + Email Management</h3>

        </div>
        
      </div>
    </div>
    
    {/*////REMOTE HELP                 /REMOTE HELP /.              /REMOTE HELP             REMOTE HELP            */}

    <section className="">
      <div className="columns grid100">
        <div className="w40 ">
          <h3 className="pr20p">Scheduling and automated reminders in Google calendar </h3>
        </div>

        <div className="w60">
          
          <p> 
          I managed scheduling and communication using Google Calendar, organizing meetings and 
          setting reminders to ensure timely follow-ups. I integrated Google Meet into calendar 
          events as requested, providing seamless access for virtual meetings. Various reminders 
          were set within Google Calendar to accurately manage and prioritize the client’s schedule.
          </p>

          <div className="spacer50" />
          
        </div>
      </div>

      <div className="spacer50 columns grid100">
        <div className="w40 ">
          <h3 className="pr20p">Email sorting and priotization in Gmail </h3>
        </div>

        <div className="w60">
          
          <p> 
          I organized and managed email communications using Gmail. This included sorting, prioritizing, and responding 
          to emails efficiently to maintain clear and timely communication. I also scheduled follow-ups and flagged 
          important emails to streamline team coordination and ensure no critical messages were missed.
          </p>
          
          <div className="spacer50" />

          <Link to="https://calendly.com/ewobefaith/consultation" className="mont fp">book a call <MdOutlineArrowOutward className="down rh45" /></Link>
        </div>
      </div>

      <div className='spacer100' />
      <div className='mspacer' />       <div className='mspacer' />
    

      {/*////PROJECTS                 /PROJECTS /.              /PROJECTS             PROJECTS            */}

    <div className="row creamBg grid10 card">
      <div className="columns mcolumns tag darkBg grid10">
        <MdOutlineStopCircle className="" />
        <span className="down"> Screenshots</span>
      </div>
      <h3 className="">Project Gallery</h3>

      <div className="columns spacer50 start mflcenter grid50 mw90">
        <div className="w20 darkBg card psticky">
          <MdOutlineBuildCircle className="bigText creamBg round p10" />
          <h2 className="pv20 uppercase">Tools</h2>

          <div className="">
            <li className="mont capitalize pv5">Google workspace</li>
            <li className="mont capitalize pv5">customer service</li>
          </div>
        </div>

        {/*////PORTFOLIO IMG                /PORTFOLIO IMG              /PORTFOLIO  IMG           PORTFOLIO            */}

        <div className=" w80 mnopad">
          <div className="mnopad">
            <div className="p20 r10 darkBg mnopad">
              <img src={calender} alt="" className="fullProjectImg" width="500px" />
              <div className='spacer10' />
              <img src={email} alt="" className="fullProjectImg" width="500px" />
            </div>
          </div>          
        </div> 
        
      </div>
    </div>

    </section>

    {/*////OTHER PROJECTS                OTHER PROJECTS              OTHER PROJECTS           OTHER PROJECTS            */}


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

export default Survey;
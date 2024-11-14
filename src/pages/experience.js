import React from 'react';
import { Link } from 'react-router-dom';
import Faith from './assets/images/IMG_2463.JPG';
import Faithvid from './assets/8635168531210152644.mov';
import Gworkspace from './assets/images/Gworkspace.png';
import { MdOutlineArrowDownward, MdOutlineArrowOutward, MdOutlineBuildCircle, MdOutlineStopCircle, MdOutlineStars, MdOutlineMilitaryTech, MdOutlinePhone, MdOutlineMail } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa'
function Exp() {  

  return (
  <>

     {/*////VIDEO/                 /VIDEO/.              /VIDEO            VIDEO           */}

     <div className="p10">
      <div className="videoBg">
        <video src={Faithvid}  width="100%"  autoPlay muted loop playsInline ></video>
      </div>

      <div className="vidoverlay card columns ">
        <div className="w50 padLeft50">
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
          <div className="spacer20"></div>
          <Link to="" className=" mont fp">book a call <MdOutlineArrowOutward className="down rh45" /></Link>
        </div>
        <div className='mspacer'></div>         <div className='mspacer'></div>

      </div>

        <div className="spacer100"></div>
      <div className="columns spacer50 grid100 borderTop start">
        <div className="w20 pv20">
          <h4 className="bigText fp cat">Raven Gold</h4>
          <li className="mont p10 wt200">Social Media Manager</li>
        </div>

        <div className="w60">
          <li className="fp wt200">Enhanced brand visibility, achieving a 2,000%
            increase in engagement through strategic content
            management and active community interaction.
          </li>
          <li className="fp spacer20 wt200">Managed content calendars, conducted market
            research, and maintained organized spreadsheets to
            support remote operations.
          </li>
          <li className="fp spacer20 wt200">Coordinated directly with clients to address queries,
            strengthening online customer relationships.
          </li>
        </div>

        <div className="w20 row start grid10">
          <span className="tag capitalize">Social media management</span>
          <span className="tag capitalize">Scheduling tools</span>
          <span className="tag capitalize">Google workspace</span>
          <span className="tag capitalize">microsoft excel</span>
        </div>
      </div>



      <div className="spacer50"></div>
      <div className="columns spacer50 grid100 start borderTop">
        <div className="w20 pv20">
          <h4 className="bigText fp cat">R.S. Abimbola</h4>
          <li className="mont p10 wt200">Administrative Clerk</li>
        </div>

        <div className="w60">
          <li className="fp wt200">Assisted clients professionally,
            handling inquiries and document processing efficiently.
          </li>
          <li className="fp spacer20 wt200">Coordinated office schedules
            and maintained up-to-date records, supporting seamless office operations.
          </li>
        </div>

        <div className="w20 row start grid10">
          <span className="tag capitalize">Data Entry</span>
          <span className="tag capitalize">Customer service</span>
          <span className="tag capitalize">administrative support</span>
        </div>
      </div>



      <div className="spacer50"></div>
      <div className="columns spacer50 grid100 start borderTop">
        <div className="w20 pv20">
          <h4 className="bigText fp cat">Corvus Aurum</h4>
          <li className="mont p10 wt200">Social Media Manager</li>
        </div>

        <div className="w60">
          <li className="fp wt200">Boosted brand awareness by 1,471% through
          targeted audience engagement strategies.
          </li>
          <li className="fp spacer20 wt200">Implemented community management
            practices to build relationships and ensure timely responses remotely.
          </li>
          <li className="fp spacer20 wt200">Created content aligned with business
          objectives, increasing brand followers by 30%.
          </li>
        </div>

        <div className="w20 row start grid10">
          <span className="tag capitalize">Social media management</span>
          <span className="tag capitalize">Scheduling tools</span>
          <span className="tag capitalize">Google workspace</span>
          <span className="tag capitalize">microsoft excel</span>
        </div>
      </div>



      <div className="spacer50"></div>
      <div className="columns pv50 grid100 start borderTop">
        <div className="w20 pv20">
          <h4 className="bigText fp cat">Oriflame</h4>
          <li className="mont p10 wt200">Network Marketer</li>
        </div>

        <div className="w60">
          <li className="fp wt200">Achieved a 100% increase in sales
            revenue through strategic promotions and customer loyalty initiatives.
          </li>
          <li className="fp spacer20 wt200">Maintained accurate customer data
            and supported efficient follow-ups and remote relationship-building.
          </li>
        </div>

        <div className="w20 row start grid10">
          <span className="tag capitalize">customer service</span>
          <span className="tag capitalize">administrative support</span>
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
          <a href="" className=" mont">book a call <MdOutlineArrowOutward className="down rh45" /></a>

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

export default Exp;
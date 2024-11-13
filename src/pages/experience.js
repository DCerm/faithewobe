import React from 'react';
import { Link } from 'react-router-dom';
import Faithvid from './assets/8635168531210152644.mov';
import Gworkspace from './assets/images/Gworkspace.png';
import {  MdOutlineArrowOutward, MdOutlineBuildCircle, MdOutlineStopCircle } from 'react-icons/md';

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
      <div className="columns pv50 grid100 start border">
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

    {/*////PROJECTS                 /PROJECTS /.              /PROJECTS             PROJECTS            */}

    <section className="columns creamBg grid10 start ">
      <div className="w20 darkBg card sticky">
        <MdOutlineBuildCircle className="bigText creamBg round p10" />
        <h2 className="pv20 uppercase">Tools</h2>

        <div className=" ">
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

      <div className="w80  grid10 row">
        <div className="columns tag darkBg grid10">
          <MdOutlineStopCircle className="" />
          <span className="down"> Portfolio</span>
        </div>
        <h3 className="">Selected Projects</h3>
        <div className="spacer50 columns grid10 card darkBg w100">
          <div className="card darkBg w50">
            <img src={Gworkspace} alt="" className="portImg card" />
            <h4 className="capitalize">calender and email management</h4>

          </div>
          <div className="card darkBg w50">

          </div>
        </div>
      </div>
    </section>
 
  </>  
  )  
}

export default Exp;
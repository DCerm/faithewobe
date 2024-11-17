import React from 'react';
import { Link } from 'react-router-dom';
import Faith from './assets/images/IMG_2463.JPG';
import workspace from './assets/images/workspace.jpg';
import calender from './assets/images/calender.JPG';
import travel from './assets/images/travel.png';
import minute from './assets/images/minute.PNG';
import email from './assets/images/email.PNG';
import gworkspace from './assets/images/Gworkspace.png';
import analytics from './assets/images/analytics.JPG';
import content from './assets/images/content.PNG';
import { MdOutlineArrowDownward, MdOutlineArrowOutward, MdOutlineBuildCircle, MdOutlineStopCircle, MdOutlineStars, MdOutlineMilitaryTech, MdOutlinePhone, MdOutlineMail } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';


function Survey() {  

  return (
  <>

     {/*////HERO/                 /HERO/.              /HERO            HERO           */}

     <div className="p10">
      <div className="videoBg">
        <img src={minute}  width="100%" className="serviceBg" />
      </div>

      <div className="vidoverlay card columns ">
        <div className="w80 padLeft50">
          <h3 className="f100 mf40">Community Engagement + Minute Taking</h3>

        </div>
        
      </div>
    </div>
    
    {/*////REMOTE HELP                 /REMOTE HELP /.              /REMOTE HELP             REMOTE HELP            */}

    <section className="">
      <div className="columns grid100">
        <div className="w40 ">
          <h3 className="pr20p">Captured minutes of meetings for documentation </h3>
        </div>

        <div className="w60">
          
          <p> 
          Accurately captured meeting minutes using Otter.ai, an AI-powered transcription 
          tool approved by the client, to streamline documentation and ensure no details 
          were missed. For clients preferring a manual approach, I also provide direct 
          transcription and summary, adapting to preferred styles for meeting documentation.
          </p>

          <div className="spacer50" />
          
        </div>
      </div>

      <div className="spacer50 columns grid100">
        <div className="w40 ">
          <h3 className="pr20p">Engaged online community and analyzed engagement metrics </h3>
        </div>

        <div className="w60">
          
          <p> 
          Managed and engaged with the online community, responding to inquiries and fostering 
          positive interactions to strengthen brand presence. Using insights from Meta Business 
          Suite, I analyzed engagement metrics to understand audience behaviour and refine 
          community strategies, ensuring content resonated with followers and encouraged meaningful engagement.
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
          <li className="mont capitalize pv5">Otter AI</li>
            <li className="mont capitalize pv5">Google workspace</li>
            <li className="mont capitalize pv5">Meta business suite</li>
          </div>
        </div>

        {/*////PORTFOLIO IMG                /PORTFOLIO IMG              /PORTFOLIO  IMG           PORTFOLIO            */}

        <div className=" w80 mnopad">
          <div className="mnopad">
            <div className="p20 r10 darkBg mnopad">
              <img src={minute} alt="" className="fullProjectImg" width="500px" />
              <div className='spacer10' />
              <img src={content} alt="" className="fullProjectImg" width="500px" />
              <img src={analytics} alt="" className="fullProjectImg" width="500px" />
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
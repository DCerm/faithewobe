import React, { useState } from 'react';
import './assets/css/home.css';
import Faith from './assets/images/IMG_2463.JPG';
import { MdOutlineArrowCircleLeft, MdOutlineArrowCircleRight, MdOutlineArrowDropDown, MdOutlineArrowRightAlt, MdOutlineEditNote, MdOutlineLightbulb, MdOutlinePaid, MdOutlinePhone } from 'react-icons/md';

function Home() {  

  return (
  <>
    {/*/////////////////////////////////////HERO///////////////////////////////////////////////////////////*/}
    
    <div className="columns h100 darkBg">
      <div className="columns20 creamBg h100 flcenter vcenter flex" >
      <img className="Faith dHide center" src={Faith} alt="" />
      </div>
      <div className="columns20" ></div>
      <div className="columns60 mcenter" >
        <div className="mspacer"></div><div className="mspacer"></div>
        <h1 className="uppercase boldHeader mcenter">Hi, I'm Faith Ewobe</h1>
        <p>VIRTUAL ASSISTANT | ADMINISTRATIVE SUPPORT
        SPECIALIST</p>
        <div className="spacer20 wt100">_________________</div>
        <p className="spacer30">
          You're an early bird. The website will be live in a few days. <br/>
          Please leave a mail at <a href="mailto:ewobefaith@gmail.com">ewobefaith@gmail.com</a>
        </p>
        <div className="mspacer"></div> <div className="mspacer"></div>
      </div>
    </div>
    <section className="FaithSection mcenter mHide">
      <img className="Faith" height="auto" width="300px" src={Faith} alt="" />
    </section>
    

    
    
{/*///////////////////////////////////////CONTACT US/////////////////////////////////////////////////////////*/}

    
            {/*/////////////////FOOTER///////////////////*/}     
  </>  
  )  
}

export default Home;
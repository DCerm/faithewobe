import React from 'react';
import Faith from './pages/assets/images/IMG_2463.JPG';

function Loader() {
  return (
    <>
      <div className="columns h100 darkBg">
        <div className="w20 creamBg h100 flcenter vcenter flex" >
        <img className="Faith dHide center" src={Faith} alt="" />
        </div>
        <div className="w20" ></div>
        <div className="w60 mcenter" >
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
    </>
  )
}
export default Loader;

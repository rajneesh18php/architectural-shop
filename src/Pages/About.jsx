import React from 'react'
import './Css/About.css'
import { GiMissileLauncher } from "react-icons/gi";
import { MdHighQuality } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Header from '../Components/Header';
import Footer from '../Components/Footer';





const About = () => {
  return (
    <>
    <Header/>
     <div className='about-img'>
      
      <div className='about-content-story'>
        <div className='about-text'>
        <h2 className='about-burty'>Beautiful Spaces Begin with Thoughtful Choices and Trust.</h2>
        <p>we don't just manufacture furniture; we transform your vision of a perfect space into reality. What started as a passionate endeavor has today evolved into a premier destination for premium furniture, elegant doors, strong gates, and stylish seating solutions. Our hallmark is a seamless blend of modern design aesthetics and traditional Indian craftsmanship, creating timeless pieces for contemporary living.</p>
           <button className='about-btn'>More About <FaArrowRight/></button>
        </div>
        </div>
        </div> 

        <div className='about-multi-card'>
          <div className="about-card-1">
            <h2 className='about-our'>Oure Core Values</h2>

            <div className='about-4card'>
              <div className='avout-bleave1'>
                <GiMissileLauncher className='mission'/>
                <h2>Mission</h2>
                <span className='spam-text'>To provide premium security and style to every Indian home.</span>
              </div>
              <div className='avout-bleave2'>
                <MdHighQuality className='mission'/>
                <h2>Quality</h2>
                <span className='spam-text'>Unmatched craftsmanship and durability.</span>
              </div>
              <div className='avout-bleave3'>
                <FaHandsHelping className='mission'/>
                <h2>Custom Design</h2>
                <span className='spam-text'>Respecting your uniqueness.</span>
              </div>
              <div className='avout-bleave4'>
                <FaRegHeart className='mission'/>
                <h2>Trust</h2>
                <span className='spam-text'>Commitment to community and craftsmanship.</span>
              </div>
            </div>
          </div>
          <div className="about-card-2">
            <img  className='about-content-img' src="/Images/doore.jpg" alt="" />
          </div>
        </div>

        <div className="our-team">
          <h1>Meet The team</h1>
        </div>




        <div className="about-teame">
          <div className="aboute-teame-founder">
            <div className="aboute-teame-founder-img">
              <img src="/Images/per1.jpg" alt=""  className='about-founder'/>
            </div>
            <div className="aboute-teame-founder-text">
              <h3>Hamer</h3>
              <span>Founder</span>
              <p>I am inspiring a trealing about this time.</p>
            </div>
          </div>

           <div className="aboute-teame-founder">
            <div className="aboute-teame-founder-img">
              <img src="/Images/per2.jpg" alt=""  className='about-founder'/>
            </div>
            <div className="aboute-teame-founder-text">
              <h3>Jama</h3>
              <span>chief designer</span>
              <p>"Out designer and hister manewnitor"</p>
            </div>
          </div>

           <div className="aboute-teame-founder">
            <div className="aboute-teame-founder-img">
              <img src="/Images/per4.jpg" alt=""  className='about-founder'/>
            </div>
            <div className="aboute-teame-founder-text">
              <h3>Same</h3>
              <span>lead craftsman</span>
              <p>"Graw inway-jons our lead craftsman"</p>
            </div>
          </div>

           <div className="aboute-teame-founder">
            <div className="aboute-teame-founder-img">
              <img src="/Images/per5.jpg" alt=""  className='about-founder'/>
            </div>
            <div className="aboute-teame-founder-text">
              <h3>Ahmant Rhami</h3>
              <span>Head of customer relation</span>
              <p>" Comeotame your real nations antuse loss"</p>
            </div>
          </div>

           <div className="aboute-teame-founder">
            <div className="aboute-teame-founder-img">
              <img src="/Images/per6.jpg" alt=""  className='about-founder'/>
            </div>
            <div className="aboute-teame-founder-text">
              <h3>Winner</h3>
              <span>Founde</span>
              <p>This ionneawism is formituse mannitemiq.</p>
            </div>
          </div>

           <div className="aboute-teame-founder">
            <div className="aboute-teame-founder-img">
              <img src="/Images/per7.jpg" alt=""  className='about-founder'/>
            </div>
            <div className="aboute-teame-founder-text">
              <h3>Kaniy</h3>
              <span>trust</span>
              <p>"Everamum you touch msw inam"</p>
            </div>
          </div>

           <div className="aboute-teame-founder">
            <div className="aboute-teame-founder-img">
              <img src="/Images/per8.jpg" alt=""  className='about-founder'/>
            </div>
            <div className="aboute-teame-founder-text">
              <h3>Hoja</h3>
              <span>teaf designer</span>
              <p>"Focuss inspiring and thon now will catness."</p>
            </div>
          </div>

           <div className="aboute-teame-founder">
            <div className="aboute-teame-founder-img">
              <img src="/Images/per9.jpg" alt=""  className='about-founder'/>
            </div>
            <div className="aboute-teame-founder-text">
              <h3>Banata</h3>
              <span>Head of customer relation</span>
              <p> "Consemnenity and customers wim.."</p>
            </div>
          </div>
        </div>



        <Footer/>
    </>
  )
}

export default About

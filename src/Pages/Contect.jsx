import React from 'react'
import './Css/Contect.css'
import { IoCall } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";

import { IoIosChatbubbles } from "react-icons/io";
import Header from '../Components/Header';
import Footer from '../Components/Footer';





const Contect = () => {
  return (
    <>
    <Header/>
      <div className="contect-heading">
      <h1>Get in Touch</h1>
      <p>
        Have Question? We're here for you. Drop us a line <br />
        write us an email, or send us a text
      </p>
    </div>

    <div className="contect-main">
      <div className="contect-cont">
        <div className="contect-balck">
          <div className="heading">
            <h2>Contact Information</h2>
            <p>say something to start a live chat!</p>
          </div>
          <div className="contect-phone">
            <p><IoCall/> (9569801987)</p>
            <p><CiMail/> neeraj@gmail.com</p>
            <p><CiLocationOn/> 132 Aligaj lucknow</p>
          </div>
          <div className="contect-i">
            <p><FaWhatsappSquare/></p>
            <p><FaInstagramSquare/></p>
            <p><FaYoutube/></p>
            <p><FaXTwitter/></p>
            
          </div>
        </div>

        <div className="contect-text">
            <div className="lable">
                <div className="name">
            <label >Name</label>
            <input type="text" placeholder="Enert Your Name"/>
            </div>

            <div className="email">
                <label >Email</label>
                <input type="email" placeholder="Enter your Email"/>
            </div>

            
            </div>

             <div className="lable">
                <div className="name">
            <label >Phone Number</label>
            <input type="Number" placeholder="Enert Your Number"/>
            </div>

            <div className="email">
                <label >Product Question</label>
                <input type="text" placeholder=""/>
            </div>

            
            </div>
            <div className="massage">
                <label>Massage</label>
                <input type="text" placeholder="Massage"/>
            </div>
            <button className="send">Send Massage</button>
        </div>
      </div>
    </div>

    {/* map start */}
    <div className='map-outer'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14232.743145842318!2d80.93628303212516!3d26.89759826295829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399957cbf43233f5%3A0x3a22b7c8a77962f0!2sAliganj%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1789719024124!5m2!1sen!2sin" width="600" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" className='map'></iframe>
      
      <div className='contect-multi-icone'>
        <div className='contect-call'>
            <span className='spam-call'><IoCall className='call-cone'/></span>
            <div className='call-content'>
                <h4>phone</h4>
                <span>+91 9569801987</span>
            </div>
        </div>

         <div className='contect-call'>
            <span className='spam-call'><IoIosChatbubbles className='call-cone'/></span>
            <div className='call-content'>
                <h4>Chating</h4>
                <span>10 AM -- 5 PM</span>
            </div>
        </div>
         <div className='contect-call'>
            <span className='spam-call'><CiMail className='call-cone'/></span>
            <div className='call-content'>
                <h4>Email</h4>
                <span>Neeraj@gmail.com</span>
            </div>
        </div>

         <div className='contect-call'>
            <span className='spam-call'><FaMapMarkedAlt className='call-cone'/></span>
            <div className='call-content'>
                <h4>Lucation</h4>
                <span>Aliganj (lucknow)</span>
            </div>
        </div>

         <div className='contect-call'>
            <span className='spam-call'><FaVideo className='call-cone'/></span>
            <div className='call-content'>
                <h4>Video call</h4>
                <span>(Problem Solutions)</span>
            </div>
        </div>
        
      </div>

    </div>
    {/* map end */}





    <Footer/>
    </>
  )
}

export default Contect

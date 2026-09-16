import React from 'react'
import "./Css/Footer.css"
import { NavLink } from 'react-router-dom'
import { IoMdSend } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";




const Footer = () => {
  return (
    <>
      <div className='footer-main-container'>
        <div className="footer-img-log">
            <img src="" alt="" />
        </div>

        <div className="footer-quick-link">
            <h2 className='footer-qu'>Quick Links</h2>
            <ul className='footer-links'>
                <NavLink className={({isActive})=>`item ${isActive? "active" :""}`} to="">Home</NavLink>
                <NavLink className={({isActive})=>`item ${isActive? "active" :""}`} to="">Furniture</NavLink>
                <NavLink className={({isActive})=>`item ${isActive? "active" :""}`} to="">Doors</NavLink>
                <NavLink className={({isActive})=>`item ${isActive? "active" :""}`} to="">Gates</NavLink>
                <NavLink className={({isActive})=>`item ${isActive? "active" :""}`} to="">Chairs</NavLink>
                <NavLink className={({isActive})=>`item ${isActive? "active" :""}`} to="">AboutUs</NavLink>
                <NavLink className={({isActive})=>`item ${isActive? "active" :""}`} to="">Contact</NavLink>
                
            </ul>
        </div>
        <div className="footer-cutomer-soport">
            <h2 className='footer-he'>Customer Support </h2>
            <ul className='footer-link2'>
                 <NavLink className={({isActive})=>`item ${isActive? "active" :""}`} to="">FAQs</NavLink>
                <NavLink className={({isActive})=>`item ${isActive? "active" :""}`} to="">Shopping Policy</NavLink>
                <NavLink className={({isActive})=>`item ${isActive? "active" :""}`} to="">Return & Refund</NavLink>
                <NavLink className={({isActive})=>`item ${isActive? "active" :""}`} to="">Tearms & Condition</NavLink>
                <NavLink className={({isActive})=>`item ${isActive? "active" :""}`} to="">Privacy Policy</NavLink>
            </ul>
        </div>
        <div className="footer-stey-conect">
          <h2 className='footer-stey'>Stay Connected</h2>
          <span className='footer-content-text'>Join our newsietter for latest offers and update </span>
          <div className='footer-send-email'>
            <input type="email" placeholder='Enter Your email address' />
            <div className='footer-send-icone'><IoMdSend className='send-icone'/> </div>
          </div>
          <div className='footer-multi-icone'>
            <span><FaFacebook className='footer-main-icone'/></span>
            <span><FaInstagramSquare className='footer-main-icone2'/></span>
            <span><FaYoutube className='footer-main-icone3'/></span>
            <span><FaSquareXTwitter className='footer-main-icone4'/></span>
          </div>
        </div>

      </div>
    </>
  )
}

export default Footer

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
            <img className="footer-logo" src="/Images/logowidth.png" alt="" />
        </div>

        <div className="footer-quick-link">
            <h3 className='footer-qu'>Quick Links</h3>
            <ul className='footer-links'>
                <li><NavLink end className={({isActive})=>`item ${isActive? "active" :""}`} to="/">Home</NavLink></li>
                <li><NavLink className={({isActive})=>`item ${isActive? "active" :""}`} to="/furniture">Furniture</NavLink></li>
                <li><NavLink className={({isActive})=>`item ${isActive? "active" :""}`} to="/products">Doors</NavLink></li>
                <li><NavLink className={({isActive})=>`item ${isActive? "active" :""}`} to="/steel">Gates</NavLink></li>
                <li><NavLink className={({isActive})=>`item ${isActive? "active" :""}`} to="/furniture">Chairs</NavLink></li>
                <li><NavLink className={({isActive})=>`item ${isActive? "active" :""}`} to="/about">About Us</NavLink></li>
                <li><NavLink className={({isActive})=>`item ${isActive? "active" :""}`} to="/contact">Contact</NavLink></li>
            </ul>
        </div>
        <div className="footer-cutomer-soport">
            <h3 className='footer-he'>Customer Support </h3>
            <ul className='footer-link2'>
                <li><NavLink className={({isActive})=>`item ${isActive? "active" :""}`} to="/contact">FAQs</NavLink></li>
                <li><NavLink className={({isActive})=>`item ${isActive? "active" :""}`} to="/services">Shopping Policy</NavLink></li>
                <li><NavLink className={({isActive})=>`item ${isActive? "active" :""}`} to="/contact">Return &amp; Refund</NavLink></li>
                <li><NavLink className={({isActive})=>`item ${isActive? "active" :""}`} to="/services">Terms &amp; Conditions</NavLink></li>
                <li><NavLink className={({isActive})=>`item ${isActive? "active" :""}`} to="/about">Privacy Policy</NavLink></li>
            </ul>
        </div>
        <div className="footer-stey-conect">
          <h3 className='footer-stey'>Stay Connected</h3>
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

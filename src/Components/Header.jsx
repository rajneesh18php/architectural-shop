import './Css/Header.css'
import { NavLink } from 'react-router-dom'
import { IoMdArrowDropdown } from "react-icons/io";


const Header = () => {
  return (
    <>
          
      <div className="header-outer-main">
        <img className='header-logo' src="/Images/vishlogo.png" alt="" />
        <ul className='header-main-ul'>
          <li> <NavLink className={({ isActive }) =>`item ${isActive ? 'active' : ''}`} to="/">Home<IoMdArrowDropdown /></NavLink>
          
          <ul className='header-sub-ul'>
            <li> <NavLink className={({ isActive }) =>`item ${isActive ? 'active' : ''}`} to="/products">Products</NavLink></li>
            <li> <NavLink className={({ isActive }) =>`item ${isActive ? 'active' : ''}`} to="/steel">Premium Steel</NavLink></li>
            <li> <NavLink className={({ isActive }) =>`item ${isActive ? 'active' : ''}`} to="/#featured-products">Featured products</NavLink></li>
            <li> <NavLink className={({ isActive }) =>`item ${isActive ? 'active' : ''}`} to="/contact">Get a quote</NavLink></li>
            
            </ul>
          </li>






          <li> <NavLink className={({ isActive }) =>`item ${isActive ? 'active' : ''}`} to="/about">About<IoMdArrowDropdown /></NavLink>
            <ul className='header-sub-ul-2'>
            <li> <NavLink className={({ isActive }) =>`item ${isActive ? 'active' : ''}`} to="/about#company-profile">Company Profile</NavLink></li>
            <li> <NavLink className={({ isActive }) =>`item ${isActive ? 'active' : ''}`} to="/about#experience">Experience</NavLink></li>
            <li> <NavLink className={({ isActive }) =>`item ${isActive ? 'active' : ''}`} to="/about#customer-satisfaction">Customer Satisfaction</NavLink></li>
            </ul>
          </li>




          <li> <NavLink className={({ isActive }) =>`item ${isActive ? 'active' : ''}`} to="/products">Products<IoMdArrowDropdown /></NavLink>
            <ul className='header-sub-ul-3'>
            <li> <NavLink className={({ isActive }) =>`item ${isActive ? 'active' : ''}`} to="/steel">Steel Gates</NavLink></li>
            <li> <NavLink className={({ isActive }) =>`item ${isActive ? 'active' : ''}`} to="/furniture">Furniture</NavLink></li>
            <li> <NavLink className={({ isActive }) =>`item ${isActive ? 'active' : ''}`} to="/steeless">Stainless Steel Gates</NavLink></li>      
            <li> <NavLink className={({ isActive }) =>`item ${isActive ? 'active' : ''}`} to="/realing">Staircase Railing</NavLink></li>
            <li> <NavLink className={({ isActive }) =>`item ${isActive ? 'active' : ''}`} to="/balcony">Balcony Railing</NavLink></li>           
            <li> <NavLink className={({ isActive }) =>`item ${isActive ? 'active' : ''}`} to="/fabrication">MS/Steel Fabrication</NavLink></li>
            </ul>
          </li>




          <li> <NavLink className={({ isActive }) =>`item ${isActive ? 'active' : ''}`} to="/gallery">Gallery<IoMdArrowDropdown /></NavLink>
          <ul className='header-sub-ul-4'>
            <li> <NavLink className={({ isActive }) =>`item ${isActive ? 'active' : ''}`} to="/gallery/completed-projects">Completed Projects</NavLink></li>
            <li> <NavLink className={({ isActive }) =>`item ${isActive ? 'active' : ''}`} to="/gallery/railing-designs">Railing Designs</NavLink></li>
            <li> <NavLink className={({ isActive }) =>`item ${isActive ? 'active' : ''}`} to="/gallery/aluminium-work">Aluminium work</NavLink></li>
            <li> <NavLink className={({ isActive }) =>`item ${isActive ? 'active' : ''}`} to="/gallery/before-after">Before/After Photos</NavLink></li>
            
            
              </ul>
          </li>




          <li> <NavLink className={({ isActive }) =>`item ${isActive ? 'active' : ''}`} to="/contact">Contact</NavLink></li>
          <li> <NavLink className={({ isActive }) =>`item ${isActive ? 'active' : ''}`} to="/services">Services</NavLink></li>
        </ul>
      </div>
    </>
  )}
export default Header

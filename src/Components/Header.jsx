import './Css/Header.css'
import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IoMdArrowDropdown } from "react-icons/io";
import { FiMenu, FiX } from "react-icons/fi";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuToggleRef = useRef(null)
  const drawerCloseRef = useRef(null)

  useEffect(() => {
    const closeOnBrowserNavigation = () => setMenuOpen(false)
    window.addEventListener('popstate', closeOnBrowserNavigation)

    return () => window.removeEventListener('popstate', closeOnBrowserNavigation)
  }, [])

  useEffect(() => {
    if (!menuOpen) return undefined

    const toggleButton = menuToggleRef.current
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', closeOnEscape)
    drawerCloseRef.current?.focus()

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', closeOnEscape)
      toggleButton?.focus()
    }
  }, [menuOpen])

  const closeMenuOnLinkClick = (event) => {
    if (event.target.closest('a')) setMenuOpen(false)
  }

  return (
    <>
      <div className="header-outer-main">
        <NavLink className="header-brand" to="/" aria-label="Architectural Shop home">
          <img className='header-logo' src="/Images/vishlogo.png" alt="Architectural Shop" />
        </NavLink>
        <button
          ref={menuToggleRef}
          className="header-menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
        </button>
        <button
          className={`header-menu-overlay ${menuOpen ? 'is-visible' : ''}`}
          type="button"
          aria-label="Close navigation menu"
          tabIndex={menuOpen ? 0 : -1}
          onClick={() => setMenuOpen(false)}
        />
        <nav
          className={`header-navigation ${menuOpen ? 'is-open' : ''}`}
          id="primary-navigation"
          aria-label="Main navigation"
          onClick={closeMenuOnLinkClick}
        >
          <div className="header-drawer-heading">
            <span>Explore</span>
            <button
              ref={drawerCloseRef}
              className="header-drawer-close"
              type="button"
              aria-label="Close navigation menu"
              onClick={() => setMenuOpen(false)}
            >
              <FiX aria-hidden="true" />
            </button>
          </div>
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
            <li> <NavLink className={({ isActive }) =>`item ${isActive ? 'active' : ''}`} to="/company-profile">Company Profile</NavLink></li>
            <li> <NavLink className={({ isActive }) =>`item ${isActive ? 'active' : ''}`} to="/about#experience">Experience</NavLink></li>
            <li> <NavLink className={({ isActive }) =>`item ${isActive ? 'active' : ''}`} to="/customer-satisfaction">Customer Satisfaction</NavLink></li>
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
        </nav>
      </div>
    </>
  )}
export default Header

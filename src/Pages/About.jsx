import './Css/About.css'
import { Link } from 'react-router-dom'
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
      <Header />
      <main className="about-page">
        <section className="about-img" id="company-profile">
          <div className="about-content-story">
            <div className="about-text">
              <span className="about-eyebrow">A LITTLE ABOUT US</span>
              <h1 className="about-burty">Thoughtful design. Craft made to last.</h1>
              <p>We bring furniture and architectural metalwork together with one simple aim: help make the spaces you live in feel considered, useful and truly yours.</p>
              <div className="about-hero-actions">
                <Link className="about-btn" to="/about#our-values">What guides us <FaArrowRight aria-hidden="true" /></Link>
                <Link className="about-hero-secondary" to="/contact">Talk with our team</Link>
              </div>
            </div>
          </div>
          <span className="about-hero-caption">MADE FOR EVERYDAY LIVING</span>
        </section>

        <section className="about-intro" aria-labelledby="about-intro-title">
          <p className="about-eyebrow">OUR APPROACH</p>
          <h2 id="about-intro-title">The details matter.<br />So does how they come together.</h2>
          <p>From the first idea to the finishing touch, we focus on good materials, practical design and a process that keeps your needs at the centre.</p>
        </section>

        <section className="about-multi-card" id="our-values">
          <div className="about-card-1">
            <p className="about-eyebrow">WHAT WE BELIEVE</p>
            <h2 className="about-our">Good work starts with good values.</h2>
            <div className="about-4card">
              <article className="avout-bleave1">
                <GiMissileLauncher className="mission" aria-hidden="true" />
                <h3>Purposeful design</h3>
                <p className="spam-text">Every choice should work beautifully in your space.</p>
              </article>
              <article className="avout-bleave2">
                <MdHighQuality className="mission" aria-hidden="true" />
                <h3>Careful craft</h3>
                <p className="spam-text">Materials and finishes selected for everyday use.</p>
              </article>
              <article className="avout-bleave3">
                <FaHandsHelping className="mission" aria-hidden="true" />
                <h3>Made for you</h3>
                <p className="spam-text">Your space and preferences shape the final details.</p>
              </article>
              <article className="avout-bleave4">
                <FaRegHeart className="mission" aria-hidden="true" />
                <h3>Trust, always</h3>
                <p className="spam-text">Clear conversations and support along the way.</p>
              </article>
            </div>
          </div>
          <div className="about-card-2">
            <img className="about-content-img" src="/Images/doore.jpg" alt="Crafted door detail in a finished interior" loading="lazy" />
          </div>
        </section>

        <section className="about-experience" id="experience">
          <div className="about-experience-heading">
            <p className="about-eyebrow">THE WAY WE WORK</p>
            <h2>From first conversation to final detail.</h2>
            <p>Thoughtful work is a collaboration. We make room for your ideas, then bring the right people and craft to the process.</p>
          </div>
          <ol className="about-experience-steps">
            <li><span>01</span><div><h3>We listen</h3><p>We start with what matters to you, your space and your everyday needs.</p></div></li>
            <li><span>02</span><div><h3>We plan together</h3><p>We shape the design, materials and finish around the brief.</p></div></li>
            <li><span>03</span><div><h3>We make with care</h3><p>We focus on the small details that make a piece feel complete.</p></div></li>
          </ol>
        </section>

        <section className="about-satisfaction" id="customer-satisfaction">
          <div className="about-satisfaction-mark"><FaRegHeart aria-hidden="true" /></div>
          <p className="about-eyebrow">YOUR SPACE, YOUR STORY</p>
          <h2>Good service means feeling heard at every step.</h2>
          <p>We want you to feel confident in the choices you make, from the first question to the finishing detail. Tell us what you are planning and we will help you find a good place to start.</p>
          <Link className="about-btn" to="/contact">Get in touch <FaArrowRight aria-hidden="true" /></Link>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default About

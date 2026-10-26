import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaCheck, FaCompass, FaHammer, FaRulerCombined, FaWrench } from 'react-icons/fa'
import './Css/Servies.css'

const services = [
  {
    title: 'Custom steel fabrication',
    category: 'Metalwork',
    description: 'Made-to-measure steelwork, shaped around your plans, space and finish preferences.',
    image: '/Images/s1.jpg',
    imageAlt: 'Steel fabrication detail',
    icon: <FaHammer aria-hidden="true" />,
    link: '/fabrication',
    linkLabel: 'Explore fabrication',
  },
  {
    title: 'Railings & balustrades',
    category: 'Metalwork',
    description: 'Considered railing designs for stairs, balconies and terraces, built for everyday use.',
    image: '/Images/r1.jpg',
    imageAlt: 'Contemporary railing design',
    icon: <FaRulerCombined aria-hidden="true" />,
    link: '/realing',
    linkLabel: 'Explore railings',
  },
  {
    title: 'Bespoke furniture',
    category: 'Interiors',
    description: 'Furniture with practical proportions and a finish selected to suit your interior.',
    image: '/Images/for1.jpg',
    imageAlt: 'Made-to-order furniture',
    icon: <FaCompass aria-hidden="true" />,
    link: '/furniture',
    linkLabel: 'Explore furniture',
  },
  {
    title: 'Balcony solutions',
    category: 'Exterior',
    description: 'Thoughtful balcony elements that bring privacy, safety and a clean architectural line.',
    image: '/Images/b1.jpg',
    imageAlt: 'Balcony design detail',
    icon: <FaRulerCombined aria-hidden="true" />,
    link: '/balcony',
    linkLabel: 'Explore balconies',
  },
  {
    title: 'Steel doors & windows',
    category: 'Metalwork',
    description: 'Durable steel doors and window systems, tailored to complement the building.',
    image: '/Images/st1.webp',
    imageAlt: 'Steel door and window work',
    icon: <FaWrench aria-hidden="true" />,
    link: '/steel',
    linkLabel: 'Explore steelwork',
  },
  {
    title: 'Stainless steel details',
    category: 'Exterior',
    description: 'Clean-lined stainless steel components for a refined, hard-wearing finish.',
    image: '/Images/s2.jpg',
    imageAlt: 'Stainless steel detail',
    icon: <FaHammer aria-hidden="true" />,
    link: '/steeless',
    linkLabel: 'Explore stainless steel',
  },
]

const filters = ['All services', 'Metalwork', 'Interiors', 'Exterior']

const Servies = () => {
  const [activeFilter, setActiveFilter] = useState('All services')
  const visibleServices = activeFilter === 'All services'
    ? services
    : services.filter((service) => service.category === activeFilter)

  return (
    <>
      <Header />
      <main className="services-page">
        <section className="services-hero">
          <div className="services-hero-copy">
            <span className="services-eyebrow">DESIGNED AROUND YOUR SPACE</span>
            <h1>Good spaces start with the right details.</h1>
            <p>From custom metalwork to made-to-order furniture, we bring thoughtful design and dependable craftsmanship to your project.</p>
            <div className="services-hero-actions">
              <a className="services-button services-button-primary" href="#services-list">Explore services <FaArrowRight aria-hidden="true" /></a>
              <Link className="services-text-link" to="/contact">Talk about your project</Link>
            </div>
            <div className="services-hero-note"><FaCheck aria-hidden="true" /> Built to your requirements, finished with care</div>
          </div>
          <div className="services-hero-image" role="img" aria-label="Crafted architectural furniture in a warm interior">
            <span className="services-image-caption">FORM, FUNCTION, FINISH</span>
          </div>
          <div className="services-hero-index" aria-hidden="true">01 / 03</div>
        </section>

        <section className="services-intro" aria-label="Our approach">
          <p className="services-eyebrow">WHAT WE DO</p>
          <h2>Made for the way<br />you live and work.</h2>
          <p>Every project is different. We help you find the right materials, proportions and finish, then take care of the details from first conversation to final fit.</p>
          <div className="services-intro-stats">
            <div><strong>01</strong><span>Listen & plan</span></div>
            <div><strong>02</strong><span>Make with care</span></div>
            <div><strong>03</strong><span>Finish together</span></div>
          </div>
        </section>

        <section className="services-catalog" id="services-list">
          <div className="services-section-heading">
            <div>
              <p className="services-eyebrow">OUR CAPABILITIES</p>
              <h2>Find your service</h2>
            </div>
            <p>Choose a category to explore the work that fits your project.</p>
          </div>

          <div className="services-filters" role="group" aria-label="Filter services by category">
            {filters.map((filter) => (
              <button
                className={activeFilter === filter ? 'services-filter is-active' : 'services-filter'}
                key={filter}
                type="button"
                aria-pressed={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
                <span>{filter === 'All services' ? services.length : services.filter((service) => service.category === filter).length}</span>
              </button>
            ))}
          </div>

          <div className="services-grid" aria-live="polite">
            {visibleServices.map((service, index) => (
              <article className="service-card" key={service.title} style={{ '--service-index': index }}>
                <Link className="service-card-image" to={service.link} aria-label={service.linkLabel}>
                  <img src={service.image} alt={service.imageAlt} loading="lazy" />
                  <span className="service-card-icon">{service.icon}</span>
                  <span className="service-card-category">{service.category}</span>
                </Link>
                <div className="service-card-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link className="service-card-link" to={service.link}>{service.linkLabel} <FaArrowRight aria-hidden="true" /></Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="services-process">
          <div className="services-process-heading">
            <p className="services-eyebrow">A CLEARER WAY TO BUILD</p>
            <h2>From first sketch<br />to final detail.</h2>
            <Link className="services-button services-button-light" to="/contact">Start a conversation <FaArrowRight aria-hidden="true" /></Link>
          </div>
          <ol className="services-steps">
            <li><span>01</span><div><h3>Tell us what you have in mind</h3><p>Share your idea, inspiration or measurements. We will help shape the brief.</p></div></li>
            <li><span>02</span><div><h3>Agree the details</h3><p>Choose the design, materials and finish that make sense for your space.</p></div></li>
            <li><span>03</span><div><h3>We make it happen</h3><p>Your piece is crafted with care, with communication along the way.</p></div></li>
          </ol>
        </section>

        <section className="services-contact-band">
          <div><p className="services-eyebrow">HAVE A PROJECT IN MIND?</p><h2>Let’s make something that fits.</h2></div>
          <Link className="services-button services-button-primary" to="/contact">Get in touch <FaArrowRight aria-hidden="true" /></Link>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Servies

import './Css/Home.css'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { SiSecurityscorecard } from "react-icons/si";
import { MdSupportAgent } from "react-icons/md";
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Carousel from 'react-bootstrap/Carousel';


const Home = () => {
  const categories = [
    { title: 'Steel gates', detail: 'A strong first impression', image: '/Images/get1.jpg', link: '/steel' },
    { title: 'Made-to-fit furniture', detail: 'Comfort with character', image: '/Images/for1.jpg', link: '/furniture' },
    { title: 'Stainless steel', detail: 'Clean lines, lasting finish', image: '/Images/st1.webp', link: '/steeless' },
    { title: 'Railings', detail: 'Details that define a space', image: '/Images/r1.jpg', link: '/realing' },
    { title: 'Balcony designs', detail: 'Open-air living, refined', image: '/Images/b1.jpg', link: '/balcony' },
    { title: 'Custom fabrication', detail: 'Built around your plans', image: '/Images/s1.jpg', link: '/fabrication' },
  ]

  const products = [
    { title: 'Designer main gate', image: '/Images/get1.jpg', price: '32,999', oldPrice: '45,999', link: '/steel', label: 'STEELWORK' },
    { title: 'Luxury dining chair', image: '/Images/get3.jpg', price: '8,999', oldPrice: '15,999', link: '/furniture', label: 'FURNITURE' },
    { title: 'Modern sofa set', image: '/Images/get4.jpg', price: '45,999', oldPrice: '52,999', link: '/furniture', label: 'FURNITURE' },
    { title: 'Premium wooden door', image: '/Images/get2.jpg', price: '18,999', oldPrice: '24,999', link: '/products', label: 'DOORS' },
  ]

  return (
    <>
      <Header />
      <main className="home-page">
        <section className="corousel-start" aria-label="Featured collections">
          <Carousel interval={6500} pause="hover">
            <Carousel.Item>
              <img src="/Images/get1.jpg" alt="Decorative steel entrance gate" />
              <Carousel.Caption>
                <span className="home-hero-kicker">MADE FOR THE WAY YOU LIVE</span>
                <h3>A welcome worth coming home to.</h3>
                <p>Thoughtful doors, gates and details that bring security and style together.</p>
                <Link className="home-hero-cta" to="/steel">Explore steelwork <FaArrowRight aria-hidden="true" /></Link>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src="/Images/furntutrb9.png" alt="Warm, contemporary furniture and interiors" />
              <Carousel.Caption>
                <span className="home-hero-kicker">FORM MEETS FUNCTION</span>
                <h3>Spaces that feel like yours.</h3>
                <p>Furniture and finishes selected for everyday living, with a little more character.</p>
                <Link className="home-hero-cta" to="/furniture">Discover furniture <FaArrowRight aria-hidden="true" /></Link>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src="/Images/r1.webp" alt="Detailed contemporary staircase railing" />
              <Carousel.Caption>
                <span className="home-hero-kicker">CRAFTED WITH CARE</span>
                <h3>Good design lives in the details.</h3>
                <p>Explore considered railing and metalwork for the spaces you use every day.</p>
                <Link className="home-hero-cta" to="/realing">View railing designs <FaArrowRight aria-hidden="true" /></Link>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </section>

        <section className="home-category-section" aria-labelledby="home-category-title">
          <div className="cotegory-tittle">
            <span className="cotegor-shop">A COLLECTION FOR EVERY SPACE</span>
            <h1 id="home-category-title">Find the right fit for your home.</h1>
          </div>
          <div className="home-category-grid">
            {categories.map((category, index) => (
              <Link className="home-category-card" key={category.title} to={category.link} style={{ '--home-index': index }}>
                <img src={category.image} alt="" loading="lazy" />
                <span className="home-category-overlay">
                  <span className="home-category-detail">{category.detail}</span>
                  <span className="home-category-title">{category.title}</span>
                </span>
                <span className="home-category-arrow" aria-hidden="true"><FaArrowRight /></span>
              </Link>
            ))}
          </div>
        </section>

        <section className="premium-cecurity" aria-label="Shopping benefits">
          <div className="security-icone-text">
            <span className="security-icone"><MdOutlineSecurity /></span>
            <div className="security-text"><h3>Premium quality</h3><span className="text">Made with care</span></div>
          </div>
          <div className="security-icone-text">
            <span className="security-icone"><TbTruckDelivery /></span>
            <div className="security-text"><h3>Safe delivery</h3><span className="text">Across India</span></div>
          </div>
          <div className="security-icone-text">
            <span className="security-icone"><SiSecurityscorecard /></span>
            <div className="security-text"><h3>Secure payment</h3><span className="text">Trusted options</span></div>
          </div>
          <div className="security-icone-text">
            <span className="security-icone"><MdSupportAgent /></span>
            <div className="security-text"><h3>Dedicated support</h3><span className="text">Here when you need us</span></div>
          </div>
        </section>

        <section className="home-featured-section" id="featured-products" aria-labelledby="home-featured-title">
          <div className="cards-featured">
            <span className="our-crt">SELECTED FOR YOU</span>
            <h2 id="home-featured-title">Popular picks, lasting pieces.</h2>
          </div>
          <div className="home-product-grid">
            {products.map((product, index) => (
              <article className="home-product-card" key={product.title} style={{ '--home-index': index }}>
                <Link className="home-product-image" to={product.link} aria-label={`Explore ${product.title}`}>
                  <img src={product.image} alt={product.title} loading="lazy" />
                  <span>{product.label}</span>
                </Link>
                <div className="home-product-info">
                  <h3>{product.title}</h3>
                  <div className="home-product-price"><strong>₹{product.price}</strong><del>₹{product.oldPrice}</del></div>
                  <Link className="home-product-link" to={product.link}>Explore product <FaArrowRight aria-hidden="true" /></Link>
                </div>
              </article>
            ))}
          </div>
          <div className="home-featured-footer"><Link to="/products">View all products <FaArrowRight aria-hidden="true" /></Link></div>
        </section>

        <section className="home-story-band" id="company-story">
          <div className="home-story-image"><img src="/Images/doore.jpg" alt="Crafted architectural door detail" loading="lazy" /></div>
          <div className="home-story-copy">
            <span className="our-crt">MADE WITH INTENTION</span>
            <h2>Good spaces begin with thoughtful choices.</h2>
            <p>We bring design, craftsmanship and practical detail together to help make your space feel more like home.</p>
            <Link to="/about">Get to know us <FaArrowRight aria-hidden="true" /></Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Home

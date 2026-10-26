import { useEffect, useState } from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'
import { FaArrowRight, FaTimes } from 'react-icons/fa'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import './Css/Gallery.css'

const categories = [
  { label: 'All work', slug: '', description: 'A selection of the details, materials and spaces we have brought together.' },
  { label: 'Completed projects', slug: 'completed-projects', description: 'Finished spaces shaped around their people, purpose and place.' },
  { label: 'Railing designs', slug: 'railing-designs', description: 'A closer look at railing forms, finishes and architectural details.' },
  { label: 'Aluminium work', slug: 'aluminium-work', description: 'Clean-lined aluminium work, made to complement the architecture.' },
  { label: 'Before / after', slug: 'before-after', description: 'Project transformations, from the starting point to the finished detail.' },
]

const galleryItems = [
  { title: 'A considered living room', category: 'completed-projects', image: '/Images/g1.webp' },
  { title: 'Warm, modern interiors', category: 'completed-projects', image: '/Images/g2.webp' },
  { title: 'A quiet place to unwind', category: 'completed-projects', image: '/Images/g3.webp' },
  { title: 'Made for gathering', category: 'completed-projects', image: '/Images/g4.webp' },
  { title: 'A softer approach to modern living', category: 'completed-projects', image: '/Images/g5.webp' },
  { title: 'Crafted stair railing', category: 'railing-designs', image: '/Images/r1.webp' },
  { title: 'Balcony railing detail', category: 'railing-designs', image: '/Images/r2.webp' },
  { title: 'A clean architectural line', category: 'railing-designs', image: '/Images/r3.webp' },
  { title: 'Traditional metalwork', category: 'railing-designs', image: '/Images/r4.webp' },
  { title: 'Contemporary balustrade', category: 'railing-designs', image: '/Images/r5.jpg' },
  { title: 'An open, light-filled room', category: 'aluminium-work', image: '/Images/fa2.webp' },
  { title: 'A tailored interior detail', category: 'aluminium-work', image: '/Images/fa3.jpg' },
  { title: 'Balanced proportions', category: 'aluminium-work', image: '/Images/fa4.jpg' },
  { title: 'A fresh finish', category: 'aluminium-work', image: '/Images/fa5.jpg' },
  { title: 'A brighter outlook', category: 'aluminium-work', image: '/Images/fa6.jpg' },
  { title: 'Before and after: balcony detail', category: 'before-after', image: '/Images/b1.jpg' },
  { title: 'Before and after: exterior finish', category: 'before-after', image: '/Images/b2.jpg' },
  { title: 'Before and after: a new perspective', category: 'before-after', image: '/Images/b3.jpg' },
  { title: 'Before and after: refined lines', category: 'before-after', image: '/Images/b4.jpg' },
  { title: 'Before and after: finished in steel', category: 'before-after', image: '/Images/b5.webp' },
]

const Gallery = () => {
  const { category: categorySlug } = useParams()
  const [selectedImage, setSelectedImage] = useState(null)
  const activeCategory = categories.find((category) => category.slug === (categorySlug || '')) || categories[0]
  const visibleItems = activeCategory.slug
    ? galleryItems.filter((item) => item.category === activeCategory.slug)
    : galleryItems

  useEffect(() => {
    if (!selectedImage) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedImage(null)
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage])

  return (
    <>
      <Header />
      <main className="gallery-page">
        <section className="gallery-hero">
          <div className="gallery-hero-copy">
            <p className="gallery-eyebrow">OUR WORK, IN DETAIL</p>
            <h1>Built with purpose.<br /><span>Made to belong.</span></h1>
            <p>Explore a collection of finished spaces, considered materials and the small details that make a project feel complete.</p>
            <a className="gallery-hero-link" href="#gallery-collection">Explore the gallery <FaArrowRight aria-hidden="true" /></a>
          </div>
          <div className="gallery-hero-visual">
            <img src="/Images/g1.webp" alt="Completed contemporary living space" />
            <span className="gallery-hero-label">A HOME, MADE PERSONAL</span>
          </div>
          <span className="gallery-hero-number" aria-hidden="true">01 / 05</span>
        </section>

        <section className="gallery-collection" id="gallery-collection">
          <div className="gallery-heading-row">
            <div>
              <p className="gallery-eyebrow">THE COLLECTION</p>
              <h2>{activeCategory.slug ? activeCategory.label : 'Spaces & details'}</h2>
            </div>
            <p>{activeCategory.description}</p>
          </div>

          <nav className="gallery-category-nav" aria-label="Gallery categories">
            {categories.map((category) => (
              <NavLink
                className={({ isActive }) => `gallery-category-link${isActive ? ' is-active' : ''}`}
                end={!category.slug}
                key={category.slug || 'all'}
                to={category.slug ? `/gallery/${category.slug}` : '/gallery'}
              >
                {category.label}
                <span>{category.slug ? galleryItems.filter((item) => item.category === category.slug).length : galleryItems.length}</span>
              </NavLink>
            ))}
          </nav>

          <div className="gallery-grid" aria-live="polite">
            {visibleItems.map((item, index) => (
              <button
                className="gallery-tile"
                key={item.title}
                onClick={() => setSelectedImage(item)}
                style={{ '--gallery-index': index }}
                type="button"
                aria-label={`View ${item.title}`}
              >
                <img src={item.image} alt={item.title} loading="lazy" />
                <span className="gallery-tile-overlay">
                  <span>{item.title}</span>
                  <span className="gallery-tile-open" aria-hidden="true"><FaArrowRight /></span>
                </span>
              </button>
            ))}
          </div>
        </section>

        <section className="gallery-contact">
          <div>
            <p className="gallery-eyebrow">YOUR IDEA COULD BE NEXT</p>
            <h2>Let’s shape something<br />made for you.</h2>
          </div>
          <Link className="gallery-contact-link" to="/contact">Start a conversation <FaArrowRight aria-hidden="true" /></Link>
        </section>
      </main>

      {selectedImage && (
        <div className="gallery-lightbox" onClick={() => setSelectedImage(null)} role="presentation">
          <section className="gallery-lightbox-content" aria-label={selectedImage.title} aria-modal="true" onClick={(event) => event.stopPropagation()} role="dialog">
            <button className="gallery-lightbox-close" onClick={() => setSelectedImage(null)} type="button" aria-label="Close image"><FaTimes /></button>
            <img src={selectedImage.image} alt={selectedImage.title} />
            <p>{selectedImage.title}</p>
          </section>
        </div>
      )}
      <Footer />
    </>
  )
}

export default Gallery

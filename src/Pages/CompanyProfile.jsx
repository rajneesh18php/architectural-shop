import { Link } from 'react-router-dom'
import { FaArrowRight, FaHandsHelping, FaRegHeart } from 'react-icons/fa'
import { MdHighQuality } from 'react-icons/md'
import { GiMissileLauncher } from 'react-icons/gi'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import './Css/CompanyProfile.css'

const companyValues = [
  {
    icon: <GiMissileLauncher aria-hidden="true" />,
    title: 'Purposeful design',
    description: 'We begin with your space and the way you want to use it.',
  },
  {
    icon: <MdHighQuality aria-hidden="true" />,
    title: 'Careful craft',
    description: 'We pay attention to materials, construction and finishing details.',
  },
  {
    icon: <FaHandsHelping aria-hidden="true" />,
    title: 'Made together',
    description: 'Your ideas and preferences stay part of the conversation.',
  },
  {
    icon: <FaRegHeart aria-hidden="true" />,
    title: 'Lasting care',
    description: 'We aim to make the process clear, considered and personal.',
  },
]

const CompanyProfile = () => (
  <>
    <Header />
    <main className="company-profile-page">
      <section className="company-profile-hero">
        <div className="company-profile-hero-copy">
          <p className="company-profile-eyebrow">COMPANY PROFILE</p>
          <h1>Thoughtful design, shaped around your space.</h1>
          <p>
            We bring furniture and architectural metalwork together to help
            create spaces that feel considered, useful and truly yours.
          </p>
          <Link className="company-profile-button" to="/contact">
            Start a conversation <FaArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="company-profile-intro">
        <div>
          <p className="company-profile-eyebrow">WHO WE ARE</p>
          <h2>Good work starts by understanding what matters to you.</h2>
        </div>
        <p>
          From furniture to gates and railings, our work is guided by practical
          design, careful making and close attention to the details that bring
          a project together. We listen first, then help you explore the right
          materials, design and finish for your needs.
        </p>
      </section>

      <section className="company-profile-values">
        <div className="company-profile-section-heading">
          <p className="company-profile-eyebrow">WHAT GUIDES US</p>
          <h2>Made with purpose. Finished with care.</h2>
        </div>
        <div className="company-profile-value-grid">
          {companyValues.map((value) => (
            <article className="company-profile-value-card" key={value.title}>
              <span className="company-profile-value-icon">{value.icon}</span>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="company-profile-feature">
        <div className="company-profile-feature-image">
          <img
            src="/Images/doore.jpg"
            alt="Architectural door detail highlighting material and craftsmanship"
            loading="lazy"
          />
        </div>
        <div className="company-profile-feature-copy">
          <p className="company-profile-eyebrow">OUR APPROACH</p>
          <h2>From the first idea to the finishing touch.</h2>
          <p>
            Every project is different. We work with you to understand the
            brief, plan the details and create a result that belongs in your
            space.
          </p>
          <Link className="company-profile-text-link" to="/customer-satisfaction">
            How we support our customers <FaArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
    <Footer />
  </>
)

export default CompanyProfile

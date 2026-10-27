import { Link } from 'react-router-dom'
import { FaArrowRight, FaComments, FaRegHeart } from 'react-icons/fa'
import { MdHighQuality } from 'react-icons/md'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import './Css/CustomerSatisfaction.css'

const customerCareSteps = [
  {
    number: '01',
    icon: <FaComments aria-hidden="true" />,
    title: 'We listen',
    description:
      'We start with your questions, ideas and the needs of your space.',
  },
  {
    number: '02',
    icon: <MdHighQuality aria-hidden="true" />,
    title: 'We plan clearly',
    description:
      'We discuss design choices, materials and finishes before moving ahead.',
  },
  {
    number: '03',
    icon: <FaRegHeart aria-hidden="true" />,
    title: 'We stay connected',
    description:
      'We keep communication open as your project moves from idea to detail.',
  },
]

const CustomerSatisfaction = () => (
  <>
    <Header />
    <main className="customer-satisfaction-page">
      <section className="customer-satisfaction-hero">
        <div className="customer-satisfaction-hero-copy">
          <p className="customer-satisfaction-eyebrow">CUSTOMER SATISFACTION</p>
          <h1>Your space, your story. We are here to help.</h1>
          <p>
            A good experience begins with feeling heard. We make time to
            understand what you need and help you take the next step with
            confidence.
          </p>
          <Link className="customer-satisfaction-button" to="/contact">
            Talk with our team <FaArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="customer-satisfaction-intro">
        <span className="customer-satisfaction-intro-icon">
          <FaRegHeart aria-hidden="true" />
        </span>
        <div>
          <p className="customer-satisfaction-eyebrow">A PERSONAL APPROACH</p>
          <h2>Good service means feeling supported at every step.</h2>
          <p>
            Whether you are choosing a piece of furniture or planning
            architectural metalwork, we want the process to feel straightforward.
            Share your brief with us and we will help you find a good place to
            start.
          </p>
        </div>
      </section>

      <section className="customer-satisfaction-process">
        <div className="customer-satisfaction-section-heading">
          <p className="customer-satisfaction-eyebrow">WHAT YOU CAN EXPECT</p>
          <h2>Clear conversations, careful work.</h2>
        </div>
        <div className="customer-satisfaction-step-grid">
          {customerCareSteps.map((step) => (
            <article className="customer-satisfaction-step" key={step.number}>
              <div className="customer-satisfaction-step-top">
                <span>{step.number}</span>
                <span className="customer-satisfaction-step-icon">{step.icon}</span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="customer-satisfaction-cta">
        <div>
          <p className="customer-satisfaction-eyebrow">LET'S GET STARTED</p>
          <h2>Have a question or an idea in mind?</h2>
          <p>Tell us a little about your project. We would be glad to hear from you.</p>
        </div>
        <Link className="customer-satisfaction-button" to="/contact">
          Get in touch <FaArrowRight aria-hidden="true" />
        </Link>
      </section>
    </main>
    <Footer />
  </>
)

export default CustomerSatisfaction

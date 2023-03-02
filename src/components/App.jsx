import Testimonial from './testimonials/testimonials.jsx'
import Experience from './experince/experience.jsx'
import Portfolio from './portfolio/portfolio.jsx'
import Services from './services/services.jsx'
import Contact from './contact/contact.jsx'
import Header from './header/header.jsx'
import Footer from './footer/footer.jsx'
import About from './about/about.jsx'
import Nav from './nav/nav.jsx'
import React from 'react'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  )
}

export default App
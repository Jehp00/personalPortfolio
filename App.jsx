import Testimonial from './src/components/testimonials/testimonials.jsx'
import Experience from './src/components/experince/experience.jsx'
import Portfolio from './src/components/portfolio/portfolio.jsx'
import Services from './src/components/services/services.jsx'
import Contact from './src/components/contact/contact.jsx'
import Header from './src/components/header/header.jsx'
import Footer from './src/components/footer/footer.jsx'
import About from './src/components/about/about.jsx'
import Nav from './src/components/nav/nav.jsx'
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
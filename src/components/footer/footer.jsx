import React from 'react'
import '../styles/footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>LOGO</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__soicials">
        <a href="https://github.com/Jehp00"><BsGithub/></a>
        <a href="https://www.linkedin.com/in/juan-esteban-hernandez-pedraza-254b71234/"><BsLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Juan Estabn Hernandez Pedraza. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
import React from 'react'
import '../styles/header.css'
import CTA from './CTA'
import ME from '../styles/assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="conteiner header_conteiner">
        <h5>Hello I'm</h5>
        <h1>Juanes</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <a href="#contact" className='scroll__down'>Scroll Down</a>
        <div className='me'>
          <img src={ME} alt="me" />
        </div>
      </div>
    </header>
  )
}

export default Header
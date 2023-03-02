import React from 'react'
import '../styles/about.css'
import ME from '../styles/assets/me-about.png'
import { FaAward } from 'react-icons/fa'
import { AiOutlineFolderOpen } from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='conteiner about__container'>
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className='about__content'>
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>9+ months</small>
            </article>

            <article className='about__card'>
              <AiOutlineFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small>4 Completed Projects</small>
            </article>
          </div>
          <p>
          I am a responsible, attentive, and
          punctual individual who is also known
          for being helpful, kind, and a great
          collaborator. As an autodidact, I enjoy
          studying and creating new softwarerelated projects. I practice coding
          online in opensource communities and
          always prefer to work with others. My
          main objective is to continuously
          improve my soft skills and learn from as
          many professionals as possible to
          enhance my knowledge and skills in
          software development. By interacting
          and working with new people, I hope
          to gain new perspectives and insights
          that will allow me to expand my skill set
          and create better software.
          </p>
          <a className='btn btn primary' href="#contact">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
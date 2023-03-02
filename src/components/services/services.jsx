import React from 'react'
import '../styles/services.css'
import { GiCheckMark } from 'react-icons/gi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="conteiner services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>
        {/* END of UI/UX */}
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>
        {/* END of WEB DEVELOPMENT */}
        <article className='service'>
          <div className="service__head">
            <h3>Content Cretion</h3>
          </div>
          <ul className='service__list'>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>
        {/* END of Content Creaction */}
      </div>
    </section>
  )
}

export default Services
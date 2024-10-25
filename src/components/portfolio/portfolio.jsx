import React from 'react'
import '../styles/portfolio.css'
import IMG1 from '../styles/assets/portfolio1.jpg'
import IMG2 from '../styles/assets/portfolio2.png'


const Portfolio = () => {

  const data = [
    {
      id: 1,
      image: IMG1,
      title: "Minca Electric",
      github: "https://www.mincaelectric.com/"
    },
    {
      id: 2,
      image: IMG2,
      title: "Brumalab Agency",
      github: "https://www.brumalab.agency/"
    }
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                  <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='portfolio__item-cta'>
                <a href={github} className='btn' >{title}</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
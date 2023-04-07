import React from 'react'
import '../styles/portfolio.css'
import IMG1 from '../styles/assets/portfolio1.png'
import IMG2 from '../styles/assets/portfolio2.png'
import IMG3 from '../styles/assets/portfolio3.png'


const Portfolio = () => {

  const data = [
    {
      id: 1,
      image: IMG1,
      title: "TechStars Investors",
      github: "https://github.com/capstone-project-sparck/capstone_project"
    },
    {
      id: 2,
      image: IMG2,
      title: "CHESS || PYTHON",
      github: "https://github.com/Jehp00/Chess_Python"
    },
    {
      id: 3,
      image: IMG3,
      title: "AirBNB Clone",
      github: "https://github.com/Jehp00/holbertonschool-AirBnB_clone_v4"
    },
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
                <a href={github} className='btn' target='_blank'>{title}</a>
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
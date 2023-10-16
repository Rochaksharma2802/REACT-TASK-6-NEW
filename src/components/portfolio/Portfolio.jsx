import React from 'react'
import PRJ1 from '../../assets/proj1.jpg';
import PRJ2 from '../../assets/proj2.jpg';
import PRJ3 from '../../assets/proj3.jpg';

import './portfolio.css'


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PRJ1} alt="IMG" />
          </div>
          <h3>E-commerce website</h3>
          <div className="portfolio__item-cta">
            <a href="" className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href="" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PRJ2} alt="IMG" />
          </div>
          <h3>Weather App</h3>
          <div className="portfolio__item-cta">
            <a href="" className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href="" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PRJ3} alt="IMG" />
          </div>
          <h3>Health Tracker Application</h3>
          <div className="portfolio__item-cta">
            <a href="" className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href="" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio
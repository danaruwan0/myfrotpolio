import React from 'react'
import './projects.css'

export default function Projects() {
  return (
     <div className="home-container">
      <div className="left-content">
        <h2 className="subtitle">Hi, I’m Hizkia</h2>
        <h1 className="title">Pixel Composer</h1>
        <p className="description">
          I craft user interfaces with the spirit of poetry and logic. Bringing designs into forms you can feel on screen.
        </p>

        <div className="social-icons">
          <a href="#"><i className="fab fa-github"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
        </div>

        <div className="buttons">
          <button className="btn-dark">Download CV</button>
          <button className="btn-outline">Contact Me</button>
        </div>

        <div className="quick-stats">
          <div><strong>3+</strong><p>Years of Experience</p></div>
          <div><strong>20+</strong><p>Projects Completed</p></div>
          <div><strong>10+</strong><p>Happy Clients</p></div>
          <div><strong>5</strong><p>Tech Stacks Mastered</p></div>
        </div>
      </div>

      <div className="right-content">
        <div className="profile-circle">
          <img src={profileImg} alt="Profile" />
        </div>
        <div className="tech-icon html">HTML</div>
        <div className="tech-icon css">CSS</div>
        <div className="tech-icon js">JS</div>
        <div className="tech-icon gear">⚙️</div>
      </div>
    </div>
  )
}

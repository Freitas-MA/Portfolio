import React from 'react'
import homeGif from '../../assets/home.gif'


export default function 
Home
() {
  return (
    <div>
       <section className="header-container">
      <img className="profile-image" src={homeGif} alt="" />
      <h1>Hi I'm Marcos Freitas</h1>

      <div className="content-text">
        <h2>Frontend Developer</h2>
        <h3>I'm able to deal with your projects and deliver a very good result in a short time!</h3>

        <p>
          Skilled and passionate web developer, I possess a solid foundation in HTML, CSS, and JavaScript, and excel at
          problem-solving, clear communication, and collaboration with stakeholders.
        </p>
      </div>
      <a href="#contact" className="btn btn-secondary">Connect With Me</a>
      <div className="division"></div>
    </section>
      <section className="techIcons container">

    <div>

      <i className="devIcon devicon-html5-plain"></i>

    </div>
    <div>

      <i className="devIcon devicon-css3-plain"></i>

    </div>
    <div>

      <i className="devIcon devicon-bootstrap-plain"></i>

    </div>
    <div>

      <i className="devIcon devicon-javascript-plain"></i>

    </div>
    <div>

      <i className="devIcon devicon-react-original"></i>

    </div>
    <div>

      <i className="devIcon devicon-nextjs-original"></i>

    </div>
  </section>

    </div>
  )
}

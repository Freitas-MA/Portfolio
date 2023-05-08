import React from 'react'
import linkedinIcon from '../../assets/linkedin-icon.svg'
import githubIcon from '../../assets/github-icon.svg'

export default function footer() {
  return (
    <section class="footer">
    <footer id="footer">
      <div class="container">
        <a href="mailto:freitas.ma.1993@gmail.com">freitas.ma.1993@gmail.com</a>

        <div class="social">

          <a href="https://www.linkedin.com/in/freitas-marcos/" target="_blank"><img src={linkedinIcon}
              alt="Linkedin" /></a>
          <a href="https://github.com/Freitas-MA" target="_blank"><img src={githubIcon}
              alt="GitHub" /></a>

        </div>


        <p>Copyright &copy; Marcos Freitas <span id="datee"></span>, All rights reserved</p>
      </div>
    </footer>
  </section>
    )
}

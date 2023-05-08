import React from 'react'
import Form from '../../components/smartForm/form.jsx'

export default function contact() {
  return (
    <section id="contact" class="form container">
          <div class="contact-form">
            <div class="content">
              <div class="left-side">
                <div class="phone details">
                  <i class="fas fa-phone-alt"></i>
                  <div class="topic">Phone</div>
                  <div class="text-one">+351 916 742 800</div>
                </div>
                <div class="email details">
                  <i class="fas fa-envelope"></i>
                  <div class="topic">Email</div>
                  <div class="text-one">freitas.ma.1993@gmail.com</div>
                </div>
              </div>
              <div class="right-side">
                <div class="topic-text">Send me a message</div>
                <p>Feel free to reach out to me via email for any further information, quotes, or work proposals you may need.
                </p>
                  <Form/> 
              
              </div>
            </div>
         </div>
  </section>
  )
}

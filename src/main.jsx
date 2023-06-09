import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/navbar/navbar.jsx'
import Index from './pages/Home/index.jsx'
import Works from './pages/My_work/works.jsx'
import Contact from './pages/Contact/contacts.jsx'
import Footer from './pages/footer/footer.jsx'

import './Styles/style.css'
import './Styles/utilities.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Index/>
    <Works />
    <Contact />
    <Footer />
  </React.StrictMode>,
)

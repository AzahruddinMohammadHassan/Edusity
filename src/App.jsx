import React from 'react'
import Navbar from './components/Navbar/navbar'
import Hero from './components/Hero/Hero'
import Program from './components/Programs/Program'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contacts from './components/Contacts/Contacts'
import Footer from './components/Footer/Footer'



const App = () => {
  return (

      

    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title title='Our Program' subtitle='What we offer' />
      <Program />
      <About />
        <Title title='Gallery' subtitle='Campus Photos' />
        <Campus/>
        <Title title='Testimonials' subtitle='What Students Says' />
        <Testimonials />
        <Title title='Contact Us' subtitle='Get in Touch' />
        <Contacts />
        <Footer />
      </div>
      
      
    </div>
  )
}

export default App
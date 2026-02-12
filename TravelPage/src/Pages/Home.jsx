import React from 'react'
import Navbar from '../components/Navbar'
import Herosec from '../components/Herosec'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'
import Testimonials from '../components/Testimonials'
import Steps from '../components/Steps'
import Destinations from '../components/Destinations'
import Services from '../components/Services'

const Home = () => {
  return (
    <div className='ml-12 mr-12'>
      <Navbar/>
      <Herosec/>
      <Services/>
      <Destinations/>
      <Steps/>
      <Testimonials/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home

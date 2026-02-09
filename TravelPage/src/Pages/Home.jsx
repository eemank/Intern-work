import React from 'react'
import Navbar from '../components/Navbar'
import Herosec from '../components/Herosec'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Herosec/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home

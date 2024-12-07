import React from 'react'
import Hero from './Hero'
import Services from './Services'
import Serv from './Serv'
import Gallery from './Gallery'
import Section from './Section'
import Sevice from './Sevice'
import Educators from './Educators'

const Homepage = () => {
  return (
    <div id='home'>
      <Hero/>
      <Serv/>

      <Sevice/>

      <Section/>

      <Educators/>
      <Gallery/>
    </div>
    
  )
}

export default Homepage

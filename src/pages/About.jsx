import React from 'react'
import '../styles/About.css'
import alejandra from '../images/alejandra.jpg'
import juanCarlos from '../images/juanCarlos.jpg'

const About = () => {
  return (
    <div className='content center'>
        <div className='allContent center' >
          <div className='information' >

          </div>
          <div className='pictures center'>
            <img src={ alejandra } alt="" />
          </div>
          <div className='pictures'>
            <img src={ juanCarlos } alt="" />
          </div>
          <div className='information' >

          </div>
        </div>
        <div></div>
    </div>
  )
}

export default About
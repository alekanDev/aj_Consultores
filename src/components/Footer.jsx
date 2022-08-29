import React from 'react'
import '../styles/Footer.css'
import bristol from '../images/clientes/bristol.png'
import broekhof from '../images/clientes/broekhof-center.png'
import crop from '../images/clientes/crop.png'
import dimotriz from '../images/clientes/dimotriz-center.png'
import tesara from '../images/clientes/tesara-center.png'
import cubiq from '../images/clientes/cubiq-center.png'

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Footer = () => {
  const clients = [
    <div className='logos' data-value='1'>
      <img src={ bristol } alt="" />
    </div>,
    <div className='logos' data-value='2'>
      <img src={ broekhof } alt="" />
    </div>,
    <div className='logos' data-value='3'>
      <img src={ crop } alt="" />
    </div>,
    <div className='logos' data-value='4'>
      <img src={ dimotriz } alt="" />
    </div>,
    <div className='logos' data-value='5'>
    <img src={ tesara } alt="" />
    </div>,
    <div className='logos' data-value='5'>
    <img src={ cubiq } alt="" />
    </div>
  ];

  const responsive ={
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 }
  }

  return (
    <div id='footer' className='footerContent center'>
      <div className='logoClients center'>
        <h3 className='center'>Nuestros clientes</h3>
        <AliceCarousel
          mouseTracking
          items={ clients }
          responsive={ responsive }
          autoPlay={true}
          infinite={true}
          autoPlayInterval={3000}
          disableButtonsControls={true}
          />
      </div>
      <div className='information center'>
        Nuestra informacion
      </div>
    </div>
  )
}

export default Footer
import React from 'react'
import '../styles/Footer.css'
import bristol from '../images/clientes/bristol.png'
import broekhof from '../images/clientes/broekhof-center.png'
import crop from '../images/clientes/crop.png'
import dimotriz from '../images/clientes/dimotriz-center.png'
import tesara from '../images/clientes/tesara-center.png'
import cubiq from '../images/clientes/cubiq-center.png'

import { FaWhatsapp } from "react-icons/fa";

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Link } from 'react-router-dom'

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
        <h2 className='center'>Nuestros clientes</h2>
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
        <h1>Contacto</h1>
        <h3>Correo: <span>alejandra.duque@ayjcontadoresfinancieros.com</span></h3>
        <h3>Correo: <span>juan.gonzalez@ayjcontadoresfinancieros.com</span></h3>
        <h3>Celulares: <span>3104059281 y 3054570728</span></h3>
        <h3></h3>
        <h3><FaWhatsapp size={30}/>Whatsapp: <span>3104059281</span></h3>
</div>
    </div>
  )
}

export default Footer
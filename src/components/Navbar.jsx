import React from 'react'
import logo from '../images/logo.png'
import Ruta from './Ruta'
import '../styles/navbar.css'

const Navbar = () => {
  return (
    <div className='navbarContent'>
        <div className="logo">
            <img src={ logo } alt="logo" />
            <span>A&J Consultores</span>
        </div>
        <div className="menu">
            <Ruta route='/' name='Inicio' />
            <Ruta route='/servicios' name='Servicios' />
            <Ruta route='/sobreNosotros' name='Sobre A&J' />
            <Ruta route='/Contactanos' name='Contacto' />
        </div>
    </div>
  )
}



export default Navbar
import React from 'react'
// import logo from '../images/logo.png'
// import menu from '../images/menu.png'
import Ruta from './Ruta'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <div className='navbarContent'>
        <div className="logo">
            {/* <img src={ logo } alt="logo" /> */}
            {/* <img src={menu} alt="btnMenu" /> */}
            <span>A&J</span>
            <div className='razon'>
              <span>Contadores y</span><span>Financieros</span>
            </div>
        </div>
        <div className="menu">
            <Ruta route='/' name='Inicio' />
            <Ruta route='/servicios' name='Servicios' />
            <Ruta route='/sobreNosotros' name='Sobre A&J' />
            <Ruta route='/Contactanos' name='Contacto' />
            <Ruta route='/fromtest' name='Tests' />
        </div>
    </div>
  )
}

export default Navbar
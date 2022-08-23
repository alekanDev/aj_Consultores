import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbarContent'>
        <div className="logo">
            <img src={ logo } alt="logo" />
            <span>A&J Consultores</span>
        </div>
        <div className="menu">
            <ul>
                <li>
                    <Link className='btnMenu center' to='/'>
                        <button className='btnMenu'>Inicio</button>
                    </Link>
                </li>
                <li>
                    <Link className='btnMenu' to='/servicios'>
                        <button className='btnMenu'>Servicios</button>
                    </Link>
                </li>
                <li>
                    <Link className='btnMenu' to='/sobreNosotros'>
                        <button className='btnMenu'>Sobre A&J</button>
                    </Link>
                </li>
                <li>
                    <Link className='btnMenu' to='/contactanos'>
                        <button className='btnMenu'>Contacto</button>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
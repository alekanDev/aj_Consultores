import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbarContent'>
        <div className="logo">
            <img src={ logo } alt="logo" />
        </div>
        <div className="menu">
            <ul>
                <li>
                    <Link className='btnMenu' to='/inicio'>
                        <button className='btnMenu'>Inicio</button>
                    </Link>
                </li>
                <li>
                    <Link className='btnMenu' to='/servicios'>
                        <button className='btnMenu'>Servicios</button>
                    </Link>
                </li>
                <li>
                    <Link className='btnMenu' to='/nosotros'>
                        <button className='btnMenu'>Nosotros</button>
                    </Link>
                </li>
                <li>
                    <Link className='btnMenu' to='/contacto'>
                        <button className='btnMenu'>Contacto</button>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
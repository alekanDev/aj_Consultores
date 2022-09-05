import React from 'react'
import '../styles/Index.css'
import logo from '../images/logo.png'


const Index = () => {
    return (
        <div className='contentIndex center'>
            <div className="logoBanner center">
                <img src={ logo } alt="" />
            </div>
            <div className="infoBanner center">
                <p className='center'>Conectamos a las Compañías con su verdadero valor. <span>Somos aliados, somos tu equipo.</span></p>
            </div>
        </div>
    )
}

export default Index
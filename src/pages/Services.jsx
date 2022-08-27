import React, { useState } from 'react'
import '../styles/Services.css'
import ButtonOutsourcing from '../components/ButtonOutsourcing'
import ButtonTributario from '../components/ButtonTributario'
import ButtonAseguramiento from '../components/ButtonAseguramiento'
import asesoria from '../images/asesoria.png'
import closeIcon from '../images/closeIcon.png'
// import ButtonAsesoriaFinanciera from '../components/ButtonAsesoria'


const Services = () => {

  return (
    <div className='content'>
        <div className="servicesContent">
          <h1>Nuestros Servicios</h1>
          <div className="servicesList">
            <ButtonOutsourcing nameButton='OutSourcing' />
            <ButtonTributario nameButton='Servicios Tributarios' />
            <ButtonAseguramiento nameButton='Aseguramiento' />
            <ButtonAsesoriaFinanciera nameButton='Asesoria Financiera'/>
          </div>
          <div className="serviceInformation">
            {/* Aqui te necesito */}
            <ListOptions />
          </div>
          <div>
            
          </div>
        </div>
    </div>
  )
}

const ButtonAsesoriaFinanciera = ({ nameButton }) => {
  
  const [viewAsesoriaFinanciera, setViewAsesoriaFinanciera] = useState(false)
  
  return(
    <div className="buttonContent">
      <button type='button' onClick={() => {
        setViewAsesoriaFinanciera(!viewAsesoriaFinanciera)
      }}>
        <img src={asesoria} alt="" />
      </button>
      <span>{ nameButton }</span>  

      {/* <listOptions /> */}

    </div>
  )
}

const ListOptions = (state) => {

  const [viewAsesoriaFinanciera, setViewAsesoriaFinanciera] = useState({ state })

  return(
    <div className="listalista">
     
          <div className="listServices" >
            <div className='Title'>
            <img src={closeIcon} Asesoria alt="closeIcon" onClick={() => {
            setViewAsesoriaFinanciera(false)
            }}/> 
            Asesoria Financiera
            </div>
            <div>
              <ul className='itemService'>
                <li>Outsourcing o cumplimiento de Impuestos Corporativos.</li>
                <li>Planeación Tributaria.</li>
                <li>IVA, renta, retenciones.</li>
                <li>Impuestos locales.</li>
                <li>Solicitud de devolución y/o compensación de saldo a favor por renta e IVA.</li>
              </ul>
            </div>
          </div>
        
    </div>
  )
}

export default Services
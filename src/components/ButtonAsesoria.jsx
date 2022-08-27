import React, { useState } from "react"

import closeIcon from '../images/closeIcon.png'
import asesoria from '../images/asesoria.png'

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
    
        {
          viewAsesoriaFinanciera && (
            <div className="listServices" >
              <img src={closeIcon} alt="closeIcon" onClick={() => {
              setViewAsesoriaFinanciera(false)
            }}/>
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
          )
        }
      </div>
    )
  }

  export default ButtonAsesoriaFinanciera
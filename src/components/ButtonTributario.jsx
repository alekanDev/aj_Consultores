import React, { useState } from "react"

import closeIcon from '../images/closeIcon.png'
import outsourcing from '../images/tributario.png'

const ButtonTributario = ({ nameButton }) => {
  
    const [viewTributario, setViewTributario] = useState(false)
    
    return(
      <div className="buttonContent">
        <button type='button' onClick={() => {
          setViewTributario(!viewTributario)
        }}>
          <img src={outsourcing} alt="" />
        </button>
        <span>{ nameButton }</span>
    
        {
          viewTributario && (
            <div className="listServices" >
              <img src={closeIcon} alt="closeIcon" onClick={() => {
              setViewTributario(false)
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

  export default ButtonTributario
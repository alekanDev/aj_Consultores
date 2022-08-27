import React, { useState } from "react"

import closeIcon from '../images/closeIcon.png'
import aseguramiento from '../images/aseguramiento.png'

const ButtonAseguramiento = ({ nameButton }) => {
  
    const [viewAseguramiento, setViewAseguramiento] = useState(false)
    
    return(
      <div className="buttonContent">
        <button type='button' onClick={() => {
          setViewAseguramiento(!viewAseguramiento)
        }}>
          <img src={aseguramiento} alt="" />
        </button>
        <span>{ nameButton }</span>
    
        {
          viewAseguramiento && (
            <div className="listServices" >
              <img src={closeIcon} alt="closeIcon" onClick={() => {
              setViewAseguramiento(false)
            }}/>
              <div className="contentItemService">
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

  export default ButtonAseguramiento
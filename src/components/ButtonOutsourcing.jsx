import React, { useState } from "react"

import closeIcon from '../images/closeIcon.png'
import outsourcing from '../images/outsourcing.png'
const ButtonOutsourcing = ({ nameButton }) => {
  
    const [viewOutSourcing, setViewOutSourcing] = useState(false)
    
    return(
      <div className="buttonContent">
        <button type='button' onClick={() => {
          setViewOutSourcing(!viewOutSourcing)
        }}>
          <img src={outsourcing} alt="" />
        </button>
        <span>{ nameButton }</span>
        <div>
        {
          viewOutSourcing && (
            <div className="listServices" >
              <img src={closeIcon} alt="closeIcon" onClick={() => {
              setViewOutSourcing(false)
            }}/>
            <div>
              <ul className='itemService'>
                <li>Contabilidad in house/on-site que cumple con regulaciones locales (IFRS, GAAP etc.)</li>
                <li>Estados financieros mensuales y anuales.</li>
                <li>Informes de gestión.</li>
                <li>Administración y análisis financiero.</li>
                <li>Registro de todas las operaciones efectuadas.</li>
                <li>Conciliación de todas las cuentas de los estados financieros.</li>
                <li>Elaboración periódica de reportes contables.</li>
                <li>Elaboración de las declaraciones tributarias aplicables en Colombia con destino a la DIAN.</li>
                <li>Elaboración de respuestas a requerimientos ordinarios de las autoridades tributarias.</li>
                <li>Elaboración de los reportes de información exógena Distrital y Nacional.</li>
                <li>Atención de los asuntos relacionados con las entidades de control y vigilancia.</li>
                <li>Renovación cámara de comercio y RUP (Registro Único de Proponentes).</li>
              </ul>
            </div>
            </div>
          )
        }
        </div>
    
      </div>
    )
  }

  export default ButtonOutsourcing
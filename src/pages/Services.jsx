import React, {useState, useEffect} from 'react'
import '../styles/Services.css'
import  outsourcing from '../images/outsourcing.png'
import  aseguramiento from '../images/aseguramiento.png'
import  tributario from '../images/tributario.png'
import  asesoria from '../images/asesoria.png'


const Services = () => {

  const [buttonOutsourcing, setButtonOutsourcing] = useState(false)
  const [buttonAseguramiento, setButtonAseguramiento] = useState(false)
  const [buttonTributario, setButtonTributario] = useState(false)
  const [buttonAsesoria, setButtonAsesoria] = useState(false)

  const [viewOutsourcing, setViewOutsourcing] = useState(false)
  const [viewAseguramiento, setViewAseguramiento] = useState(false)
  const [viewTributario, setViewTributario] = useState(false)
  const [viewAsesoria, setViewAsesoria] = useState(false)

  useEffect(() => {
    setViewOutsourcing(!viewOutsourcing)
    setViewAseguramiento(false)
    setViewTributario(false)
    setViewAsesoria(false)
  },[buttonOutsourcing])

  useEffect(() => {
    setViewAseguramiento(!viewAseguramiento)
    setViewOutsourcing(false)
    setViewTributario(false)
    setViewAsesoria(false)
  },[buttonAseguramiento])

  useEffect(() => {
    setViewTributario(!viewTributario)
    setViewOutsourcing(false)
    setViewAseguramiento(false)
    setViewAsesoria(false)
  },[buttonTributario])

  useEffect(() => {
    setViewAsesoria(!viewAsesoria)
    setViewOutsourcing(false)
    setViewAseguramiento(false)
    setViewTributario(false)
  },[buttonAsesoria])

  return (
    <div className='content'>
        <div className="servicesContent">
          <h1>Nuestros Servicios</h1>
          <div className="servicesList">

            <div className="buttonContent">
             <button type='button' className="testButton center" onClick={() => {
                setButtonAsesoria(!buttonAsesoria)
                }}>
                  <img className='buttonImg' src={ asesoria } alt="asesoriaImg" />
              </button>
              <span>Asesoria Financiera</span>
            </div>

            <div className="buttonContent">
             <button type='button' className="testButton center" onClick={() => {
                setButtonOutsourcing(!buttonOutsourcing)
                }}>
                  <img className='buttonImg' src={ outsourcing } alt="outsourcingImg" />
              </button>
              <span>Outsourcing</span>
            </div>

            <div className="buttonContent">
              <button type='button' className="testButton center" onClick={() => {
                setButtonAseguramiento(!buttonAseguramiento)
                }}>
                  <img className='buttonImg' src={ aseguramiento } alt="aseguramientoImg" />
              </button>
              <span>Aseguramiento</span>
            </div>

            <div className="buttonContent">
              <button type='button' className="testButton center" onClick={() => {
                setButtonTributario(!buttonTributario)
                }}>
                  <img className='buttonImg' src={ tributario } alt="tributarioImg" />
              </button>
              <span>Servicios Tributarios</span>
            </div>
          </div>

          <div className="listServices center">
            {/* Aqui la lista*/}
            {
            viewAsesoria && (
              <>
                <ul className='itemService '>
                  <h3>Asesoria Financiera</h3>
                  <li>Planificaci??n financiera: Presupuestos y flujos de caja proyectados.</li>
                  <li>Construcci??n de indicadores estrat??gicos y de seguimiento.</li>
                  <li>Valoraciones de empresas en VPN, EVA, flujos de fondos, flujos de caja libre.</li>
                  <li>Evaluaci??n financiera y de proyectos.</li>
                  <li>Dise??o y estructura de costos.</li>
                </ul>
              </>
            )
          }

          {
            viewOutsourcing && (
              <ul className='itemService'>
                <h3>Outsourcing</h3>
                <li>Contabilidad in house/on-site que cumple con regulaciones locales (IFRS, GAAP etc.)</li>
                <li>Estados financieros mensuales y anuales.</li>
                <li>Informes de gesti??n.</li>
                <li>Administraci??n y an??lisis financiero.</li>
                <li>Registro de todas las operaciones efectuadas.</li>
                <li>Conciliaci??n de todas las cuentas de los estados financieros.</li>
                <li>Elaboraci??n peri??dica de reportes contables.</li>
                <li>Elaboraci??n de las declaraciones tributarias aplicables en Colombia con destino a la DIAN.</li>
                <li>Elaboraci??n de respuestas a requerimientos ordinarios de las autoridades tributarias.</li>
                <li>Elaboraci??n de los reportes de informaci??n ex??gena Distrital y Nacional.</li>
                <li>Atenci??n de los asuntos relacionados con las entidades de control y vigilancia.</li>
                <li>Renovaci??n c??mara de comercio y RUP (Registro ??nico de Proponentes).</li>
              </ul>
            )
          }

          {
            viewAseguramiento && (
              <ul className='itemService'>
                <h3>Aseguramiento</h3>
                <li><span>Revisor??a Fiscal:</span> Asumimos la responsabilidad de auditar los estados financieros de acuerdo con las normas de auditor??a generalmente aceptadas, con el prop??sito de expresar una opini??n independiente sobre la situaci??n financiera de nuestros clientes.</li>
            </ul>
            )
          }

          { 
            viewTributario && (
              <ul className='itemService'>
                <h3>Servicios Tributarios</h3>
                <li>Outsourcing o cumplimiento de Impuestos Corporativos.</li>
                <li>Planeaci??n Tributaria.</li>
                <li>IVA, renta, retenciones.</li>
                <li>Impuestos locales.</li>
                <li>Solicitud de devoluci??n y/o compensaci??n de saldo a favor por renta e IVA.</li>
              </ul>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Services
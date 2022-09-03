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
                  <li>Planificación financiera: Presupuestos y flujos de caja proyectados.</li>
                  <li>Construcción de indicadores estratégicos y de seguimiento.</li>
                  <li>Valoraciones de empresas en VPN, EVA, flujos de fondos, flujos de caja libre.</li>
                  <li>Evaluación financiera y de proyectos.</li>
                  <li>Diseño y estructura de costos.</li>
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
            )
          }

          {
            viewAseguramiento && (
              <ul className='itemService'>
                <h3>Aseguramiento</h3>
                <li><span>Revisoría Fiscal:</span> Asumimos la responsabilidad de auditar los estados financieros de acuerdo con las normas de auditoría generalmente aceptadas, con el propósito de expresar una opinión independiente sobre la situación financiera de nuestros clientes.</li>
            </ul>
            )
          }

          { 
            viewTributario && (
              <ul className='itemService'>
                <h3>Servicios Tributarios</h3>
                <li>Outsourcing o cumplimiento de Impuestos Corporativos.</li>
                <li>Planeación Tributaria.</li>
                <li>IVA, renta, retenciones.</li>
                <li>Impuestos locales.</li>
                <li>Solicitud de devolución y/o compensación de saldo a favor por renta e IVA.</li>
              </ul>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Services
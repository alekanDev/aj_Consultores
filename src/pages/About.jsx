import React from 'react'
import '../styles/About.css'
import alejandra from '../images/alejandra.jpg'
import juanCarlos from '../images/juanCarlos.jpg'
import Ruta from '../components/Ruta'
import { BsArrowRightCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className='content center'>
      <div className="learnMore">
        <div className="more">
        <BsArrowRightCircleFill color='white' size={30} />
        <Ruta route='/nuestraHistoria' name='Conocer más' />
        </div>
      </div>
      <div className='allContent center' >
        <div className='informationAlejandra' >
          <p className='experiencia center'>
            Cuento con más de 10 años de experiencia en él área contable en sectores de la economía como lo son: Forestal, comercial, industrial y de servicios; elaboración, control y seguimiento de presupuestos de ingresos, costos y gastos, flujos de caja proyectados, construcción de indicadores financieros estratégicos.
          </p>
        </div>
        <div className='pictures picLeft'>
          <img src={ alejandra } alt="" />
          <span className='name'>Alejandra Duque Usma</span>
          <span className='study'>Contadora Pública, Especialista en Gerencia Financiera y con formación complementaria en: Normas Internacionales de Información Financiera (NIIF - IFRS), Tributaria y Aseguramiento de la información (Revisoría Fiscal).</span>
        </div>
        <div className='pictures picRigth'>
          <img src={ juanCarlos } alt="" />
          <span className='name'>Juan Carlos González Bedoya</span>
          <span className='study'>Tecnólogo en costos y presupuestos del ITM, Contador Público de la Universidad de Sabaneta, formación complementaria en NIIF e impuestos.</span>
        </div>
        <div className='informationJuanCarlos' >
          <p className='experiencia center'>
            Más de 10 años de experiencia en los procesos Contables y tributarios (impuestos nacionales, distritales y departamentales)en los sectores: minería, servicios, manufacturero, industria y comercial.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
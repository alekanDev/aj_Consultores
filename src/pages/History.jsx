import React from 'react'
import '../styles/History.css'
import logo from '../images/logo.png'

const History = () => {
  return (
    <div className='content'>
      <div className="allContent center">
        <div className="historyContent">
          <div className='history'>
          <h1>Nuestra Historia</h1>
            <p>
              A&J Contadores y Financieros S.A.S. nace del sueño de dos colegas y amigos que creemos firmemente en que existe la manera de apoyar a las Empresas con nuestros servicios de una manera diferente, siendo parte de su equipo de trabajo y  convirtiéndonos en sus aliados estratégicos.
            </p>
            <p>
            Siendo ambos Contadores con más de 10 años de experiencia en sectores de la Economía como:
              Servicios, Comercial e Industrial y siendo conscientes de que las Empresas cada vez necesitan simplificar sus procesos y enfocar sus esfuerzos en el desarrollo y crecimiento de sus negocios; creamos esta Empresa con el fin de dar alcance a las necesidades de las Compañías en sus procesos Contables, Tributarios, Financieros y de Control de la Información.
            </p>
            {/* <div className='logoHistory'>
              <img src={logo} alt="" />
            </div> */}
          </div>
        </div>
        <div className="right">
          <div className="mision rightSection">
          <h1>Nuestra Misión</h1>
          <p>
          Prestar un excelente servicio servicio de Outsouircing Contable, Asesoría Contable, Financiera, Tributaria y de Revisoría Fiscal  eficiente, eficaz y confiable; ofreciendo tranquilidad a nuestros clientes a través de nuestro acompañamiento permanente, con  calidad, cumplimiento y profesionalismo.
          </p>
          </div>
          <div className="vision rightSection">
          <h1>Nuestra Visión</h1>
          <p>
          Ser reconocidos como aliados de las Empresas y parte de su equipo; convirtiéndonos en la mejor opción a la hora de seleccionar un servicio de Outsouircing Contable, Asesoría Contable, Financiera, Tributaria y de Revisoría Fiscal.
          </p>
          </div>
          <div className="valores rightSection">
          <h1>Nuestros Valores</h1>
          <p>
          Desde A&J consideramos que los valores que nos definen para la excelencia que nos exigen son:
          </p>
            <ul>
              <li>La Responsabilidad</li>
              <li>La Confianza</li>
              <li>El Respeto</li>
              <li>El Compromiso</li>
              <li>La Integridad</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default History
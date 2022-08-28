// import React, { useEffect, useState } from "react";
// import '../styles/Tests.css'

// const Tests = () => {

//     const [button, setButton] = useState(false)
//     const [view, setView] = useState(false)

//     useEffect((() => {
//         setView(!view)
//     }),[button])

//     return(
//         <div className="content">
//             <div className="testContent">
//                     <h1>Este es el test de servicios</h1>
//                 <div className="fromButtons">
//                     {/* aqui el boton */}
//                     <button className="testButton" onClick={() => {
//                         setButton(!button)
//                     }}>Mostrar</button>
//                 </div>
//                 <div className="fromList">
//                     {/* aqui el menu */}
//                     {
//                         view && (
//                             <ul>
//                                 <li>Informacion a mostrar</li>
//                                 <li>Informacion a mostrar</li>
//                                 <li>Informacion a mostrar</li>
//                                 <li>Informacion a mostrar</li>
//                             </ul>
//                         )
//                     }
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Tests
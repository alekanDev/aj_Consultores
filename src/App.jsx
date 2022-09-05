
import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Services from './pages/Services';
import PublicLayout from './layouts/PublicLayout';
import About from './pages/About';
// import Contact from './pages/Contact';
import Tests from './pages/Tests';
import History from './pages/History'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/fromtest' element={<PublicLayout Children={ <Tests />}/>} />
          <Route path='/nuestraHistoria' element={<PublicLayout Children={ <History />}/>} />
          <Route path='/sobreNosotros' element={<PublicLayout Children={ <About />}/>} />
          <Route path='/servicios' element={<PublicLayout Children={ <Services />}/>} />
          <Route path='/' element={<PublicLayout Children={ <Index />}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;



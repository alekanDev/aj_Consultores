
import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Services from './pages/Services';
import PublicLayout from './layouts/PublicLayout';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/contactanos' element={<PublicLayout Children={ <Contact />}/>} />
          <Route path='/sobreNosotros' element={<PublicLayout Children={ <About />}/>} />
          <Route path='/servicios' element={<PublicLayout Children={ <Services />}/>} />
          <Route path='/' element={<PublicLayout Children={ <Index />}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

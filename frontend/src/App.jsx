import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Error from './routes/Error'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './routes/Home'
import Explorar from './routes/Explorar'
import Encontros from './routes/Encontros'
import Time from './routes/Time'
import Posicao from './routes/Posicao'
import PosicaoRosa from './routes/PosicaoRosa'

function App() {
  return (
    <BrowserRouter>
      {/* Navbar fixa no topo */}
      <Nav />

      {/* Conteúdo principal (as páginas) */}
      <div className="min-h-screen bg-[#f2f2f2]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explorar" element={<Explorar />} />
          <Route path="/explorar/encontros" element={<Encontros />} />
          <Route path="/explorar/encontros/time" element={<Time />} />
          <Route path="/explorar/encontros/time/posicao" element={<Posicao />} />
          <Route path="/explorar/encontros/time/posicaoRosa" element={<PosicaoRosa />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>

      {/* Footer fixo no final */}
      <Footer />
    </BrowserRouter>
  );
}


export default App

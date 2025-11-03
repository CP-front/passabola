import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Importa o AuthProvider
import { AuthProvider } from './components/AuthContext' // Verifique o caminho para seu context

// Imports das Rotas
import Error from './routes/Error'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './routes/Home'
import Explorar from './routes/Explorar'
import Encontros from './routes/Encontros'
import Time from './routes/Time'
import Posicao from './routes/Posicao'
import PosicaoRosa from './routes/PosicaoRosa'
import Jogos from './routes/Jogos'
import Mapa from './routes/Mapa'

function App() {
  return (
    <BrowserRouter>
      {/* AuthProvider envolve toda a aplicação */}
      <AuthProvider>
        {/* Navbar fixa no topo */}
        <Nav />

        {/* Conteúdo principal (as páginas) */}
        <div className="min-h-screen bg-[#f2f2f2]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/jogos' element={<Jogos />} />
            <Route path="/explorar" element={<Explorar />} />
            <Route path="/explorar/encontros" element={<Encontros />} />

            {/* --- ROTAS MODIFICADAS --- */}
            {/* Adicionamos :jogoId para que a rota saiba qual jogo carregar */}
            <Route path="/explorar/encontros/time/:jogoId" element={<Time />} />
            <Route path="/explorar/encontros/time/posicao/:jogoId" element={<Posicao />} />
            <Route path="/explorar/encontros/time/posicaoRosa/:jogoId" element={<PosicaoRosa />} />

            <Route path='/mapa' element={<Mapa />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>

        {/* Footer fixo no final */}
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App

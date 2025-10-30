import {BrowserRouter, Routes, Route} from 'react-router-dom'

// --- 1. IMPORTE O AUTHPROVIDER ---
// (Ajuste o caminho se o seu AuthContext.jsx não estiver na pasta 'context')
import { AuthProvider } from './components/AuthContext'

// (Seus imports de rotas)
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
      {/* --- 2. ENVOLVA TODA A APLICAÇÃO COM O AUTHPROVIDER --- */}
      <AuthProvider>
      
        {/* Navbar fixa no topo */}
        {/* Agora o <Nav /> também pode usar o useAuth() (ex: para mostrar "Login" ou "Logout") */}
        <Nav />

        {/* Conteúdo principal (as páginas) */}
        <div className="min-h-screen bg-[#f2f2f2]">
          <Routes>
            {/* O <Home /> agora está "dentro" do AuthProvider e funcionará */}
            <Route path="/" element={<Home />} />
            <Route path='/jogos' element={<Jogos />} />
            <Route path="/explorar" element={<Explorar />} />
            <Route path="/explorar/encontros" element={<Encontros />} />
            <Route path="/explorar/encontros/time" element={<Time />} />
            <Route path="/explorar/encontros/time/posicao" element={<Posicao />} />
            <Route path="/explorar/encontros/time/posicaoRosa" element={<PosicaoRosa />} />
            <Route path='/mapa'element={<Mapa/>}/>
            <Route path="*" element={<Error />} />
          </Routes>
        </div>

        {/* Footer fixo no final */}
        {/* O <Footer /> também pode usar o useAuth() */}
        <Footer />
        
      </AuthProvider>
      {/* --- FIM DO AUTHPROVIDER --- */}
    </BrowserRouter>
  );
}


export default App
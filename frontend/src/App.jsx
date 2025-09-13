import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Error from './routes/Error'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './routes/Home'
import Explorar from './routes/Explorar'
import Encontros from './routes/Encontros'
import Time from './routes/Time'
import Posicao from './routes/Posicao'

function App() {
  

  return (
    <BrowserRouter>

    <Nav/>
    <div className="min-h-screen bg-[#f2f2f2]">

      <Routes>
  
        <Route path="*" element={<Error/>}/>

        <Route path="/" element={<Home/>}/>

        <Route path="/explorar" element={<Explorar/>}/>

        <Route path="/explorar/encontros" element={<Encontros/>}/>

        <Route path="/explorar/encontros/time" element={<Time/>}/>

        <Route path="/explorar/encontros/time/posicao" element={<Posicao/>}/>

      </Routes>
    </div>
    <Footer/>

    </BrowserRouter>
  )
}

export default App

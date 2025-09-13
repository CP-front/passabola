import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Error from './routes/Error'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './routes/Home'

function App() {
  

  return (
    <BrowserRouter>

    <Nav/>
    <div className="min-h-screen bg-[#f2f2f2]">

      <Routes>
  
        <Route path="*" element={<Error/>}/>

        <Route path="/" element={<Home/>}/>

      </Routes>
    </div>
    <Footer/>

    </BrowserRouter>
  )
}

export default App

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Error from './routes/Error'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './routes/Home'

function App() {
  

  return (
      <BrowserRouter>

    <Nav/>
    <main>

      <Routes>
  
        <Route path='/error' element={<Error/>}/>

        <Route path='/home' element={<Home/>}/>

      </Routes>
    </main>
    <Footer/>

    </BrowserRouter>
  )
}

export default App

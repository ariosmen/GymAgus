
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Alumnos from './components/ListaAlumnos'
import Cargar from './components/Cargar'
import TarjetaPersonal from './components/TarjetaPersonal'

function App() {
  
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/alumnos' element={<Alumnos />} />
        <Route path='/alumnos/:id' element={<Cargar />} />
        <Route path='/alumnos/cargar' element={<Cargar />} />
        <Route path='/alumnos/alumno/:id' element={<TarjetaPersonal />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App


import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Alumnos from './components/ListaAlumnos'
import Cargar from './components/Cargar'
import TarjetaPersonal from './components/TarjetaPersonal'
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  
  const [alumnos, setAlumnos] = useState([]);

  useEffect(() => {
    const fetchalumnos = async () => {
      const res = await axios.get("http://localhost:8000/alumnos");
      setAlumnos(res.data);
    };
    fetchalumnos();
  }, [alumnos]);

  return (
    <>
    <BrowserRouter>
      <Navbar alumnos={alumnos}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/alumnos' element={<Alumnos alumnos={alumnos} />} />
        <Route path='/alumnos/:id' element={<Cargar />} />
        <Route path='/alumnos/cargar' element={<Cargar />} />
        <Route path='/alumnos/alumno/:id' element={<TarjetaPersonal />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

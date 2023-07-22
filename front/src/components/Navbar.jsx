import agus from "../img/agus.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar({ cantidad }) {

  const [alumno, setAlumno] = useState("")
  const navigate = useNavigate()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/alumnos/alumno/${alumno}`)
  }
  
  return (
    <nav className="bg-gray-800">
      <div className="px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-shrink-0 items-center">
            <a href="/">
              <img className="w-14" src={agus} />
            </a>
          </div>
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              <a
                href="/alumnos/cargar"
                className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                Cargar
              </a>
              <a
                href="/alumnos"
                className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                Lista de Alumnos
              </a>
            </div>
          </div>
          <div className="text-white">
            Cantidad de Alumnos: <span>{cantidad}</span>
          </div>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <label className="text-white p">Buscar</label>
            <input
              type="text"
              placeholder="Ingrese id del alumno"
              className="rounded px-1"
              onChange={(e) => setAlumno(e.target.value)}
            />
          </form>
        </div>
      </div>
    </nav>
  );
}

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/cargar.css";

export default function Cargar() {
  
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDni] = useState("");
  const [code_area, setCode_area] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  
  const params = useParams();
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!params.id) {
      const res = await axios.post(
        "http://localhost:8000/alumnos",
        {
          nombre,
          apellido,
          dni,
          code_area,
          telefono,
          email
        })
    } else {
      const res = await axios.put(
        `http://localhost:8000/alumnos/${params.id}`,
        {
          nombre,
          apellido,
          dni,
          code_area,
          telefono,
          email
        }
        );
      }
      e.target.reset()
      navigate('/alumnos')
    };
  
    const delete_alumno = async (e) => {
      e.preventDefault()
      const res = await axios.delete(`http://localhost:8000/alumnos/${params.id}`);
      console.log(`Usuario ${params.id} Eliminado`);
      navigate('/alumnos')
      
    }
    
    useEffect(() => {
      if (params.id) {
        actualizar()
      }
      async function actualizar() {
        const res = await axios.get(`http://localhost:8000/alumnos/${params.id}`);
        setNombre(res.data.nombre)
        setApellido(res.data.apellido)
        setDni(res.data.dni)
        setCode_area(res.data.code_area)
        setTelefono(res.data.telefono)
        setEmail(res.data.email)
      }
    },[])
  
  return (
    <div className="contenedor">
      <form onSubmit={handleSubmit}>
        <h1 className="flex justify-center mb-6 text-4xl text-white">
          Formulario de Ingreso
        </h1>
        <div className="mt-11 flex flex-col">
          <input
            type="text"
            className="block py-2 px-2 mb-4 text-bl text-black rounded"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            autoFocus
            required
          />
          <input
            type="text"
            className="block py-2 px-2 mb-4 text-bl text-black rounded"
            placeholder="Apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            required
          />
          <input
            type="text"
            className="block py-2 px-2 mb-4 text-bl text-black rounded"
            placeholder="DNI"
            value={dni}
            onChange={(e) => setDni(e.target.value)}
            required
          />
          <div className="flex justify-between mb-4 text-bl">
            <input
              type="text"
              className="w-24 py-2 px-2 text-bl text-black rounded"
              placeholder="Cod. Area"
              value={code_area}
              onChange={(e) => setCode_area(e.target.value)}
              required
            />
            <input
              type="text"
              className="w-60 py-2 px-2 text-bl text-black rounded"
              placeholder="Telefono"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              required
            />
          </div>
          <input
            type="text"
            className="block py-2 px-2 mb-4 text-bl text-black rounded"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-between p-4">
          <button className="text-lg text-white hover:text-cyan-400">
            {params.id ? "Guardar Cambios" : "Guardar"}
          </button>
          <button
            className="text-lg text-white hover:text-red-600"
            onClick={delete_alumno}
          >
            {params.id ? "Eliminar" : ""}
          </button>
        </div>
      </form>
    </div>
  );
}

import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function TarjetaPersonal() {

  const navigate = useNavigate();

    const [alumno, setAlumno] = useState([]);
    const params = useParams();

    useEffect(() => {
      const fetchalumno = async () => {
        const res = await axios.get(`http://localhost:8000/alumnos/${params.id}`);
        setAlumno(res.data);
      };
      fetchalumno();
    }, [params]);

  return (
    <>
      <div
        className="bg-zinc-950 ml-auto mr-auto mt-52 flex flex-col p-5 rounded-xl border w-96"
        onClick={() => {
          navigate(`/alumnos/${alumno.id}`);
        }}
      >
        <h2 className="text-white text-5xl m-1">
          {alumno.nombre} {alumno.apellido}
        </h2>
        <h2 className="text-white text-2xl m-1">DNI: {alumno.dni}</h2>
        <h2 className="text-white text-2xl m-1">
          TEL: {alumno.code_area}-{alumno.telefono}
        </h2>
        <h2 className="text-white m-1">Email: {alumno.email}</h2>
        <h2 className="text-white m-1">
          Fecha de Inscripcion: {alumno.fecha_inscripcion}
        </h2>
        <div className="text-center mt-2 flex justify-between px-10">
          <button
            className="text-white hover:text-cyan-400"
            onClick={() => {
                navigate(`/alumnos/${params.id}`);
            }}
            >
            EDITAR
          </button>
          <button
              className="text-white hover:text-green-400"
            onClick={() => {
              navigate("/alumnos");
            }}
          >
            VOLVER
          </button>
        </div>
      </div>
    </>
  );
}

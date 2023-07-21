import { useNavigate } from "react-router-dom";

export default function Tarjeta({ alumno }) {
  const navigate = useNavigate();
  return (
    <div
      className="bg-zinc-950 py-3 px-4 w-screen hover:cursor-pointer hover:bg-gray-600 flex"
      onClick={() => {
        navigate(`/alumnos/${alumno.id}`);
      }}
    >
      <h2 className="text-white mr-6">{alumno.id}</h2>

      <h2 className="text-white w-72 mr-20">
        {alumno.nombre} {alumno.apellido}
      </h2>

      <h2 className="text-white w-32 ml-96 mr-56">
        {alumno.code_area}-{alumno.telefono}
      </h2>

      <h2 className="text-white w-28 ml-96">{alumno.fecha_inscripcion}</h2>
    </div>
  );
}

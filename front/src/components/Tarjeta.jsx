import { useNavigate } from "react-router-dom";

export default function Tarjeta({ alumno }) {
  const navigate = useNavigate();
  return (
    <div
      className="bg-zinc-950 py-3 px-4 hover:cursor-pointer hover:bg-gray-600 flex justify-between"
      onClick={() => {
        navigate(`/alumnos/${alumno.id}`);
      }}
    >
      <div className="flex gap-6 flex-none w-80">
        <h2 className="text-white">{alumno.id}</h2>
        <h2 className="text-white">
          {alumno.nombre} {alumno.apellido}
        </h2>
      </div>

      <h2 className="text-white flex-initial w-80">
        {alumno.code_area}-{alumno.telefono}
      </h2>

      <h2 className="text-white">{alumno.fecha_inscripcion}</h2>
    </div>
  );
}

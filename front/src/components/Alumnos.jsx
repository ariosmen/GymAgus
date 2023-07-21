import Tarjeta from "../components/Tarjeta";

export default function Alumnos({ alumnos }) {

  return (
    <div className="flex flex-col">
      {alumnos.map((alumno) => (
        <Tarjeta alumno={alumno} key={alumno.id} />
      ))}
    </div>
  );
}

export default function Header({alumnos}) {
  return (
    <div className="flex justify-between py-1 px-4 bg-zinc-700">
      <div className="flex gap-4">
        <h1 className="text-white">ID</h1>
        <h1 className="text-white">NOMBRE y APELLIDO</h1>
      <div className="text-white">
        Cantidad de Alumnos: <span>{alumnos.length}</span>
      </div>
      </div>
      <h1 className="text-white">TELEFONO</h1>
      <h1 className="text-white">FECHA DE INSCRIPCION</h1>
    </div>
  );
}
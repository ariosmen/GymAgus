import Alumnos from "../components/Alumnos";
import Header from "./Header";

export default function HomePage({alumnos}) {

  return (
    <>
      {alumnos.length > 0 
        ? <Header /> 
        : <div className="flex justify-center items-center mt-32">
            <h1 className="text-white text-4xl">
              NO HAY ALUMNOS EN LA LISTA
            </h1>
          </div>}
      <Alumnos alumnos={alumnos} />
    </>
  );
}

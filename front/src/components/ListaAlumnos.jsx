import { useEffect, useState } from "react";
import axios from "axios";
import Alumnos from "../components/Alumnos";
import Header from "./Header";

export default function HomePage() {
  const [alumnos, setAlumnos] = useState([]);

  useEffect(() => {
    const fetchalumnos = async () => {
      const res = await axios.get("http://localhost:8000/alumnos");
      setAlumnos(res.data);
    }
    fetchalumnos();
  }, []);

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

import Alumnos from "../components/Alumnos";
import Header from "./Header";
import { useEffect, useState } from "react";
import axios from "axios";


export default function HomePage() {

  const [alumnos, setAlumnos] = useState([]);

  useEffect(() => {
    async function fetchalumnos() {
      const res = await axios.get("http://localhost:8000/alumnos");
      setAlumnos(res.data);
    }
    fetchalumnos();
  }, []);

  return (
    <>
      <Header alumnos={alumnos}/>
      {alumnos.length <= 0 ? (
        <div className="flex justify-center items-center mt-32">
          <h1 className="text-white text-4xl">NO HAY ALUMNOS EN LA LISTA</h1>
        </div>
      ) : ''}
      <Alumnos alumnos={alumnos} />
    </>
  );
}

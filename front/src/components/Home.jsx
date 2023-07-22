import img from "../img/Gym.jpg";
import "../css/home.css";

export default function Home() {
  return (
    <div className="home">
        <img src={img} alt="" className="img" />
        <div className="card flex flex-col gap-4">
            <h1 className="text-5xl">Contacto</h1>
            <h2 className="text-3xl">Agustin Marino</h2>
            <h3 className="text-2xl">Telefono: 223 622-0809</h3>
        </div>
    </div>
  )
}
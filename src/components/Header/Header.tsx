import nasaIcon from "../../assets/nasa-6.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex items-center p-5 bg-slate-950 justify-around">
      <Link to="/">
        <img className="w-28" src={nasaIcon} alt="Nasa Icon" />
      </Link>
      <h1 className="text-gray-50 font-bold	text-3xl">{`{ APIs }`}</h1>
    </header>
  );
}

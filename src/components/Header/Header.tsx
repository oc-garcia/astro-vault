import nasaIcon from "../../assets/nasa-6.svg";

export default function Header() {
  return (
    <header className="flex items-center p-5 bg-slate-950 justify-around">
      <img className="w-28" src={nasaIcon} alt="Nasa Icon" />
      <h1 className="text-gray-50 font-bold	text-3xl">{`{ APIs }`}</h1>
    </header>
  );
}

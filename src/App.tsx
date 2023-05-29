import nasaLogo from "./assets/nasa-6.svg";

export default function App() {
  return (
    <>
      <header className="bg-black p-6 flex justify-center items-center">
        <img className="w-20" src={nasaLogo} alt="" />
        <h1 className="text-xl font-bold text-slate-100 ml-5">APOD</h1>
      </header>
      <main className="min-h bg-slate-950"></main>
    </>
  );
}

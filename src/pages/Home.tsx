import { Link } from "react-router-dom";
export default function Home() {
  return (
    <main className="bg-slate-700 p-4 text-gray-50 flex flex-col items-center justify-center">
      <section className="flex flex-col gap-1 container">
        <p className="text-justify">
          Welcome to Astro Vault, your NASA API-powered UI for exploring the cosmos. Dive into a wealth of data and
          imagery from NASA's archives, seamlessly accessed through our sleek web application.
        </p>
        <h2 className="text-left self-start	font-bold mt-2">Check out available API's:</h2>
        <ul className="self-start">
          <Link to="/apod">
            <li className="hover:bg-slate-900 bg-slate-800 ml-2 list-none cursor-pointer border-solid border-2	border-cyan-700 hover:border-violet-600 rounded p-4 font-bold transition-all">
              Apod (Astronomy Picture of the Day)
            </li>
          </Link>
          <Link to="/marsrovers">
            <li className="hover:bg-slate-900 bg-slate-800 ml-2 mt-2 list-none cursor-pointer border-solid border-2 border-cyan-700 hover:border-violet-600 rounded p-4 font-bold transition-all">
              Mars Rovers
            </li>
          </Link>
        </ul>
      </section>
    </main>
  );
}

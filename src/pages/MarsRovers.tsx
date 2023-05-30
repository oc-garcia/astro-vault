import { useEffect, useState } from "react";
import { fetchMarsRoverManifest, fetchMarsRoverlatest } from "../services/fetchMarsRover";
import { handleDate } from "../services/handleDate";

export default function MarsRovers() {
  const [data, setData] = useState();
  const [perseverance, setPerseverance] = useState();

  const handleDataLatest = async (rover: string) => {
    const roverData = await fetchMarsRoverlatest(rover);
    setData(roverData);
  };

  const handleDataManifest = async (rover: string) => {
    const manifestData = await fetchMarsRoverManifest(rover);
    setPerseverance(manifestData);
  };

  useEffect(() => {
    console.log(data);
    console.log(perseverance);
  }, [data, perseverance]);

  useEffect(() => {
    handleDataManifest("perseverance");
  }, []);

  return (
    <section className="bg-slate-700 p-4 text-gray-50 flex flex-col items-center justify-center gap-1">
      <h2 className="text-left self-start	font-bold mt-2">Pick a rover:</h2>
      <ul className="self-start">
        <li
          className="hover:bg-slate-900 bg-slate-800 ml-2 mt-2 list-none cursor-pointer border-solid border-2 border-cyan-700 hover:border-violet-600 rounded p-4 font-bold transition-all"
          onClick={() => handleDataLatest("perseverance")}>
          <h3>Perseverance</h3>
          <p>Launch: {handleDate("2020-07-30")}</p>
          <p>Landing: {handleDate("2021-02-18")}</p>
          <p>
            Mission status: <span>Active</span>
          </p>
        </li>
        <li
          className="hover:bg-slate-900 bg-slate-800 ml-2 mt-2 list-none cursor-pointer border-solid border-2 border-cyan-700 hover:border-violet-600 rounded p-4 font-bold transition-all"
          onClick={() => handleDataLatest("curiosity")}>
          Curiosity
        </li>
        <li
          className="hover:bg-slate-900 bg-slate-800 ml-2 mt-2 list-none cursor-pointer border-solid border-2 border-cyan-700 hover:border-violet-600 rounded p-4 font-bold transition-all"
          onClick={() => handleDataLatest("opportunity")}>
          Opportunity
        </li>
        <li
          className="hover:bg-slate-900 bg-slate-800 ml-2 mt-2 list-none cursor-pointer border-solid border-2 border-cyan-700 hover:border-violet-600 rounded p-4 font-bold transition-all"
          onClick={() => handleDataLatest("spirit")}>
          Spirit
        </li>
      </ul>
    </section>
  );
}

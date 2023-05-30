import { useEffect, useState } from "react";
import { fetchMarsRover } from "../services/fetchMarsRover";

export default function MarsRovers() {
  const [data, setData] = useState();

  const handleData = async (rover: string) => {
    const roverData = await fetchMarsRover(rover);
    setData(roverData);
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <section className="bg-slate-700 p-4 text-gray-50 flex flex-col items-center justify-center gap-1">
      <h2 className="text-left self-start	font-bold mt-2">Pick a rover:</h2>
      <ul className="self-start">
        <li
          className="hover:bg-slate-900 bg-slate-800 ml-2 mt-2 list-none cursor-pointer border-solid border-2 border-cyan-700 hover:border-violet-600 rounded p-4 font-bold transition-all"
          onClick={() => handleData("curiosity")}>
          Curiosity
        </li>
        <li
          className="hover:bg-slate-900 bg-slate-800 ml-2 mt-2 list-none cursor-pointer border-solid border-2 border-cyan-700 hover:border-violet-600 rounded p-4 font-bold transition-all"
          onClick={() => handleData("opportunity")}>
          Opportunity
        </li>
        <li
          className="hover:bg-slate-900 bg-slate-800 ml-2 mt-2 list-none cursor-pointer border-solid border-2 border-cyan-700 hover:border-violet-600 rounded p-4 font-bold transition-all"
          onClick={() => handleData("spirit")}>
          Spirit
        </li>
      </ul>
    </section>
  );
}

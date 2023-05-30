import { handleDate } from "../../services/handleDate";
import { handleNumberFormat } from "../../services/handleNumberFormat";
import { IManifest } from "../../types/IManifest";

interface IroverCard {
  rover: IManifest;
  onclick: () => void;
  roverString: string;
}

export default function RoverCard({ rover, onclick }: IroverCard) {
  return (
    <li
      onClick={onclick}
      className="hover:bg-slate-900 bg-slate-800 ml-2 mt-2 list-none cursor-pointer border-solid border-2 border-cyan-700 hover:border-violet-600 rounded p-4 font-bold transition-all">
      <h3 className="font-bold">{rover.photo_manifest?.name}</h3>
      <p className="font-normal text-gray-400">Launch: {handleDate(rover.photo_manifest?.launch_date)}</p>
      <p className="text-gray-400 font-normal">Landing: {handleDate(rover.photo_manifest?.landing_date)}</p>
      <p className="text-gray-400 font-normal">
        Mission status: <span>{rover.photo_manifest?.status}</span>
      </p>
      <p className="text-gray-400 font-normal">Last active report: {handleDate(rover.photo_manifest?.max_date)}</p>
      <p className="text-gray-400 font-normal">Sol on Mars: {handleNumberFormat(rover.photo_manifest?.max_sol)}</p>
      <p className="text-gray-400 font-normal">
        Photos taken: {handleNumberFormat(rover.photo_manifest?.total_photos)}
      </p>
    </li>
  );
}

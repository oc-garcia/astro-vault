import { useEffect, useState } from "react";
import { fetchNeows } from "../services/fetchNeows";
import AsteroidCard from "../components/AsteroidCard/AsteroidCard";
import { IAsteroid } from "../types/IAsteroid";

const defaultValue = [{} as IAsteroid];

export default function Asteroids() {
  const [data, setData] = useState(defaultValue);

  const handleData = async () => {
    const neows = await fetchNeows();
    const firstPropertie = Object.keys(neows.near_earth_objects);
    setData(neows.near_earth_objects[`${firstPropertie}`]);
  };

  console.log(data);
  useEffect(() => {
    handleData();
  }, []);

  return (
    <section className="bg-slate-700 p-4 text-gray-50 flex flex-col items-center justify-center gap-1">
      <h2>Asteroids - NeoWs</h2>
      <p>Near Earth Object Web Service</p>
      <ul className="self-start container flex flex-wrap justify-center items-center gap-2">
        {data.map((asteroid: IAsteroid, index) => (
          <AsteroidCard asteroid={asteroid} key={index} />
        ))}
      </ul>
    </section>
  );
}

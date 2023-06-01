import { useEffect, useState } from "react";
import { fetchNeows } from "../services/fetchNeows";

export default function Asteroids() {
  const [data, setData] = useState([]);

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
    <section>
      <h2>Asteroids - NeoWs (Near Earth Object Web Service)</h2>
    </section>
  );
}

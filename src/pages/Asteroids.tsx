import { useEffect, useState } from "react";
import { fetchNeows } from "../services/fetchNeows";
import AsteroidCard from "../components/AsteroidCard/AsteroidCard";
import { IAsteroid } from "../types/IAsteroid";
import Loader from "../components/Loader/Loader";

const defaultValue: IAsteroid[] = [
  {
    asteroid: {
      name: "",
      absolute_magnitude_h: 0,
      is_potentially_hazardous_asteroid: false,
      is_sentry_object: false,
      estimated_diameter: {
        kilometers: {
          estimated_diameter_max: 0,
          estimated_diameter_min: 0,
        },
      },
      close_approach_data: [
        {
          close_approach_date: "",
          miss_distance: {
            kilometers: 0,
          },
          orbiting_body: "",
          relative_velocity: {
            kilometers_per_hour: 0,
          },
        },
      ],
    },
  },
];

export default function Asteroids() {
  const [asteroids, setAsteroids] = useState<IAsteroid[]>(defaultValue);

  const handleData = async () => {
    const neows = await fetchNeows();
    const firstPropertie = Object.keys(neows.near_earth_objects);
    setAsteroids(neows.near_earth_objects[`${firstPropertie}`]);
  };

  console.log(asteroids);

  useEffect(() => {
    handleData();
  }, []);

  return (
    <section className="bg-slate-700 p-4 text-gray-50 flex flex-col items-center justify-center gap-1">
      <h2>Asteroids - NeoWs</h2>
      <p>Near Earth Object Web Service</p>
      {asteroids !== defaultValue ? (
        <ul className="self-start container flex flex-wrap justify-center items-center gap-2">
          {asteroids.map(({ asteroid }, index) => (
            <AsteroidCard asteroid={asteroid} key={index} />
          ))}
        </ul>
      ) : (
        <Loader />
      )}
    </section>
  );
}

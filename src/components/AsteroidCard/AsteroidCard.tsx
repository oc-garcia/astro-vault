import { handleDate } from "../../services/handleDate";
import { handleNumberFormat } from "../../services/handleNumberFormat";
import { IAsteroid } from "../../types/IAsteroid";

export default function AsteroidCard({ asteroid }: IAsteroid) {
  console.log(asteroid)
  return (
    <li className="hover:scale-110 hover:bg-slate-900 bg-slate-800 list-none border-solid border-2 border-blue-700 rounded p-4 transition-all ">
      <h3>Name: {asteroid?.name}</h3>
      <p className="text-gray-400">
        Date of closest point to Earth:{" "}
        {asteroid.close_approach_data !== undefined && handleDate(asteroid?.close_approach_data[0].close_approach_date)}
      </p>
      <p className="text-gray-400">
        Will miss Earth by:{" "}
        {asteroid.close_approach_data !== undefined &&
          handleNumberFormat(Number(asteroid?.close_approach_data[0].miss_distance.kilometers))}{" "}
        km
      </p>
      <p className="text-gray-400">
        Orbiting: {asteroid.close_approach_data !== undefined && asteroid?.close_approach_data[0].orbiting_body}
      </p>
      <p className="text-gray-400">
        Velocity:{" "}
        {asteroid.close_approach_data !== undefined &&
          handleNumberFormat(Number(asteroid?.close_approach_data[0].relative_velocity.kilometers_per_hour))}{" "}
        km/h
      </p>
      <p className="text-gray-400">Absolute magnitude: {asteroid?.absolute_magnitude_h}</p>
      <p className="text-gray-400">Estimated diameter in km:</p>
      <ul className="flex flex-col items-center justify-center gap-1">
        <li className="text-gray-400">Max: {asteroid?.estimated_diameter?.kilometers?.estimated_diameter_max}</li>
        <li className="text-gray-400">Min: {asteroid?.estimated_diameter?.kilometers?.estimated_diameter_min}</li>
      </ul>
      <p className="text-gray-400">
        Potentially Hazardous? {asteroid?.is_potentially_hazardous_asteroid ? "Yes" : "No"}
      </p>
      <p className="text-gray-400">
        Monitored by{" "}
        <a
          className="text-blue-500"
          href="https://cneos.jpl.nasa.gov/sentry/#:~:text=Sentry%20is%20a%20highly%20automated,over%20the%20next%20100%20years."
          target="_blank">
          Sentry
        </a>
        ? {asteroid?.is_sentry_object ? "Yes" : "No"}
      </p>
    </li>
  );
}

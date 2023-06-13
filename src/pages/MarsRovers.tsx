import { useEffect, useState } from "react";
import { fetchMarsRoverManifest, fetchMarsRoverlatest } from "../services/fetchMarsRover";
import RoverCard from "../components/RoverCard/RoverCard";
import { IManifest } from "../types/IManifest";
import Loader from "../components/Loader/Loader";
import { ILatestPhotosArray } from "../types/ILatestPhotos";
import { handleDate } from "../services/handleDate";

const defaultManifest = {
  photo_manifest: {
    name: "",
    landing_date: "",
    launch_date: "",
    status: "",
    max_sol: "",
    total_photos: "",
    max_date: "",
  },
};

const defaultFocus = {
  status: false,
  rover: "",
};

export default function MarsRovers() {
  const [data, setData] = useState<ILatestPhotosArray | undefined>();
  const [perseverance, setPerseverance] = useState<IManifest>(defaultManifest);
  const [curiosity, setCuriosity] = useState<IManifest>(defaultManifest);
  const [opportunity, setOpportunity] = useState<IManifest>(defaultManifest);
  const [spirit, setSpirit] = useState<IManifest>(defaultManifest);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [focus, setFocus] = useState(defaultFocus);

  const handleDataLatest = async (rover: string) => {
    const roverData = await fetchMarsRoverlatest(rover);
    setData(roverData);
    setFocus({
      status: true,
      rover: rover,
    });
  };

  const handleDataManifest = async (rover: string) => {
    const manifestData = await fetchMarsRoverManifest(rover);
    if (rover === "perseverance") {
      setPerseverance(manifestData);
    } else if (rover === "curiosity") {
      setCuriosity(manifestData);
    } else if (rover === "opportunity") {
      setOpportunity(manifestData);
    } else if (rover === "spirit") {
      setSpirit(manifestData);
    }
  };

  useEffect(() => {
    handleDataManifest("perseverance");
    handleDataManifest("curiosity");
    handleDataManifest("opportunity");
    handleDataManifest("spirit");
  }, []);

  useEffect(() => {
    if (
      perseverance.photo_manifest?.name === "Perseverance" &&
      curiosity.photo_manifest?.name === "Curiosity" &&
      opportunity.photo_manifest?.name === "Opportunity" &&
      spirit.photo_manifest?.name === "Spirit"
    ) {
      setIsLoading(true);
    }
  }, [perseverance, curiosity, opportunity, spirit]);

  if (!focus.status) {
    return (
      <section className="bg-slate-700 p-4 text-gray-50 flex flex-col items-center justify-center gap-1">
        <h2 className="text-left self-start	font-bold mt-2">Pick a rover to see latest photos:</h2>
        <ul className="self-start container flex flex-wrap justify-center items-center gap-2">
          {isLoading ? (
            <RoverCard
              rover={perseverance}
              onclick={() => {
                handleDataLatest("perseverance");
              }}
            />
          ) : (
            <Loader />
          )}
          {isLoading ? (
            <RoverCard
              rover={curiosity}
              onclick={() => {
                handleDataLatest("curiosity");
              }}
            />
          ) : (
            <Loader />
          )}
          {isLoading ? (
            <RoverCard
              rover={opportunity}
              onclick={() => {
                handleDataLatest("opportunity");
              }}
            />
          ) : (
            <Loader />
          )}
          {isLoading ? (
            <RoverCard
              rover={spirit}
              onclick={() => {
                handleDataLatest("spirit");
              }}
            />
          ) : (
            <Loader />
          )}
        </ul>
      </section>
    );
  }

  if (focus.status) {
    return (
      <section className="bg-slate-700 p-4 text-gray-50 flex flex-col items-center justify-center gap-1 container">
        <div className="mb-4 flex justify-between items-center container">
          <h2 className="font-bold">{focus.rover.toUpperCase()} latest photos:</h2>
          <svg
            onClick={() => {
              setFocus(defaultFocus);
            }}
            className="hover:border-red-600 hover:bg-slate-900 fill-slate-50 w-10 p-2 bg-slate-800 cursor-pointer border-solid border-2 border-blue-700 rounded"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512">
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
        </div>
        <ul className="self-start container flex flex-wrap justify-center items-center gap-4">
          {data != undefined &&
            data.latest_photos.map((photo, index) => (
              <li key={index}>
                <p>Date of photo: {handleDate(photo.earth_date)}</p>
                <p>Camera: {photo.camera.full_name}</p>
                <img
                  className="border-none min-w-100 min-h-100"
                  src={photo.img_src}
                  alt="Rover img from mars"
                  loading="lazy"
                />
              </li>
            ))}
        </ul>
      </section>
    );
  } else {
    return <h2>An Error has ocurred.</h2>;
  }
}

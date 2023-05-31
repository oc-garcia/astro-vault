import { useEffect, useState } from "react";
import { fetchMarsRoverManifest, fetchMarsRoverlatest } from "../services/fetchMarsRover";
import RoverCard from "../components/RoverCard/RoverCard";
import { IManifest } from "../types/IManifest";
import Loader from "../components/Loader/Loader";

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

const defaultLatestPhotos = {
  latest_photos: []
}

export default function MarsRovers() {
  const [data, setData] = useState(defaultLatestPhotos);
  const [perseverance, setPerseverance] = useState<IManifest>(defaultManifest);
  const [curiosity, setCuriosity] = useState<IManifest>(defaultManifest);
  const [opportunity, setOpportunity] = useState<IManifest>(defaultManifest);
  const [spirit, setSpirit] = useState<IManifest>(defaultManifest);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleDataLatest = async (rover: string) => {
    const roverData = await fetchMarsRoverlatest(rover);
    setData(roverData);
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

  return (
    <section className="bg-slate-700 p-4 text-gray-50 flex flex-col items-center justify-center gap-1">
      <h2 className="text-left self-start	font-bold mt-2">Pick a rover to see latest photos:</h2>
      <ul className="self-start container flex flex-wrap justify-center items-center gap-2	">
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

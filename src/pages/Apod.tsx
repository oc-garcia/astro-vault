import { useEffect, useState } from "react";
import { fetchApod } from "../services/fetchApod";
import { IApod } from "../types/Iapod";
import { handleDate } from "../services/handleDate";
import Loader from "../components/Loader/Loader";

export default function Apod() {
  const [data, setData] = useState<IApod>();

  const handleData = async () => {
    try {
      const apod = await fetchApod();
      setData(apod);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <section className="bg-slate-700 p-4 text-gray-50 flex flex-col items-center justify-center gap-1">
      {data != undefined ? (
        <>
          <h2 className="font-bold text-xl">Astronomy Picture of the Day</h2>
          <p>{handleDate(data.date)}</p>
          <h3 className="font-bold">{data.title}</h3>
          {data.media_type === "image" && <img src={data.hdurl} alt={data.title} />}
          {data.media_type === "video" && (
            <iframe className="aspect-video" width="100%" height="100%" src={data.url}></iframe>
          )}
          <p className="text-justify">{data.explanation}</p>
          {data.copyright && <p className="text-xs mt-2">Image taken by {data.copyright} &copy;</p>}
        </>
      ) : (
        <Loader />
      )}
    </section>
  );
}

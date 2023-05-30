import { useEffect, useState } from "react";
import { fetchApod } from "../services/fetchApod";

interface Idate {
  stringToDate: string
}
interface Iapod {
  copyright: string;
  date: Idate;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
}

export default function Home() {
  const [data, setData] = useState<Iapod>();
  const handleData = async () => {
    const apod = await fetchApod();
    setData(apod);
  };
  useEffect(() => {
    handleData();
  }, []);
  useEffect(() => {
    console.log(data);
  }, [data]);

  const stringToDate: string = data?.date.stringToDate ? new Date(data.date.stringToDate).toLocaleDateString() : "";

  return (
    <main className="bg-slate-700 p-4 text-gray-50">
      <section className="flex flex-col items-center justify-center gap-1">
        <h2 className="font-bold text-xl">Astronomy Picture of the Day</h2>
        {data != undefined && (
          <>
            <p>{stringToDate}</p>
            <h3 className="font-bold">{data.title}</h3>
            <img src={data.hdurl} alt={data.title} />
            <p className="text-justify">{data.explanation}</p>
            <p className="text-xs mt-2">Image taken by {data.copyright} &copy;</p>
          </>
        )}
      </section>
    </main>
  );
}

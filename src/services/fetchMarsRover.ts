import axios from "axios";

const apiKey = "cFQ71RN9O4uNlpVkuPR1i7k3SPMLNqzsNqdZ8lSE";

export const fetchMarsRoverlatest = async (rover: string) => {
  const roverApi = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/latest_photos?api_key=${apiKey}`;
  const config = {
    method: "GET",
    url: roverApi,
  };

  try {
    const response = await axios(config);
    const data = response.data;
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const fetchMarsRoverManifest = async (rover: string) => {
  const roverManifestApi = `https://api.nasa.gov/mars-photos/api/v1/manifests/${rover}/?api_key=${apiKey}`;
  const config = {
    method: "GET",
    url: roverManifestApi,
  };

  try {
    const response = await axios(config);
    const data = response.data;
    return data;
  } catch (err) {
    console.error(err);
  }
};

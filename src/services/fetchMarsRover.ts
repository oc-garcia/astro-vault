import axios from "axios";

export const fetchMarsRover = async (rover: string) => {
  const apiKey = "cFQ71RN9O4uNlpVkuPR1i7k3SPMLNqzsNqdZ8lSE";
  const roverApi = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?api_key=${apiKey}`;
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

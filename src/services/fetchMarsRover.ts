import axios from "axios";

export const fetchApod = async () => {
  const apiKey = "cFQ71RN9O4uNlpVkuPR1i7k3SPMLNqzsNqdZ8lSE";
  const apodApi = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
  const config = {
    method: "GET",
    url: apodApi,
  };

  try {
    const response = await axios(config);
    const data = response.data;
    return data;
  } catch (err) {
    console.error(err);
  }
};

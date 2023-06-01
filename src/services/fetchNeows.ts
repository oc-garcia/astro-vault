import axios from "axios";

const apiKey = "cFQ71RN9O4uNlpVkuPR1i7k3SPMLNqzsNqdZ8lSE";
//https://api.nasa.gov/neo/rest/v1/feed?start_date=2023-06-01&end_date=2023-06-01&api_key=cFQ71RN9O4uNlpVkuPR1i7k3SPMLNqzsNqdZ8lSE

export const fetchNeows = async () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const neoFeedApi = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${year}-${month}-${day}&end_date=${year}-${month}-${day}&api_key=${apiKey}`;
  const config = {
    method: "GET",
    url: neoFeedApi,
  };

  try {
    const response = await axios(config);
    const data = response.data;
    return data;
  } catch (err) {
    console.error(err);
  }
};

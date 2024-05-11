import axios from "axios";

const API_KEY = "S1N3fDA23y_hQUTZth1WPkovmsIIT0wVqJFI2s7qIiI";

const instance = axios.create({
  baseURL: "https://api.unsplash.com/",
  client_id: API_KEY,
});

const fetchData = async (query, page) => {
  const { data } = await instance.get(
    `search/photos/?client_id=S1N3fDA23y_hQUTZth1WPkovmsIIT0wVqJFI2s7qIiI&query=${query}&page=${page}&per_page=12`,
  );
  return data;
};

export default fetchData;
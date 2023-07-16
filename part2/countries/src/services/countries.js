import axios from "axios";

const API_URL = "https://studies.cs.helsinki.fi/restcountries/api";

const getAll = () => {
  return axios.get(`${API_URL}/all`);
};

export default { getAll };

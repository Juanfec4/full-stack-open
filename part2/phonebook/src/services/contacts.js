import axios from "axios";

const BASE_URL = "https://phonebook-api-5lr3.onrender.com/api/persons";

const getAll = () => {
  return axios.get(BASE_URL);
};

const create = (newContact) => {
  return axios.post(BASE_URL, newContact);
};

const remove = (id) => {
  return axios.delete(`${BASE_URL}/${id}`);
};

const update = (id, newContact) => {
  return axios.put(`${BASE_URL}/${id}`, newContact);
};
export default { getAll, create, remove, update };

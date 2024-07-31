import axios from "axios";

const API_URL = "http://localhost:3001/persons";

const getAll = () => {
  const request = axios.get(API_URL);
  return request.then((response) => response.data);
};
const deletePerson = (id) => {
  const request = axios.delete(`${API_URL}/${id}`);
  return request.then((response) => {
    response.data;
    console.log("data from services",response.data);
  });
};

export default {
  getAll,
  deletePerson,
};
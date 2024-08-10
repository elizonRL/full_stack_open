import axios from "axios";

const API_URL = "http://localhost:3001/api/persons";
/* http://localhost:3001/api/persons/ */

const getAll = () => {
  const request = axios.get(API_URL);
  return request.then((response) => response.data);
};
const deletePerson = (id) => {
  const request = axios.delete(`${API_URL}/${id}`);
  return request.then((response) => response.data);
};
const editPerson = (id, upDatePhone)=>{
  const request = axios.put(`${API_URL}/${id}`, upDatePhone);
  return request.then(response => response.data);
}

export default {
  getAll,
  deletePerson,
  editPerson
};

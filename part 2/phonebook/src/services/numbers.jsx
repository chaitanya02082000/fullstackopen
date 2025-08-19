import axios from "axios";
const url = "http://localhost:3001/persons";
const getData = () => {
  return axios.get(url).then((x) => x.data);
};
const updateData = (id, obj) => {
  return axios.put(`${url}/${id}`, obj).then((x) => x.data);
};

const createData = (obj) => {
  return axios.post(url, obj).then((response) => response.data);
};

export default { getData, updateData, createData };

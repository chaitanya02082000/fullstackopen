import axios from "axios";
const url = "/api/persons/";
const getData = () => {
  return axios.get(url).then((x) => x.data);
};
const updateData = (id, obj) => {
  return axios.put(`${url}/${id}`, obj).then((x) => x.data);
};

const createData = (obj) => {
  return axios.post(url, obj).then((response) => response.data);
};
const deletedata = (id) => {
  const Newurl = `${url}/${id}`;
  return axios.delete(Newurl).then((x) => x.data);
};

export default { getData, updateData, createData, deletedata };

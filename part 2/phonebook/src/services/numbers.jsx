import axios from "axios";
const baseUrl = "/api/persons";

const getData = () => {
  return axios.get(baseUrl).then((response) => response.data);
};

const updateData = (id, obj) => {
  // Fix the URL construction to avoid double slashes
  return axios
    .put(`${baseUrl}/${id}`, obj)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Update failed:", error);
      throw error;
    });
};

const createData = (obj) => {
  return axios.post(baseUrl, obj).then((response) => response.data);
};

const deletedata = (id) => {
  // Fix the URL construction here too
  return axios.delete(`${baseUrl}/${id}`).then((response) => response.data);
};

export default { getData, updateData, createData, deletedata };

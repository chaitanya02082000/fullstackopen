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

const createData = async (obj) => {
  try {
    const response = await axios.post(baseUrl, obj);
    return response.data;
  } catch (error) {
    console.error("Create person error:", {
      status: error.response?.status,
      data: error.response?.data,
      error: error.message,
    });
    throw error; // Re-throw to be caught in the component
  }
};

const deletedata = (id) => {
  // Fix the URL construction here too
  return axios.delete(`${baseUrl}/${id}`).then((response) => response.data);
};

export default { getData, updateData, createData, deletedata };

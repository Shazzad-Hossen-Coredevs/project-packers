import axios from "axios";
const BASE_URL = "http://localhost:4000";

const config = {
  headers: {
    "Content-Type": "application/json",

  },
  withCredentials: true
};
export const postApi = async (endpoint, body) => {
  try {
    const response = await axios.post(
      `${BASE_URL + "/api" + endpoint}`,
      body,
      config
    );
    return response;
  } catch (err) {
    return {
      status: err.response.status,
      message: err.message,
    };
  }
};
export const getApi = async (endpoint) => {
  try {
    const response = await axios.get(
      `${BASE_URL + "/api" + endpoint}`,

      config
    );
    return response.data;
  } catch (err) {
    return err;
  }
};

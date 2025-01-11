import axios from "axios";

export const Base = {
  api: axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_BACKEND_BASEURL,
    headers: {
      "Content-type": "application/json",
    },
  }),
};

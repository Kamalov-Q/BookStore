import axios from "axios";

export const Base = {
  api: axios.create({
    baseURL: "http://localhost:5555/api",
    headers: {
      "Content-type": "application/json",
    },
  }),
};

import axios from "axios";

const Axios = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3001"
      : "deploy CLOUD ADDRESS",
  timeout: 50000,
});

export default Axios;

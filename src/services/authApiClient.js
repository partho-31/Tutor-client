import axios from "axios";


const authApiClient = axios.create({
  baseURL: "https://tutor-psi-opal.vercel.app/",
});

export default authApiClient;


authApiClient.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `JWT ${JSON.parse(token)?.access}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

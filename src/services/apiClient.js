import axios from "axios";


const apiClient = axios.create({
  baseURL: "https://tutor-psi-opal.vercel.app/",
});

export default apiClient;


// apiClient.interceptors.request.use(
//   function (config) {
//     const token = localStorage.getItem("authToken");
//     if (token) {
//       config.headers.Authorization = `JWT ${JSON.parse(token)?.access}`;
//     }
//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );

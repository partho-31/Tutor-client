import axios from "axios";


const apiClient = axios.create({
  baseURL: "https://tutor-psi-opal.vercel.app/",
});

export default apiClient;




import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://f47c36ebfa378cd79bc44e3ce192bfdd56ce97a4.flowrspot.povio-projects.online",
  headers: {
    "Content-Type": "application/json",
},
withCredentials: true,  
});

export default axiosInstance;
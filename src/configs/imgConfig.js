require("dotenv").config();

const axiosInstance = {
   baseURL:
      process.env.REACT_APP_PUBLIC_PATH ||
      "https://immense-mesa-71524.herokuapp.com/upload/",
};
// axiosInstance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE'
export default axiosInstance;

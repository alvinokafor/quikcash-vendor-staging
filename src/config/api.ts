import axios from "axios";

export const apiInstance = axios.create({
  baseURL: `https://quickcash-test-vendor-api.smartpowerbilling.com/api`,
});
// export const apiInstance = axios.create({
//   baseURL: `${import.meta.env.VITE_BASE_API_URL as string}/api`,
// });

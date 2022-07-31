import axios from "axios";

export const googleMapApi = axios.create({
  baseURL: "https://maps.googleapis.com/maps/api",
});

googleMapApi.interceptors.request.use((config) => ({
  ...config,
  params: {
    key: "AIzaSyBwPEu5L__kmkNdtz5aPIoaoH-BM5aPcVs",
    sensor: true,
    language: "pt",
  },
}));

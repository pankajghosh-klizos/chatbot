import { config } from "@/config";
import axios from "axios";
import store from "store2";

const apiClient = axios.create({
  baseURL: config.backendUrl,
  headers: {
    Accept: "application/json",
    "Content-Type": "multipart/form-data",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = store("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const registerService = (data) => {
  const formData = new FormData();

  for (const [key, value] of Object.entries(data)) {
    formData.append(key, value);
  }

  return apiClient.post("/api/v1/signup/", formData);
};

const loginService = (data) => {
  const formData = new FormData();

  for (const [key, value] of Object.entries(data)) {
    formData.append(key, value);
  }

  return apiClient.post("/api/v1/login/", formData);
};

const getUserDataService = () => {
  return apiClient.get("/api/v1/get-user-info/");
};

const uploadDocumentService = (data) => {
  const formData = new FormData();

  for (const [key, value] of Object.entries(data)) {
    formData.append(key, value);
  }

  return apiClient.post("/api/v1/training/upload/", formData);
};

export {
  registerService,
  loginService,
  getUserDataService,
  uploadDocumentService,
};

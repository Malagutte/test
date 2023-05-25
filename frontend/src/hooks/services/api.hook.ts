import axios from "axios";

export const useApi = () => {
  const api = axios.create({
    baseURL: "http://localhost:8080",
  });

  return {
    get: api.get,
    post: api.post,
    put: api.put,
    del: api.delete,
  };
};

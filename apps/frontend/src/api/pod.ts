import api from "./axios";

export const getPods = async () => {
  const response = await api.get("/pods");
  return response.data;
};
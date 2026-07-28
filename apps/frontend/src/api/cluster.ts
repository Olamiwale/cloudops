import api from "./axios";

export const getClusters = async () => {
  const response = await api.get("/clusters");
  return response.data;
};
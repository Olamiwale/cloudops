import api from "./axios";

export const getOverview = async () => {
  const response = await api.get("/dashboard/overview");
  return response.data;
};
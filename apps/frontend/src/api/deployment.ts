import api from "./axios";

export const getDeployments = async () => {
  const { data } = await api.get("/kubernetes/deployments");
  return data;
};
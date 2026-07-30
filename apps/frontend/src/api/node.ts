import api from "./axios";

export const getNodes = async () => {
  const { data } = await api.get("/kubernetes/nodes");
  return data;
};
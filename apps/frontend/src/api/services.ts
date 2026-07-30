import api from "./axios";

export const getServices = async () => {
  const { data } = await api.get("/kubernetes/services");
  return data;
};
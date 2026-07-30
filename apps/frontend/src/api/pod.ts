import api from "./axios";

export const getPods = async () => {
  const { data } = await api.get("/kubernetes/pods");
  return data;
};


import api from "./axios";

export interface LoginDto {
  email: string;
  password: string;
}

export const login = async (data: LoginDto) => {
  const response = await api.post("/auth/login", data);

  localStorage.setItem("token", response.data.access_token);

  return response.data;
};

export const logout = () => {
  localStorage.removeItem("token");
};
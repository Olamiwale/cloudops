import api from "./axios";

export interface LoginDto {
  email: string;
  password: string;
}

export interface RegisterDto {
  email: string;
  password: string;
  name?: string;
}

export const login = async (data: LoginDto) => {
  const response = await api.post("/auth/login", data);
  localStorage.setItem("token", response.data.access_token);
  return response.data;
};

export const register = async (data: RegisterDto) => {
  const response = await api.post("/auth/register", data);
  return response.data;
};

export const logout = () => {
  localStorage.removeItem("token");
};
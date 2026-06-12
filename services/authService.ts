import { API_BASE, apiRequest, setToken, removeToken } from "./api";

export interface RegisterPayload {
  name: string;
  email: string;
  phone: string;
  password: string;
  passwordConfirm: string;
  role: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface User {
  _id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  isActive?: boolean;
  [key: string]: any;
}

export async function register(payload: RegisterPayload) {
  const data = await apiRequest(`${API_BASE.auth}/users/register`, {
    method: "POST",
    body: JSON.stringify(payload),
  });
  if (data.token) {
    await setToken(data.token);
  }
  return data;
}

export async function login(payload: LoginPayload) {
  const data = await apiRequest(`${API_BASE.auth}/users/login`, {
    method: "POST",
    body: JSON.stringify(payload),
  });
  if (data.token) {
    await setToken(data.token);
  }
  return data;
}

export async function getMe(): Promise<User> {
  const data = await apiRequest(`${API_BASE.auth}/users/me`, {
    method: "GET",
  });
  return data.data?.user || data.user || data;
}

export async function updateMe(payload: Partial<User>) {
  return apiRequest(`${API_BASE.auth}/users/updateMe`, {
    method: "PATCH",
    body: JSON.stringify(payload),
  });
}

export async function deleteMe() {
  const data = await apiRequest(`${API_BASE.auth}/users/deleteMe`, {
    method: "DELETE",
  });
  await removeToken();
  return data;
}

export async function logout() {
  await removeToken();
}
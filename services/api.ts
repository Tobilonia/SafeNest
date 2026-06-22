import * as SecureStore from "expo-secure-store";

const LOCAL_IP = "10.159.149.158";

export const API_BASE = {
  properties: `http://${LOCAL_IP}:5000/api/properties`,
  messaging: `http://${LOCAL_IP}:5001/api/v1`,
  auth: `http://${LOCAL_IP}:5001/api/v1`,
};

export const SOCKET_URL = `ws://${LOCAL_IP}:5001`;

const TOKEN_KEY = "safenest_token";

export async function getToken() {
  return SecureStore.getItemAsync(TOKEN_KEY);
}

export async function setToken(token: string) {
  return SecureStore.setItemAsync(TOKEN_KEY, token);
}

export async function removeToken() {
  return SecureStore.deleteItemAsync(TOKEN_KEY);
}

export async function apiRequest(url: string, options: RequestInit = {}) {
  const token = await getToken();
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(options.headers as Record<string, string>),
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  const response = await fetch(url, { ...options, headers });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }
  return data;
}
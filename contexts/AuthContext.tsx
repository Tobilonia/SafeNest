import React, { createContext, useContext, useEffect, useState } from "react";
import { getToken } from "../services/api";
import {
    login as apiLogin,
    logout as apiLogout,
    register as apiRegister,
    getMe,
    LoginPayload,
    RegisterPayload,
    User,
} from "../services/authService";

interface AuthContextType {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  login: (payload: LoginPayload) => Promise<void>;
  register: (payload: RegisterPayload) => Promise<void>;
  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function bootstrap() {
      try {
        const stored = await getToken();
        if (stored) {
          setToken(stored);
          const me = await getMe();
          setUser(me);
        }
      } catch {
        setUser(null);
        setToken(null);
      } finally {
        setIsLoading(false);
      }
    }
    bootstrap();
  }, []);

  async function login(payload: LoginPayload) {
    const data = await apiLogin(payload);
    setToken(data.token);
    const me = await getMe();
    setUser(me);
  }

  async function register(payload: RegisterPayload) {
    const data = await apiRegister(payload);
    setToken(data.token);
    const me = await getMe();
    setUser(me);
  }

  async function logout() {
    await apiLogout();
    setUser(null);
    setToken(null);
  }

  async function refreshUser() {
    const me = await getMe();
    setUser(me);
  }

  return (
    <AuthContext.Provider
      value={{ user, token, isLoading, login, register, logout, refreshUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
}

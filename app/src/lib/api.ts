// cliente HTTP (fetch)

// src/lib/api.ts
import { API_BASE_URL } from "./config";

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(API_BASE_URL + path, {
    headers: { "Content-Type": "application/json" },
    ...init,
  });

  if (!res.ok) {
    // intenta leer el texto para darte un error útil
    const text = await res.text().catch(() => "");
    throw new Error(text || `HTTP ${res.status}`);
  }

  // por si el endpoint devuelve 204 No Content
  if (res.status === 204) return undefined as unknown as T;

  return res.json() as Promise<T>;
}

export const api = {
  get:  <T>(p: string) => request<T>(p),
  post: <T>(p: string, body: unknown) =>
    request<T>(p, { method: "POST", body: JSON.stringify(body) }),
  put:  <T>(p: string, body: unknown) =>
    request<T>(p, { method: "PUT", body: JSON.stringify(body) }),
  del:  <T>(p: string) =>
    request<T>(p, { method: "DELETE" }),
};

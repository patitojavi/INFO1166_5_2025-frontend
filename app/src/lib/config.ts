// envs (API_BASE_URL, USE_MOCKS)

// src/lib/config.ts
// Si no defines .env, usará http://localhost:8081 por defecto
export const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL ??
  "http://localhost:8081") as string;

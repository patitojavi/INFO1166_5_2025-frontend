import { Navigate } from "react-router-dom";
import { auth } from "../lib/auth";

export default function Protected({ children }: { children: JSX.Element }) {
  if (!auth.isLoggedIn()) return <Navigate to="/login" replace />;
  return children;
}

import { createBrowserRouter } from "react-router-dom";
import BNE from "../pages/BNE";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Experience from "../pages/Experience";
import Login from "../pages/Login";
import Register from "../pages/Register.tsx";
import Protected from "./Protected";

export const router = createBrowserRouter([
  { path: "/", element: <BNE /> },                
  { path: "/home", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },   
  { path: "/perfil", element: <Protected><Profile /></Protected> },
  { path: "/experiencia", element: <Protected><Experience /></Protected> },
]);




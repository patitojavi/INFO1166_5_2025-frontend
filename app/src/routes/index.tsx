import { createBrowserRouter } from "react-router-dom";
import BNE from "../pages/BNE";
import Home from "../pages/Home";
import Experience from "../pages/Experience";
import Login from "../pages/Login";
import Register from "../pages/Register.tsx";
import Protected from "./Protected";
import Dashboard from "../pages/Dashboard.tsx";

export const router = createBrowserRouter([
  { path: "/", element: <BNE /> },                
  { path: "/home", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },   
  { path: "/experiencia", element: <Protected><Experience /></Protected> },
  { path: "/perfil", element: <Protected><Dashboard /></Protected> },
  
  

]);




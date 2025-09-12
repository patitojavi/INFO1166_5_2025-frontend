import { createBrowserRouter } from "react-router-dom";
import BNE from "../pages/BNE";

import Login from "../pages/Login";
import Register from "../pages/Register.tsx";
import Protected from "./Protected";
import Dashboard from "../pages/Dashboard.tsx";

export const router = createBrowserRouter([
  { path: "/", element: <BNE /> },                
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },   
  { path: "/perfil", element: <Protected><Dashboard /></Protected> },
  
  

]);




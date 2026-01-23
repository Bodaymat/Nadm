import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ConfirmRegister from "./pages/ConfirmRegister";
import ConfirmEmail from "./pages/ConfirmEmail";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/register/password", element: <ConfirmRegister /> },
  { path: "/register/confirm-email", element: <ConfirmEmail /> },
  { path: "/dashboard", element: <div> Dashboard </div> },
]);

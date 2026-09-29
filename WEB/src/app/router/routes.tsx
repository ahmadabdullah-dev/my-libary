import { createBrowserRouter } from "react-router";
import App from "../App";
import LandingPage from "../LandingPage";
import LoginForm from "../../features/auth/LoginForm";
import RegisterForm from "../../features/auth/RegisterForm";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <LandingPage /> },

      { path: "register", element: <RegisterForm /> },
      { path: "login", element: <LoginForm /> },
    ],
  },
]);

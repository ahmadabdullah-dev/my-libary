import { createBrowserRouter } from "react-router";
import App from "../App";
import LandingPage from "../LandingPage";
import LoginForm from "../../features/auth/LoginForm";
import RegisterForm from "../../features/auth/RegisterForm";
import ForgetPasswordForm from "../../features/auth/ForgetPassword";
import ErrorPage from "../../features/errors/ErrorPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <LandingPage /> },

      { path: "register", element: <RegisterForm /> },
      { path: "login", element: <LoginForm /> },
      { path: "forget-password", element: <ForgetPasswordForm /> },
    ],
  },
]);

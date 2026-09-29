import { createBrowserRouter } from "react-router";
import App from "../App";
import LandingPage from "../LandingPage";
import LoginForm from "../../features/auth/LoginForm";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <LandingPage /> },
   
      { path: "login", element: <LoginForm /> },
    ],
  },
]);

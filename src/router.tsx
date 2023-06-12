import { Navigate, createBrowserRouter } from "react-router-dom";
import DashboardLayout from "./component/DashboardLayout";
import MainLayout from "./component/MainLayout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/login";
import { Result } from "antd";

export const publicRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Navigate to="/login" /> },
      { path: "login", element: <Login /> },
    ],
  },
]);
export const protectedRouter = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Navigate to="/dashboard" /> },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "*",
        element: <Result status="404" />,
      },
    ],
  },
]);

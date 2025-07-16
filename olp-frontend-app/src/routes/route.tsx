import { lazy } from "react";

const LoginPage = lazy(() => import("pages/LoginPage"));
const DashboardPage = lazy(() => import("pages/DashboardPage"));
const LoginSuccessPage = lazy(() => import("pages/LoginSuccessPage"));

export interface AppRoute {
	path: string,
	element: JSX.Element,
	layout: "dashboard" | "none";
}

export const routes: AppRoute[] = [
  {
    path: "/login",
    element: <LoginPage />,
    layout: "dashboard",
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
    layout: "dashboard",
  },
  {
    path: "/login-success",
    element: <LoginSuccessPage />,
    layout: "dashboard",
  },
];

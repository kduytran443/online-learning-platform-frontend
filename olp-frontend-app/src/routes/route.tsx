import { lazy } from "react";

const LoginPage = lazy(() => import("pages/LoginPage"));
const DashboardPage = lazy(() => import("pages/DashboardPage"));

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
];

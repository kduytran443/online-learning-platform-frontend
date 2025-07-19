import { lazy } from "react";

const LoginPage = lazy(() => import("pages/LoginPage"));
const DashboardPage = lazy(() => import("pages/DashboardPage"));
const LoginSuccessPage = lazy(() => import("pages/LoginSuccessPage"));
const ClassIntroPage = lazy(() => import("pages/ClassIntroPage"));

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
    path: "/class/:classId/intro",
    element: <ClassIntroPage />,
    layout: "dashboard",
  },
  {
    path: "/login-success",
    element: <LoginSuccessPage />,
    layout: "dashboard",
  },
];

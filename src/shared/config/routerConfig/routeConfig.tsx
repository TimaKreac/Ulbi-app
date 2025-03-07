import AboutPage from "pages/AboutPage";
import MainPage from "pages/MainPage";
import { RouteProps } from "react-router-dom";

export enum AppRouter {
  MAIN = "main",
  ABOUT = "about",
}

export const routePath: Record<AppRouter, string> = {
  [AppRouter.MAIN]: "/",
  [AppRouter.ABOUT]: "/about",
};

export const routeConfig: Record<AppRouter, RouteProps> = {
  [AppRouter.MAIN]: {
    path: routePath[AppRouter.MAIN],
    element: <MainPage />,
  },
  [AppRouter.ABOUT]: {
    path: routePath[AppRouter.ABOUT],
    element: <AboutPage />,
  },
};

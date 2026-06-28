import { createBrowserRouter, type RouteObject } from "react-router";

import { AppLayout } from "@/components/layout/AppLayout";
import routesManifest from "@/config/routes.json";
import { AboutPage } from "@/pages/about/AboutPage";
import { HomePage } from "@/pages/home/HomePage";
import { NotFoundPage } from "@/pages/not-found/NotFoundPage";

export type RouteId = "home" | "about";

export interface AppRouteManifestItem {
  id: RouteId;
  path: string;
  labelKey: string;
  includeInSitemap: boolean;
  showInNavigation: boolean;
  changefreq?: string;
  priority?: string;
}

export const appRoutes = routesManifest as AppRouteManifestItem[];

const routeElements: Record<RouteId, RouteObject["element"]> = {
  home: <HomePage />,
  about: <AboutPage />,
};

const pageRoutes: RouteObject[] = appRoutes.map((route) => {
  if (route.path === "/") {
    return {
      index: true,
      element: routeElements[route.id],
    };
  }

  return {
    path: route.path.replace(/^\//, ""),
    element: routeElements[route.id],
  };
});

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFoundPage />,
    children: [...pageRoutes, { path: "*", element: <NotFoundPage /> }],
  },
]);

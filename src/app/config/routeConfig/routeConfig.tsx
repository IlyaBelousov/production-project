import React, { ReactNode } from 'react';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { MainPage } from 'pages/MainPage';

enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  NOTFOUND = 'notfound',
}

type RoutePathType = Record<AppRoutes, string>;

export const RoutePath: Partial<RoutePathType> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOTFOUND]: '*',
};

type RouteConfig = {
  path: string,
  element: ReactNode
};

export const routeConfig: Partial<Record<AppRoutes, RouteConfig>> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.NOTFOUND]: {
        path: RoutePath.notfound,
        element: <NotFoundPage />,
    },
} as const;

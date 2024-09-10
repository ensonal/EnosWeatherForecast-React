import { lazy, Suspense } from "react";
import { Navigate, Routes as ReactRouterRoutes, Route } from "react-router-dom";

export function Routes() {
    const routeConfig = [
        {
            path: "/",
            component: lazy(() => import("../pages/HomePage/HomePage"))
        },
        {
            path: "/home",
            component: lazy(() => import("../pages/HomePage/HomePage"))
        },
        {
            path: "/forecast",
            component: lazy(() => import("../pages/ForecastPage/ForecastPage"))
        }
    ];

    return (
        <ReactRouterRoutes>
            <Route>
                {routeConfig.map(({ path, component: Component }) => (
                    <Route
                        key={path}
                        path={path}
                        element={
                            <Suspense>
                                <Component />
                            </Suspense>
                        }
                    />
                ))}
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
        </ReactRouterRoutes>
    );
}

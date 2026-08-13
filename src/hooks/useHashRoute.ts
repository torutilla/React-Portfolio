import { useEffect, useState } from "react";
import { parseHashRoute, type AppRoute } from "../lib/projectRoutes.ts";

function getCurrentRoute(): AppRoute {
  return parseHashRoute(window.location.hash);
}

export function useHashRoute(): AppRoute {
  const [route, setRoute] = useState<AppRoute>(getCurrentRoute);

  useEffect(() => {
    const onHashChange = () => setRoute(getCurrentRoute());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return route;
}

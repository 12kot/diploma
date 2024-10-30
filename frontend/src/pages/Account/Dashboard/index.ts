import { lazy } from "react";

export * from "./Dashboard";

export const DashboardLazy = lazy(() =>
    import("./Dashboard").then(({ Dashboard }) => ({
      default: Dashboard,
    }))
  );

import { lazy } from "react";

export * from "./Home";

export const HomeLazy = lazy(() =>
  import("./Home").then(({ Home }) => ({
    default: Home,
  }))
);

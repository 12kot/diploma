import { lazy } from "react";

export * from "./NotFound";

export const NotFoundLazy = lazy(() =>
  import("./NotFound").then(({ NotFound }) => ({
    default: NotFound,
  }))
);

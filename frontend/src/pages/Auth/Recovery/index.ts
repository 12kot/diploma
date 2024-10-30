import { lazy } from "react";

export * from "./Recovery";

export const RecoveryLazy = lazy(() =>
  import("./Recovery").then(({ Recovery }) => ({
    default: Recovery,
  }))
);

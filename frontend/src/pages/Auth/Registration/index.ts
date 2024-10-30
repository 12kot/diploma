import { lazy } from "react";

export * from "./Registration";

export const RegistrationLazy = lazy(() =>
  import("./Registration").then(({ Registration }) => ({
    default: Registration,
  }))
);

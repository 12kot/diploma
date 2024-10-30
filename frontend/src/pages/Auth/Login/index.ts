import { lazy } from "react";

export * from "./Login";

export const LoginLazy = lazy(() =>
  import("./Login").then(({ Login }) => ({
    default: Login,
  }))
);

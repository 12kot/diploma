import { lazy } from "react";

export * from "./LoginForm";

export const LoginFormLazy = lazy(() =>
  import("./LoginForm").then(({ LoginForm }) => ({
    default: LoginForm,
  }))
);

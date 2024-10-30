import { lazy } from "react";

export * from "./RecoveryForm";

export const RecoveryFormLazy = lazy(() =>
  import("./RecoveryForm").then(({ RecoveryForm }) => ({
    default: RecoveryForm,
  }))
);

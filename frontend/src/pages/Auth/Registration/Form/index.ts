import { lazy } from "react";

export * from "./RegistrationForm";

export const RegistrationFormLazy = lazy(() =>
  import("./RegistrationForm").then(({ RegistrationForm }) => ({
    default: RegistrationForm,
  }))
);

import { lazy } from "react";

export * from "./components";
export * from "./Auth";
export * from "./Login";
export * from "./Recovery";
export * from "./Registration";

export const AuthHolderLazy = lazy(() =>
    import("./Auth").then(({ AuthHolder }) => ({
      default: AuthHolder,
    }))
  );


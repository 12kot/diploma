import { lazy } from 'react';

export * from './Cargo';

export const CargoLazy = lazy(() =>
  import('./Cargo').then(({ Cargo }) => ({
    default: Cargo,
  })),
);

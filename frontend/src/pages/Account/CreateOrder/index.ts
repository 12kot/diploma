import { lazy } from 'react';

export * from './CreateOrder';

export const CreateOrderLazy = lazy(() =>
  import('./CreateOrder').then(({ CreateOrder }) => ({
    default: CreateOrder,
  })),
);

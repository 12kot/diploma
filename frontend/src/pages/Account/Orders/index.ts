import { lazy } from 'react';

export * from './Orders';

export const OrdersLazy = lazy(() =>
  import('./Orders').then(({ Orders }) => ({
    default: Orders,
  })),
);

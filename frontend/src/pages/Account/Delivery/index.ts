import { lazy } from 'react';

export * from './Delivery';

export const DeliveryLazy = lazy(() =>
  import('./Delivery').then(({ Delivery }) => ({
    default: Delivery,
  })),
);

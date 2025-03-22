import { lazy } from 'react';

export * from './Address';

export const AddressLazy = lazy(() =>
  import('./Address').then(({ Address }) => ({
    default: Address,
  })),
);

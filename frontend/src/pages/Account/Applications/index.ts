import { lazy } from 'react';

export * from './Applications';

export const ApplicationsLazy = lazy(() =>
  import('./Applications').then(({ Applications }) => ({
    default: Applications,
  })),
);

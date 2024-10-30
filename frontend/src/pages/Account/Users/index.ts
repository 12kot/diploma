import { lazy } from 'react';

export * from './Users';

export const UsersLazy = lazy(() =>
  import('./Users').then(({ Users }) => ({
    default: Users,
  })),
);

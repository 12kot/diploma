import { lazy } from 'react';

export * from './Profile';

export const ProfileLazy = lazy(() =>
  import('./Profile').then(({ Profile }) => ({
    default: Profile,
  })),
);

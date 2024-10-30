import { lazy } from 'react';

export * from './Settings';

export const SettingsLazy = lazy(() =>
  import('./Settings').then(({ Settings }) => ({
    default: Settings,
  })),
);

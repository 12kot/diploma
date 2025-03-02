import { ReactElement, Suspense } from 'react';
import { Route, Routes as ReactRoutes } from 'react-router-dom';

import { Loader } from 'components';

import { routes } from './router.config';
import { ProtectedRoute } from './ProtectedRoute';

export const Routes = (): ReactElement => {
  return (
    <Suspense fallback={<Loader center />}>
      <ReactRoutes>
        {Object.keys(routes).map((key) => {
          return (
            <Route
              key={key}
              path={key}
              element={<ProtectedRoute permissions={routes[key].permissions}>{routes[key].element}</ProtectedRoute>}
            />
          );
        })}
      </ReactRoutes>
    </Suspense>
  );
};

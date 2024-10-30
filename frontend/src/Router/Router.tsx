import { ReactElement, Suspense } from 'react';
import { Route, Routes as ReactRoutes } from 'react-router-dom';

import { Loader } from 'components';

import { routes } from './router.config';
import { ProtectedRoute } from './ProtectedRoute';

//УДАЛИТЬ
import Test from 'pages/test';

export const Routes = (): ReactElement => {
  return (
    <Suspense fallback={<Loader center />}>
      <ReactRoutes>
        {/** Удалить */}
        <Route path="test" element={<Test />} />
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

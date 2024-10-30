import { ReactNode, Suspense } from 'react';

import { Loader } from 'components';

import { AuthPreview } from './components';

interface Props {
  children: ReactNode;
}

export const AuthHolder = ({ children }: Props) => {
  return (
    <div className="auth-container">
      <Suspense fallback={<Loader />}>{children}</Suspense>
      <AuthPreview />
    </div>
  );
};

import { ReactNode, Suspense } from 'react';

import { Loader } from 'components';

import { AuthPreview } from './components';

import styles from './styles.module.scss';

interface Props {
  children: ReactNode;
}

export const AuthHolder = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <Suspense
        fallback={
          <div className={styles.loader}>
            <Loader />
          </div>
        }>
        {children}
      </Suspense>

      <AuthPreview />
    </div>
  );
};

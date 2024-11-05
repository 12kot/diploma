import { ReactNode } from 'react';

import { cx } from 'features';

import styles from './styles.module.scss';

type EIndicatorType = 'red' | 'blue' | 'filter' | 'border';

interface Props {
  type?: EIndicatorType;
  icon?: ReactNode;
  children: ReactNode;
}

export const Indicator = ({ icon, children, type }: Props) => {
  return (
    <p
      className={cx(
        styles.container,
        type === 'red' && styles.red,
        type === 'blue' && styles.blue,
        type === 'filter' && styles.filter,
        type === 'border' && styles.border,
      )}>
      {icon} {children}
    </p>
  );
};

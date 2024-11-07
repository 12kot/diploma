import { ReactNode } from 'react';

import { cx } from 'features';

import styles from './styles.module.scss';

type EIndicatorType = 'red' | 'blue' | 'filter' | 'filter_active' | 'border';

interface Props {
  type?: EIndicatorType;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

export const Indicator = ({ icon, children, type, className }: Props) => {
  return (
    <p
      className={cx(
        styles.container,
        className,
        type === 'red' && styles.red,
        type === 'blue' && styles.blue,
        type === 'filter' && styles.filter,
        type === 'filter_active' && styles.filter_active,
        type === 'border' && styles.border,
      )}>
      {icon} {children}
    </p>
  );
};

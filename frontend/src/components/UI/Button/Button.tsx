import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

import { cx } from 'features';

import styles from './styles.module.scss';

type EButtonType = 'transparent' | 'default' | 'border' | 'filter' | 'filter_active' | 'red';

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children?: ReactNode;
  buttonType?: EButtonType;
}

export const Button = ({ className, children, buttonType, ...rest }: Props) => {
  return (
    <button
      className={cx(
        styles.container,
        className,
        buttonType === 'transparent' && styles.transparent,
        buttonType === 'default' && styles.default,
        buttonType === 'border' && styles.border,
        buttonType === 'filter' && styles.filter,
        buttonType === 'filter_active' && styles.filter_active,
        buttonType === 'red' && styles.red,
      )}
      {...rest}>
      {children}
    </button>
  );
};

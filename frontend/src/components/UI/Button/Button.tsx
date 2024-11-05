import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

import { cx } from 'features';

import styles from './styles.module.scss';

type EButtonType = 'transparent' | 'default' | 'border' | 'filter' | 'filter_active' | 'red';

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children?: ReactNode;
  buttonType?: EButtonType | EButtonType[];
}

export const Button = ({ className, children, buttonType, ...rest }: Props) => {
  const buttonStyles = buttonType ? (typeof buttonType === 'string' ? [buttonType] : buttonType) : buttonType;

  return (
    <button
      className={cx(
        styles.container,
        className,
        buttonStyles?.includes('transparent') && styles.transparent,
        buttonStyles?.includes('default') && styles.default,
        buttonStyles?.includes('border') && styles.border,
        buttonStyles?.includes('filter') && styles.filter,
        buttonStyles?.includes('filter_active') && styles.filter_active,
        buttonStyles?.includes('red') && styles.red,
      )}
      {...rest}>
      {children}
    </button>
  );
};

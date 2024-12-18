import { ReactNode } from 'react';

import styles from "./styles.module.scss";
import { cx } from 'features';

interface Props {
  children?: ReactNode;
  upperCase?: boolean;
  className?: string;
}

interface ClampProps {
  children?: ReactNode;
  clamp?: 1 | 2 | 5;
  className?: string;
}

export const H1 = ({ children, upperCase, className }: Props) => {
  return <h1 className={`${className} ${upperCase && styles.uppercase}}`}>{children}</h1>;
};

export const H2 = ({ children, upperCase, className }: Props) => {
  return <h2 className={`${className} ${upperCase && styles.uppercase}`}>{children}</h2>;
};

export const H3 = ({ children, upperCase, className }: Props) => {
  return <h3 className={`${className} ${upperCase && styles.uppercase}`}>{children}</h3>;
};

export const Clamp = ({ children, className, clamp }: ClampProps) => {
  return <p className={cx(className, styles.clamp, clamp && styles[`clamp${clamp}`])}>{children}</p>;
}

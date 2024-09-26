import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  upperCase?: boolean;
  className?: string;
}

export const H1 = ({ children, upperCase, className }: Props) => {
  return <h1 className={`${className} ${upperCase && 'uppercase'}`}>{children}</h1>;
};

export const H2 = ({ children, upperCase, className }: Props) => {
  return <h2 className={`${className} ${upperCase && 'uppercase'}`}>{children}</h2>;
};

export const H3 = ({ children, upperCase, className }: Props) => {
  return <h3 className={`${className} ${upperCase && 'uppercase'}`}>{children}</h3>;
};

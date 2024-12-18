import { cx } from 'features';
import { Header, ProfileMenu } from 'components';

import styles from './styles.module.scss';

interface Props {
  header?: boolean;
  leftHolder?: boolean;
  children?: React.ReactNode;
}

export const AppHolder = ({ header, children, leftHolder }: Props) => {
  return (
    <main className={cx(styles.container, header && styles.header, leftHolder && styles.account)}>
      {header && <Header />}
      {leftHolder && <ProfileMenu />}
      {children}
    </main>
  );
};

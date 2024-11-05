import { ReactNode } from 'react';

import { cx } from 'features';
import { Button, Indicator } from 'components';

import styles from './styles.module.scss';

interface Props {
  onClick: () => void;
  icon: ReactNode;
  text: string;
  isActive?: boolean;
  count?: number;
}

export const NavButton = ({ onClick, icon, text, isActive, count }: Props) => {
  return (
    <li className={styles.container}>
      <Button buttonType="default" className={cx(styles.button, isActive && styles.active)} onClick={onClick}>
        <span className={styles.leftIndicator} />
        <span className={cx(styles.text, styles.flex)}>
          {icon}
          <span className={cx(styles.clamp, styles.text)}>{text}</span>
        </span>
        {count && <Indicator>{count}</Indicator>}
      </Button>
    </li>
  );
};

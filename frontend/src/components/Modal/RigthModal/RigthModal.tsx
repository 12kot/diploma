import { ReactNode } from 'react';

import { APP_ROUTES } from 'Router';
import { Button, Logo } from 'components';
import { cx, useEscapeKey, useHandleNavigation } from 'features';

import { SVGClose } from 'assets';

import styles from './styles.module.scss';

interface Props {
  children?: ReactNode;
  className?: string;
  isOpen: boolean;
  setIsOpen: () => void;
}

export const RigthModal = ({ children, isOpen, setIsOpen, className }: Props) => {
  useEscapeKey(() => setIsOpen(), isOpen);
  const { handleNavigate } = useHandleNavigation(setIsOpen);

  return (
    <div className={cx(styles.container, isOpen && styles.active)} onClick={setIsOpen}>
      <div className={cx(styles.content, className)} onClick={(e) => e.stopPropagation()}>
        <header className={styles.header}>
          <Button buttonType="default" className={styles.logo} onClick={() => handleNavigate(APP_ROUTES.HOME)}>
            <Logo />
          </Button>
          <Button buttonType="default" className={styles.close} onClick={setIsOpen}>
            <SVGClose />
          </Button>
        </header>
        {children}
      </div>
    </div>
  );
};

import { ReactNode } from 'react';

import { BgImage } from 'components';
import { cx, useEscapeKey } from 'features';

import { modalTilesImg } from 'assets';

import styles from './styles.module.scss';

interface Props {
  children?: ReactNode;
  className?: string;
  isOpen: boolean;
  setIsOpen: () => void;
}

export const Modal = ({ children, isOpen, setIsOpen, className }: Props) => {
  useEscapeKey(() => setIsOpen(), isOpen);

  return (
    <div className={cx(styles.container, isOpen && styles.active)} onClick={setIsOpen}>
      <div className={cx(styles.content, className)} onClick={(e) => e.stopPropagation()}>
        {children}
        <BgImage image={modalTilesImg} isTop />
      </div>
    </div>
  );
};

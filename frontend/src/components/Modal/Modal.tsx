import { ReactNode } from 'react';

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
        <img src={modalTilesImg} loading="lazy" className="top-0 left-0 absolute w-full z--1" />
      </div>
    </div>
  );
};

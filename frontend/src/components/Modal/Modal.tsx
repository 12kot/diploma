import { ReactNode } from 'react';

import { useEscapeKey } from 'features';

import modalTiles from 'assets/img/modalTiles.png';

interface Props {
  children?: ReactNode;
  className?: string;
  isOpen: boolean;
  setIsOpen: () => void;
}

export const Modal = ({ children, isOpen, setIsOpen, className }: Props) => {
  useEscapeKey(() => setIsOpen(), isOpen);

  return (
    <div className={`flex-center modal ${isOpen && '-active'}`} onClick={setIsOpen}>
      <div className={`modal__content ${className}`} onClick={(e) => e.stopPropagation()}>
        {children}
        <img src={modalTiles} loading="lazy" className="top-0 left-0 absolute w-full z--1" />
      </div>
    </div>
  );
};

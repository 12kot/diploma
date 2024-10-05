import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  isOpen: boolean;
  setIsOpen: () => void;
}

export const Modal = ({ children, isOpen, setIsOpen }: Props) => {
  return (
    <div className={`flex-center modal ${isOpen && '-active'}`} onClick={setIsOpen}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

import { useEscapeKey } from 'features';
import { ReactNode } from 'react';

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
      </div>
    </div>
  );
};

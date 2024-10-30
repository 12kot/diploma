import { ReactNode } from 'react';

import { APP_ROUTES } from 'Router';
import { H1 } from 'components';
import { useEscapeKey, useHandleNavigation } from 'features';

import { SVGClose } from 'assets';

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
    <div className={`rigth-modal ${isOpen && '-active'}`} onClick={setIsOpen}>
      <div className={`rigth-modal__content ${className}`} onClick={(e) => e.stopPropagation()}>
        <header className="rigth-modal__header flex-between align-center">
          <button className="--default rigth-modal__header--logo" onClick={() => handleNavigate(APP_ROUTES.HOME)}>
            <H1>Logo</H1>
          </button>
          <button className="rigth-modal__header--close --default h-full flex-center" onClick={setIsOpen}>
            <SVGClose />
          </button>
        </header>
        {children}
      </div>
    </div>
  );
};

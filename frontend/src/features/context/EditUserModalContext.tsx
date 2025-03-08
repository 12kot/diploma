import { createContext, useContext, useState, ReactNode } from 'react';

import { EUserRole } from 'features';
import { EditUserModal } from 'components/DashboardUsers';
import { useAppSelector } from 'store';

interface ModalContextProps {
  isModalOpen: boolean;
  openUserModal: (isCreate?: boolean) => void;
  closeUserModal: () => void;
  isCreate: boolean;
}

const EditUserModalContext = createContext<ModalContextProps | undefined>(undefined);

export const EditUserModalProvider = ({ children }: { children: ReactNode }) => {
  const user = useAppSelector(state => state.user);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isCreate, setIsCreate] = useState<boolean>(false);

  const openUserModal = (create?: boolean) => {
    if (user?.role !== EUserRole.Admin) return;
    setIsCreate(!!create);
    setIsModalOpen(true);
  };

  const closeUserModal = () => setIsModalOpen(false);

  return (
    <EditUserModalContext.Provider value={{ isModalOpen, openUserModal, closeUserModal, isCreate }}>
      {children}
      {user?.role === EUserRole.Admin && (
        <EditUserModal isOpen={isModalOpen} setIsOpen={closeUserModal} isCreate={isCreate} />
      )}
    </EditUserModalContext.Provider>
  );
};

export const useEditUserModal = () => {
  const context = useContext(EditUserModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

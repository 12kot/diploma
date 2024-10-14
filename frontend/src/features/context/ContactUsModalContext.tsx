import { createContext, useContext, useState, ReactNode } from 'react';

import ContactUsModal from 'components/ProfileMenu/ContactUs';

interface ModalContextProps {
  isContactUsModalOpen: boolean;
  setContactUsModalOpen: () => void;
}

const ContactUsModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ContactUsModalProvider = ({ children }: { children: ReactNode }) => {
  const [isContactUsModalOpen, setIsModalOpen] = useState<boolean>(false);

  const setContactUsModalOpen = () => {
    setIsModalOpen((v) => !v);
  };

  return (
    <ContactUsModalContext.Provider value={{ isContactUsModalOpen, setContactUsModalOpen }}>
      {children}
      <ContactUsModal isOpen={isContactUsModalOpen} setIsOpen={setContactUsModalOpen} />
    </ContactUsModalContext.Provider>
  );
};

export const useContactUsModal = () => {
  const context = useContext(ContactUsModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

import { useTranslation } from 'react-i18next';

import { H1, H2, Modal } from 'components';
import { IUserRole, useAuth } from 'features';

import SVGEdit from 'assets/svg/SVGEdit';
import { useState } from 'react';

interface Props {
  name: string;
  isBanned: boolean;
  role: IUserRole;
}

export const UserName = ({ name, isBanned, role }: Props) => {
  const { user } = useAuth();
  const { t } = useTranslation('dashboard');
  const [isModalOpen, setIsOpenModal] = useState<boolean>(false);

  return (
    <section className="flex-between gap align-center">
      <EditUserModal isOpen={isModalOpen} setIsOpen={() => setIsOpenModal((v) => !v)} />
      <div className="flex gap info align-center">
        <img src="https://cdn3.pixelcut.app/1/3/profile_picture_1728ecf2bd.jpg" className="rounded" />
        <div className="flex-col gap-mini">
          <H1>{name}</H1>
          <div className="flex gap-mini">
            <p className="indicator">{role}</p>
            {isBanned && <p className="indicator -red">{t('common.banned', { date: '23.09.2024' })}</p>}
          </div>
        </div>
      </div>
      {user?.role === 'admin' && (
        <button className="--default --border square rounded p-0" onClick={() => setIsOpenModal((v) => !v)}>
          <SVGEdit />
        </button>
      )}
    </section>
  );
};

interface ModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
}
const EditUserModal = ({ isOpen, setIsOpen }: ModalProps) => {
  return (
    <Modal setIsOpen={setIsOpen} isOpen={isOpen} className="flex-col gap user-edit-modal">
      <header>
        <H2>Edit Hanna Kisel Profile</H2>
      </header>
      <form className="flex-col gap">
        <div className="flex-col gap user-edit-modal-content">
          <section className="flex gap-mini">
            <input type="text" placeholder="Name" className="w-full" />
            <input type="text" placeholder="Surname" className="w-full" />
          </section>
          <input type="email" placeholder="Email" />
          <input type="phone" placeholder="Phone number" />
          <section className="flex gap-mini">
            <input type="text" placeholder="Country" className="w-full" />
            <input type="text" placeholder="City" className="w-full" />
          </section>
          <textarea rows={8} placeholder="Self-description" />
        </div>
      </form>
      <section className="flex gap-mini user-edit-modal-actions">
        <button className="--transparent w-full" onClick={setIsOpen}>Close</button>
        <button className="w-full">Save</button>
      </section>
    </Modal>
  );
};

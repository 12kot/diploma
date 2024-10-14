import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { AllRoles, EUserRole } from 'features';

import { H2 } from 'components/Font';
import { Modal } from 'components/Modal';

interface ModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  isCreate?: boolean;
}

export const EditUserModal = ({ isOpen, setIsOpen, isCreate }: ModalProps) => {
  const { t } = useTranslation(['dashboard', 'common']);
  const [activeRole, setActiveRole] = useState<EUserRole>(EUserRole.Admin);

  return (
    <Modal setIsOpen={setIsOpen} isOpen={isOpen} className="flex-col gap user-edit-modal">
      <header>
        <H2>{isCreate ? t('dashboard:editProfile.create') : t('dashboard:editProfile.edit', { name: 'Hanna Kisel' })}</H2>
      </header>
      <form className="flex-col gap">
        <div className="flex-col gap">
          <section className="flex gap-mini">
            <input type="text" placeholder="Name" className="w-full" />
            <input type="text" placeholder="Surname" className="w-full" />
          </section>
          <section className="flex w-full user-edit-modal-roles">
            {AllRoles(t).map((role, i) => (
              <button
                className={`--default ${role.value === activeRole && 'user-edit-modal-roles-active'} nowrap`}
                key={i}
                type="button"
                onClick={() => setActiveRole(role.value)}>
                {role.name}
              </button>
            ))}
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
        <button className="--transparent w-full" onClick={setIsOpen}>
          {t('common:buttons.cancel')}
        </button>
        <button className="w-full">{isCreate ? t('common:buttons.createUser') : t('common:buttons.save')}</button>
      </section>
    </Modal>
  );
};

import { useTranslation } from 'react-i18next';

import { EUserRole, getNavLinksByUserRole, useEditUserModal } from 'features';

import { SVGCreate } from 'assets';

import { MenuListContainer, NavButton } from '../components';
import styles from './styles.module.scss';

interface Props {
  userRole: EUserRole;
  setIsOpen: () => void;
}

export const MainSection = ({ userRole, setIsOpen }: Props) => {
  const { openUserModal } = useEditUserModal();
  const { t } = useTranslation(['menuHolder', 'common']);

  const handleOpenUserModal = () => {
    setIsOpen();
    openUserModal(true);
  };

  return (
    <>
      <p className={styles.container}>{t('menuHolder:sections.main')}</p>
      <MenuListContainer navItems={getNavLinksByUserRole(userRole, t)} setIsOpen={setIsOpen} />
      {userRole === EUserRole.Admin && (
        <NavButton onClick={() => handleOpenUserModal()} icon={<SVGCreate />} text={t('common:buttons.createUser')} />
      )}
    </>
  );
};

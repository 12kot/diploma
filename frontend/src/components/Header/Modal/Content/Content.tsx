import { useTranslation } from 'react-i18next';

import { GeneralNavItems, useAuth } from 'features';

import { ProfileSection } from './ProfileSection';
import { MainSection } from './MainSection';
import { AboutSection } from './AboutSection';
import { MenuListContainer } from './components';
import { LanguageSection } from './LanguageSection';
import { LoginSection } from './LoginSection';

import styles from './styles.module.scss';

export const Content = ({ setIsOpen }: { setIsOpen: () => void }) => {
  const { user } = useAuth();
  const { t } = useTranslation(['menuHolder']);

  return (
    <ul className={styles.container}>
      {user && <ProfileSection setIsOpen={setIsOpen} />}
      {user?.role && <MainSection setIsOpen={setIsOpen} userRole={user.role} />}
      <AboutSection setIsOpen={setIsOpen} />
      <MenuListContainer navItems={GeneralNavItems(t)} setIsOpen={setIsOpen} />
      <LanguageSection />
      {!user && <LoginSection setIsOpen={setIsOpen} />}
    </ul>
  );
};

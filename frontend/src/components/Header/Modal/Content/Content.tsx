import { GeneralNavItems } from 'features';

import { ProfileSection } from './ProfileSection';
import { MainSection } from './MainSection';
import { MenuListContainer } from './components';
import { LanguageSection } from './LanguageSection';
import { LoginSection } from './LoginSection';

import styles from './styles.module.scss';
import { useAppSelector } from 'store';

export const Content = ({ setIsOpen }: { setIsOpen: () => void }) => {
  const user = useAppSelector(state => state.user);

  return (
    <ul className={styles.container}>
      {!!user.name && <ProfileSection setIsOpen={setIsOpen} />}
      {user?.role && <MainSection setIsOpen={setIsOpen} userRole={user.role} />}
      <MenuListContainer navItems={GeneralNavItems()} setIsOpen={setIsOpen} />
      <LanguageSection />
      {!user.name && <LoginSection setIsOpen={setIsOpen} />}
    </ul>
  );
};

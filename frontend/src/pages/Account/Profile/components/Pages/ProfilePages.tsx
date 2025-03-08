import { useTranslation } from 'react-i18next';

import { cx, getProfilePagesByUserRole, IProfilePage, IProfilePageType } from 'features';

import styles from "./styles.module.scss";
import { Button } from 'components';
import { useAppSelector } from 'store';

interface Props {
  activePage: IProfilePageType;
  setActivePage: (v: IProfilePageType) => void;
}

export const ProfilePages = ({ activePage, setActivePage }: Props) => {
  const user = useAppSelector(state => state.user);
  const { t } = useTranslation('dashboard');

  if (!user?.role) return <></>;

  return (
    <section className={styles.container}>
      {getProfilePagesByUserRole(user?.role, t).map((page) => (
        <Page key={page.id} {...page} activePage={activePage} setActivePage={setActivePage} />
      ))}
    </section>
  );
};

interface PageProps extends IProfilePage, Props {}

const Page = ({ activePage, type, name, setActivePage }: PageProps) => {
  return (
    <div className={cx(styles.page, type === activePage && styles.active)}>
      <Button buttonType={'default'} onClick={() => setActivePage(type)}>
        {name}
      </Button>
      <div className={styles.activeHolder} />
    </div>
  );
};

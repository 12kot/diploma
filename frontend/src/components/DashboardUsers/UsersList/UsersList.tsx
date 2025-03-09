import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { cx, IUser } from 'features';
import { Button, Indicator } from 'components';

import { SVGFavorite } from 'assets';

import styles from './styles.module.scss';

interface Props {
  users: IUser[];

  activeUserId?: number;
  setOpenUser: (id: number) => void;
}

export const UsersList = ({ users, activeUserId, setOpenUser }: Props) => {
  const memoUsers = useMemo(() => {
    return users.map((user) => <User key={user.id} activeUserId={activeUserId} setOpenUser={setOpenUser} {...user} />);
  }, [users, activeUserId, setOpenUser]);

  return <section className={styles.container}>{memoUsers}</section>;
};

interface UserProps extends IUser {
  activeUserId?: number;
  setOpenUser: (id: number) => void;
}

const User = ({ activeUserId, id, setOpenUser, name, enabled }: UserProps) => {
  const { t } = useTranslation('dashboard');

  return (
    <div className={cx(styles.item, activeUserId === id && styles.active)}>
      <section className={styles.info}>
        <div className={styles.name}>
          <b>{name}</b>
          {!enabled && <Indicator type="red">{t('common.banned', { date: '23.09.2024' })}</Indicator>}
        </div>
      </section>
      <Button buttonType={['default', 'border']} className={styles.favorite}>
        <SVGFavorite />
      </Button>
      <button className={styles.button} onClick={() => setOpenUser(id)} />
    </div>
  );
};

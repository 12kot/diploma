import { IUser } from 'features';
import { Labels } from 'components';

import SVGFavorite from 'assets/svg/SVGFavorite';
import { useTranslation } from 'react-i18next';

interface Props {
  users: IUser[];

  activeUserId?: number;
  setOpenUser: (id: number) => void;
}

export const UsersList = ({ users, activeUserId, setOpenUser }: Props) => {
  return (
    <section className="users-container-list flex-col w-full">
      {users.map((user) => (
        <User key={user.id} activeUserId={activeUserId} setOpenUser={setOpenUser} {...user} />
      ))}
    </section>
  );
};

interface UserProps extends IUser {
  activeUserId?: number;
  setOpenUser: (id: number) => void;
}

const User = ({ activeUserId, id, setOpenUser, name, labels, isBanned }: UserProps) => {
  const { t } = useTranslation('dashboard');

  return (
    <div className={`flex-between item w-full align-center ${activeUserId === id && 'active'}`}>
      <button className="--default flex-col gap-mini w-full item-link h-full" onClick={() => setOpenUser(id)}>
        <div className="flex gap-mini align-center">
          <b>{name}</b>
          {isBanned && <p className="indicator -red">{t('common.banned', { date: '23.09.2024' })}</p>}
        </div>
        <Labels labels={labels} />
      </button>
      <button className="--default --border square rounded p-0">
        <SVGFavorite />
      </button>
    </div>
  );
};

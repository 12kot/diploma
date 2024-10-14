import { IUser } from 'features';

import { ActiveUserPages } from './Pages';
import { UserName } from './Name/UserName';
import { UserLabels } from './UserLabels/UserLabels';

import tilesImage from 'assets/img/tiles.png';

import styles from './styles.module.scss';

interface Props {
  user: IUser;
}

export const ActiveUser = ({ user }: Props) => {
  return (
    <div className={`${styles.container} grow-2 w-full relative`}>
      <div className="flex-col gap-mid h-full">
        <UserLabels labels={user.labels} />
        <UserName name={user.name} isBanned={user.isBanned} role={user.role} />
        <ActiveUserPages activeUser={user} />
      </div>
      <img src={tilesImage} loading="lazy" className="top-0 left-0 absolute w-full z--1" />
    </div>
  );
};

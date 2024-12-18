import { IUser } from 'features';

import { BgImage } from 'components';
import { ActiveUserPages } from './Pages';
import { UserName } from './Name/UserName';
import { UserLabels } from './UserLabels/UserLabels';

import tilesImage from 'assets/img/tiles.png';

import styles from './styles.module.scss';

interface Props {
  user: IUser;
  closeActiveUser: () => void;
}

export const ActiveUser = ({ user, closeActiveUser }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <UserLabels labels={user.labels} closeActiveUser={closeActiveUser} />
        <UserName name={user.name} isBanned={user.isBanned} role={user.role} />
        <ActiveUserPages activeUser={user} />
      </div>
      <BgImage image={tilesImage} isTop />
    </div>
  );
};

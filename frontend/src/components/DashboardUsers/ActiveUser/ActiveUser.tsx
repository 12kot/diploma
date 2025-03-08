import { EUserRole, IUser } from 'features';

import { BgImage } from 'components';
import { ActiveUserPages } from './Pages';
import { UserName } from './Name/UserName';

import tilesImage from 'assets/img/tiles.png';

import styles from './styles.module.scss';
import { UserLabels } from './UserLabels';

interface Props {
  user: IUser;
  userRole: EUserRole;
  closeActiveUser: () => void;
}

export const ActiveUser = ({ user, userRole, closeActiveUser }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <UserLabels closeActiveUser={closeActiveUser} />
        <UserName userRole={userRole} name={user.name} isBanned={!user.enabled} role={user.role} />
        <ActiveUserPages activeUser={user} />
      </div>
      <BgImage image={tilesImage} isTop />
    </div>
  );
};

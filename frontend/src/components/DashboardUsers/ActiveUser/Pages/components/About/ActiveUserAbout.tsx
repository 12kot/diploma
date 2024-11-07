import { EUserRole, useAuth } from 'features';

import { Actions } from './Actions';
import { UserLabels } from './Labels';
import { Contacts } from './Contacts';
import { Description } from './Description';

import styles from './styles.module.scss';

interface Props {
  role: EUserRole;
  isBanned: boolean;
}

export const ActiveUserAbout = ({ role, isBanned }: Props) => {
  const { user } = useAuth();

  return (
    <div className={styles.container}>
      <Contacts />
      <UserLabels />
      <Description />
      {user?.role === EUserRole.Admin && <Actions role={role} isBanned={isBanned} />}
    </div>
  );
};

import { EUserRole } from 'features';

import { Actions } from './Actions';
import { UserLabels } from './Labels';
import { Contacts } from './Contacts';
import { Description } from './Description';

import styles from './styles.module.scss';
import { useAppSelector } from 'store';

interface Props {
  role: EUserRole;
  isBanned: boolean;
}

export const ActiveUserAbout = ({ role, isBanned }: Props) => {
  const user = useAppSelector(state => state.user);

  return (
    <div className={styles.container}>
      <Contacts email={user.email} phone={user.phoneNumber} />
      <UserLabels />
      <Description />
      {user?.role === EUserRole.Admin && <Actions role={role} isBanned={isBanned} />}
    </div>
  );
};

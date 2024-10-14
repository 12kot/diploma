import { ReactNode } from 'react';

import { ProfileMenu } from 'components';

interface Props {
  children: ReactNode;
}

const AccountHolder = ({ children }: Props) => {
  return (
    <div className="account-container">
      <ProfileMenu />
      {children}
    </div>
  );
};

export default AccountHolder;

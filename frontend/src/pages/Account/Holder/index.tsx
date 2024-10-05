import { ReactNode } from 'react';
import AccountMenu from '../Menu';

interface Props {
  children: ReactNode;
}

const AccountHolder = ({ children }: Props) => {
  return (
    <div className="account-container">
      <AccountMenu />
      {children}
    </div>
  );
};

export default AccountHolder;
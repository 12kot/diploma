import { H2 } from 'components';

import AccountHolder from '../Holder';

const Settings = () => {
  return (
    <AccountHolder>
      <div className="settings flex-col gap">
        <div className="flex-col gap-mini">
          <H2>Change Password</H2>
          <span>Please enter your current password to change your password</span>
        </div>
        <form className="flex-col gap">
          <input type="password" placeholder="Current password" />
          <input type="password" placeholder="New password" />
          <button>Update Password</button>
        </form>
      </div>
    </AccountHolder>
  );
};

export default Settings;

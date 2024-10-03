import { useAuth } from 'features';

import AdminMenu from '../Dashboard/Admin/Menu';

import SVGLogout from 'assets/svg/SVGLogout';

const AccountMenu = () => {
  const { user } = useAuth();

  return (
    <div className="account-container--menu">
      {user?.role === 'admin' && <AdminMenu />}

      <section className="account-container--menu__end">
        <div className="account-container--menu__support flex-center">
          <div className="account-container--menu__support -item flex-col gap-mini">
            <p>
              <b>Customer Support</b>
            </p>
            <p className="text-12 text-secondary">Have any troubles wile using our system</p>
            <button className="mt-8" onClick={() => {}}>
              Contact Us
            </button>
          </div>
        </div>
        <button className="account-container--menu__logout --default w-full mt-8">
          <SVGLogout />
          <p>Log Out</p>
        </button>
      </section>
    </div>
  );
};

export default AccountMenu;

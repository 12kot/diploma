import { useAuth } from 'features';

import DashboardAdminMenu from '../Admin/Menu';

import SVGLogout from 'assets/svg/SVGLogout';

const DashboardMenu = () => {
  const { user } = useAuth();

  return (
    <div className="dashboard-container--menu">
      {user?.role === 'admin' && <DashboardAdminMenu />}

      <section className="dashboard-container--menu__end">
        <div className="dashboard-container--menu__support flex-center">
          <div className="dashboard-container--menu__support -item flex-col gap-mini">
            <p>
              <b>Customer Support</b>
            </p>
            <p className="text-12 text-secondary">Have any troubles wile using our system</p>
            <button className="mt-8" onClick={() => {}}>
              Contact Us
            </button>
          </div>
        </div>
        <button className="dashboard-container--menu__logout --default w-full mt-8">
          <SVGLogout />
          <p>Log Out</p>
        </button>
      </section>
    </div>
  );
};

export default DashboardMenu;

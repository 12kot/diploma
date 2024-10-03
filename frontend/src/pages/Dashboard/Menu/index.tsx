import { NavLink } from 'react-router-dom';

import SVGDashboard from 'assets/svg/SVGDashboard';
import SVGCompany from 'assets/svg/SVGCompany';
import SVGFavorite from 'assets/svg/SVGFavorite';
import SVGUser from 'assets/svg/SVGUser';
import SVGSettings from 'assets/svg/SVGSettings';
import SVGInbox from 'assets/svg/SVGInbox';
import SVGLogout from 'assets/svg/SVGLogout';

const DashboardMenu = () => {
  return (
    <div className="dashboard-container--menu">
      <ul>
        <li className="active">
          <div className="active-indicator" />
          <SVGDashboard />
          <NavLink to="/">Дашбоард</NavLink>
        </li>
        <li>
          <div className="active-indicator" />
          <SVGCompany />
          <NavLink to="/companies">Компании</NavLink>
        </li>
        <li>
          <div className="active-indicator" />
          <SVGFavorite />
          <NavLink to="/carriers">Сохранённые компании</NavLink>
        </li>
        <li>
          <div className="active-indicator" />
          <SVGUser />
          <NavLink to="/profile">Профиль</NavLink>
        </li>
        <li>
          <div className="active-indicator" />
          <SVGSettings />
          <NavLink to="/settings">Настройки</NavLink>
        </li>
        <li>
          <div className="active-indicator" />
          <SVGInbox />
          <NavLink to="/applications">Заявки</NavLink>
        </li>
      </ul>

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

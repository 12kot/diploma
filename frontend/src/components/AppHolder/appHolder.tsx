import SVGMenu from 'assets/svg/SVGMenu';
import { H1 } from 'components';
import AccountMenu from 'pages/Account/Menu';
import { NavLink } from 'react-router-dom';

interface Props {
  header?: boolean;
  leftHolder?: boolean;
  children?: React.ReactNode;
}

export const AppHolder = ({ header, children, leftHolder }: Props) => {
  return (
    <main className={`app-container ${header && `--header`} ${leftHolder && `account-container`}`}>
      {header && <Header />}
      {leftHolder && <AccountMenu />}
      {children}
    </main>
  );
};

const Header = () => {
  return (
    <header className="app-header">
      <section className="app-header__logo">
        <H1>
          <NavLink to="" className="decoration-none">
            Logo
          </NavLink>
        </H1>
        <button className="--transparent" aria-label="Switch to Russian">
          <img src="https://flagsapi.com/US/flat/64.png" alt="en" loading="lazy" />
          <p>EN</p>
        </button>
      </section>
      <section className="app-header__actions">
        <ul>
          <li>
            <NavLink to="" className="decoration-none">
              Option 1
            </NavLink>
          </li>
          <li>
            <NavLink to="" className="decoration-none">
              Option 2
            </NavLink>
          </li>
        </ul>
        <div className="app-header__actions--profile">
          <button className="--transparent" aria-label="Create trip">
            <p>Create trip</p>
          </button>
          <div className="app-header__actions--user">
            <img src="https://cdn3.pixelcut.app/1/3/profile_picture_1728ecf2bd.jpg" alt="profile" loading="lazy" />
            <div className="app-header__actions--user--info">
              <p>
                <b>Hanna Kisel</b>
              </p>

              <div className="flex items-center gap-mini">
                <div className="main-color-bg rounded w-4" />
                <p className="app-header__actions--user--info --status">Logistator</p>
              </div>
            </div>
          </div>
        </div>
        <div className="app-header__actions--border" />
        <button className="app-header__actions--menu --default">
          <SVGMenu />
        </button>
      </section>
    </header>
  );
};

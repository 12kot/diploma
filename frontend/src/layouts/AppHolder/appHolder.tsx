import { Header, ProfileMenu } from 'components';

interface Props {
  header?: boolean;
  leftHolder?: boolean;
  children?: React.ReactNode;
}

export const AppHolder = ({ header, children, leftHolder }: Props) => {
  return (
    <main className={`app-container ${header && `--header`} ${leftHolder && `account-container`}`}>
      {header && <Header />}
      {leftHolder && <ProfileMenu />}
      {children}
    </main>
  );
};

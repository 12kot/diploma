import { ReactNode } from 'react';
import DashboardMenu from '../Menu';

interface Props {
  children: ReactNode;
}

const DashboardHolder = ({ children }: Props) => {
  return (
    <div className="dashboard-container">
      <DashboardMenu />
      {children}
    </div>
  );
};

export default DashboardHolder;

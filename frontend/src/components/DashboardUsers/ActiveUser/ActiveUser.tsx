import tilesImage from 'assets/img/tiles.png';

import { ActiveUserPages } from './Pages';
import { UserName } from './Name/UserName';
import { UserLabels } from './UserLabels/UserLabels';

interface Props {
  supervisore: {
    id: number;
    name: string;
    labels: {
      id: number;
      icon: JSX.Element;
      name: string;
    }[];
  };
}

export const ActiveUser = ({ supervisore }: Props) => {
  return (
    <div className="users-container -user grow-2 w-full relative">
      <div className="flex-col gap-mid h-full">
        <UserLabels labels={supervisore.labels} />
        <UserName name={supervisore.name} />
        <ActiveUserPages />
      </div>
      <img src={tilesImage} loading="lazy" className="top-0 left-0 absolute w-full z--1" />
    </div>
  );
};

import tilesImage from 'assets/img/tiles.png';

import SupervisoresLabels from './SupervisoresLabels';
import CompanyName from './Name';
import Pages from './Pages';

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

const ActiveSupervisore = ({ supervisore }: Props) => {
  return (
    <div className="account-container--companies -company grow-2 w-full relative">
      <div className="flex-col gap-mid h-full">
        <SupervisoresLabels labels={supervisore.labels} />
        <CompanyName name={supervisore.name} />
        <Pages />
      </div>
      <img src={tilesImage} loading="lazy" className="top-0 left-0 absolute w-full z--1" />
    </div>
  );
};

export default ActiveSupervisore;

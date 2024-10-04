import { Labels } from 'components';

import SVGShare from 'assets/svg/SVGShare';
import SVGFavorite from 'assets/svg/SVGFavorite';

interface Props {
  labels: {
    id: number;
    icon: JSX.Element;
    name: string;
  }[];
}

const SupervisoresLabels = ({ labels }: Props) => {
  return (
    <section className="flex-between align-center">
      <Labels labels={labels} />
      <div className="flex gap-mini">
        <button className="--default p-0">
          <SVGShare />
        </button>
        <button className="--default p-0">
          <SVGFavorite />
        </button>
      </div>
    </section>
  );
};

export default SupervisoresLabels;

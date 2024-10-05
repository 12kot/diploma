import { Labels } from 'components';
import { ILabel } from 'features';

import SVGShare from 'assets/svg/SVGShare';
import SVGFavorite from 'assets/svg/SVGFavorite';

interface Props {
  labels: ILabel[]
}

export const UserLabels = ({ labels }: Props) => {
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

import { Labels } from 'components';
import { ILabel } from 'features';

import { SVGShare, SVGFavorite, SVGClose } from 'assets';

interface Props {
  labels: ILabel[];
  closeActiveUser: () => void;
}

export const UserLabels = ({ labels, closeActiveUser }: Props) => {
  return (
    <section className="flex-between align-center">
      <div className="flex align-center gap">
        <button className="--transparent square p-0" onClick={closeActiveUser}>
          <SVGClose />
        </button>
        <Labels labels={labels} />
      </div>
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

import CompanyLabels from '../../Company/Labels';

import SVGShare from 'assets/svg/SVGShare';
import SVGFavorite from 'assets/svg/SVGFavorite';

interface Props {
  labels: {
    id: number;
    icon: JSX.Element;
    name: string;
  }[];
}

const Labels = ({ labels }: Props) => {
  return (
    <section className="flex-between align-center">
      <CompanyLabels labels={labels} />
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

export default Labels;

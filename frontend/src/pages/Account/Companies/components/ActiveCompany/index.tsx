import tilesImage from 'assets/img/tiles.png';
import { H1, HR } from 'components';
import CompanyLabels from '../Company/Labels';

import SVGFavorite from 'assets/svg/SVGFavorite';
import SVGLink from 'assets/svg/SVGLink';
import SVGShare from 'assets/svg/SVGShare';

interface Props {
  company: {
    id: number;
    name: string;
    labels: {
      id: number;
      icon: JSX.Element;
      name: string;
    }[];
  };
}

const ActiveCompany = ({ company }: Props) => {
  return (
    <div className="account-container--companies -company grow-2 w-full relative">
      <div className="flex-col gap-mid">
        <section className="flex-between align-center">
          <CompanyLabels labels={company.labels} />
          <div className="flex gap-mini">
            <button className="--default p-0">
              <SVGShare />
            </button>
            <button className="--default p-0">
              <SVGFavorite />
            </button>
          </div>
        </section>
        <section className="flex-between gap align-center">
          <div className="flex gap info align-center">
            <img
              src="https://cdn.logoworks.com/wp-content/uploads/2017/06/Untitled-2-640x360-1.png"
              className="rounded"
            />
            <H1>{company.name}</H1>
          </div>
          <button className="--default --border square rounded p-0">
            <SVGLink />
          </button>
        </section>
        <HR />
        <section>
          ТУТ БУДЕТ ЧАТ, а также кнопка, которая откроет дополнительное меню с действиями (забанить и тд. Также там
          будет инфа о компании)
        </section>
      </div>
      <img src={tilesImage} loading="lazy" className="top-0 left-0 absolute w-full z--1" />
    </div>
  );
};

export default ActiveCompany;

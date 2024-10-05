import SVGFavorite from 'assets/svg/SVGFavorite';
import { Labels } from 'components';

interface Props {
  forwarders: {
    id: number;
    name: string;
    labels: {
      id: number;
      icon: JSX.Element;
      name: string;
    }[];
  }[];

  activeCompanyId?: number;
  setOpenCompane: (id: number) => void;
}

export const UsersList = ({ forwarders, activeCompanyId, setOpenCompane }: Props) => {
  return (
    <section className="users-container-list flex-col w-full">
      {forwarders.map((item) => (
        <div className={`flex-between item w-full align-center ${activeCompanyId === item.id && 'active'}`} key={item.id}>
          <button
            className="--default flex-col gap-mini w-full item-link h-full"
            onClick={() => setOpenCompane(item.id)}>
            <p>
              <b>{item.name}</b>
            </p>
            <Labels labels={item.labels} />
          </button>
          <button className="--default --border square rounded p-0">
            <SVGFavorite />
          </button>
        </div>
      ))}
    </section>
  );
};

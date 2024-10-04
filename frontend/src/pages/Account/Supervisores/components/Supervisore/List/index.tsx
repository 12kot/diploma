import { Labels } from "components";

interface Props {
  supervisores: {
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

const SupervisoresList = ({ supervisores, activeCompanyId, setOpenCompane }: Props) => {
  return (
    <section className="account-container--companies -list flex-col w-full">
      {supervisores.map((item) => (
        <button
          className={`--default item w-full flex-col gap-mini ${activeCompanyId === item.id && 'active'}`}
          onClick={() => setOpenCompane(item.id)}
          key={item.id}>
          <p>
            <b>{item.name}</b>
          </p>
          <Labels labels={item.labels} />
        </button>
      ))}
    </section>
  );
};

export default SupervisoresList;

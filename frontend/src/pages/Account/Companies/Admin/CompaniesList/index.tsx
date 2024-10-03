import SVGEarth from 'assets/svg/SVGEarth';
import SVGTrendingUp from 'assets/svg/SVGTrendingUp';

const companies = [
  {
    id: 1,
    name: 'Hanna Cargo Limited',
    labels: [
      {
        id: 1,
        icon: <SVGTrendingUp />,
        name: '5.0',
      },
      {
        id: 2,
        icon: <SVGEarth />,
        name: 'Wroclaw Poland',
      },
    ],
  },
  {
    id: 2,
    name: 'Nikitoshas LCD',
    labels: [
      {
        id: 1,
        icon: <SVGTrendingUp />,
        name: '1000 Orders',
      },
      {
        id: 2,
        icon: <SVGTrendingUp />,
        name: '5.0',
      },
      {
        id: 3,
        icon: <SVGEarth />,
        name: 'Hrodna, Belarus',
      },
    ],
  },
  {
    id: 3,
    name: 'Company name 1',
    labels: [
      {
        id: 1,
        icon: <SVGTrendingUp />,
        name: '1000 Orders',
      },
    ],
  },
  {
    id: 4,
    name: 'Company name 2',
    labels: [
      {
        id: 1,
        icon: <SVGTrendingUp />,
        name: '1000 Orders',
      },
    ],
  },
  {
    id: 5,
    name: 'Company name 3',
    labels: [
      {
        id: 1,
        icon: <SVGTrendingUp />,
        name: '1000 Orders',
      },
    ],
  },
];

const CompaniesList = () => {
  return (
    <section className="account-container--companies -list flex-col">
      {companies.map((item) => (
        <button className="--default item w-full flex-col gap-mini" key={item.id}>
          <p>
            <b>{item.name}</b>
          </p>
          <div className="flex gap-mini">
            {item.labels.map((label) => (
              <div className="flex gap-mini indicator -border" key={label.id}>
                {label.icon}
                <p>{label.name}</p>
              </div>
            ))}
          </div>
        </button>
      ))}
    </section>
  );
};

export default CompaniesList;

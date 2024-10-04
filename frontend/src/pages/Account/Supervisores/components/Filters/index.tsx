const filters = [
  {
    id: 1,
    name: 'All',
    count: 256,
    value: 'all',
  },
  {
    id: 2,
    name: 'Filter 1',
    count: 0,
    value: 'Filter 1',
  },
  {
    id: 3,
    name: 'Filter 2',
    count: 3,
    value: 'Filter 2',
  },
  {
    id: 4,
    name: 'Filter 3',
    count: 200,
    value: 'Filter 3',
  },
  {
    id: 5,
    name: 'Filter 4',
    count: 53,
    value: 'Filter 4',
  },
];

const SupervisoresFilters = () => {
  return (
    <div className="account-container--companies -filters flex gap-mini w-full">
      {filters.map((item) => (
        <button className={`--filter ${item.id === 1 && `--active`}`} key={item.id}>
          <p>{item.name}</p>
          <p className={`indicator -filter ${item.id === 1 && `-active`}`}>{item.count}</p>
        </button>
      ))}
    </div>
  );
};

export default SupervisoresFilters;

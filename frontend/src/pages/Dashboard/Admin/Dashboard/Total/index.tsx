import SVGArrowUp from 'assets/svg/SVGArrowUp';
import SVGArrowDown from 'assets/svg/SVGArrowDown';

const totalInfo = [
  { id: 1, name: 'Total Companies', value: '255', percentage: 100 },
  { id: 2, name: 'Active Companies', value: '240', percentage: 30 },
  { id: 3, name: 'Total orders', value: '3945' },
  { id: 4, name: 'Last month orders', value: '1203', percentage: -10 },
  { id: 5, name: 'Earned', value: '1.3M', percentage: 25 },
  { id: 5, name: 'Paid out', value: '4.6M', percentage: 13 },
];

const TotalInfo = () => {
  return (
    <section className="dashboard-container--dashboard -total flex-between rounded-16">
      {totalInfo.map((item) => (
        <div className="flex-col gap-mini" key={item.id}>
          <p className="text-12 text-secondary">{item.name}</p>
          <b className="text-h1">{item.value}</b>
          {item.percentage && (
            <div className={`indicator ${item.percentage < 0 && `-red`}`}>
              {item.percentage >= 0 ? <SVGArrowUp /> : <SVGArrowDown />}
              <p>{Math.abs(item.percentage)}%</p>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default TotalInfo;

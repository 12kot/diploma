import { H2, LineChart } from 'components';

const OrdersChart = () => {
  const data = {
    labels: ['Sep', '5', '9', '13', '17', '21', '25', '29', 'Oct'],
    datasets: [
      { label: 'New orders', data: [50, 85, 76, 80, 90, 120, 123, 115, 130], borderColor: '#137547' },
      { label: 'Completed orders', data: [100, 90, 96, 101, 120, 103, 98, 105, 107], borderColor: '#401cdf' },
    ],
  };

  return (
    <div className="chart flex-col gap-mini">
      <H2>Daily orders</H2>
      <LineChart data={data} />
    </div>
  );
};

export default OrdersChart;

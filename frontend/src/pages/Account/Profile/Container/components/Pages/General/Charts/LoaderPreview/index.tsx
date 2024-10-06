import { useTranslation } from 'react-i18next';

import { H2, BarChart } from 'components';

const LoaderChart = () => {
  const { t } = useTranslation(['dashboard']);

  const data = {
    labels: ['Sep', '5', '9', '13', '17', '21', '25', '29', 'Oct'],
    datasets: [
      {
        label: 'Completed orders',
        data: [100, 90, 96, 101, 120, 103, 98, 105, 107],
        borderColor: '#401cdf',
        backgroundColor: '#137547',
        borderRadius: 6,
      },
    ],
  };

  return (
    <div className="chart flex-col gap-mini">
      <H2>{t('charts.dailyOrders')}</H2>
      <BarChart data={data} />
    </div>
  );
};

export default LoaderChart;

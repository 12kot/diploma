import { useTranslation } from 'react-i18next';

import { H2, LineChart } from 'components';

import styles from "../chart.module.scss"

export const OrdersChart = () => {
  const { t } = useTranslation(['dashboard']);

  const data = {
    labels: ['Sep', '5', '9', '13', '17', '21', '25', '29', 'Oct'],
    datasets: [
      { label: 'New orders', data: [50, 85, 76, 80, 90, 120, 123, 115, 130], borderColor: '#137547' },
      { label: 'Completed orders', data: [100, 90, 96, 101, 120, 103, 98, 105, 107], borderColor: '#401cdf' },
    ],
  };

  return (
    <div className={styles.chart}>
      <H2>{t('charts.dailyOrders')}</H2>
      <LineChart data={data} />
    </div>
  );
};

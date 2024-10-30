import { useTranslation } from 'react-i18next';

import { H2, LineChart } from 'components';

export const UsersChart = () => {
  const { t } = useTranslation(['dashboard']);

  const data = {
    labels: ['Sep', '5', '9', '13', '17', '21', '25', '29', 'Oct'],
    datasets: [
      { label: 'Active users', data: [1012, 1120, 899, 1212, 1300, 1100, 1203, 1354, 1402], borderColor: '#401cdf' },
      { label: 'New users', data: [200, 232, 212, 201, 181, 172, 221, 265, 362], borderColor: '#137547' },
      { label: 'Departed users', data: [10, 10, 21, 11, 11, 31, 21, 10, 21], borderColor: '#E42717' },
    ],
  };

  return (
    <div className="chart flex-col gap-mini">
      <H2>{t('charts.dailyActiveUsers')}</H2>
      <LineChart data={data} />
    </div>
  );
};

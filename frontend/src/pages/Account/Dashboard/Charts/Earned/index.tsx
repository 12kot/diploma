import { useTranslation } from 'react-i18next';

import { H2, LineChart } from 'components';

const EarnedChart = () => {
  const { t } = useTranslation(['dashboard']);

  const data = {
    labels: ['Sep', '5', '9', '13', '17', '21', '25', '29', 'Oct'],
    datasets: [
      { label: 'Paid out', data: [80500, 70032, 87002, 84001, 81008, 90702, 100210, 98050, 129002], borderColor: '#137547' },
      { label: 'Earned', data: [101200, 112000, 80099, 120102, 130000, 110000, 120003, 130054, 100402], borderColor: '#E42717' },
    ],
  };

  return (
    <div className="chart flex-col gap-mini">
      <H2>{t('charts.earned')}</H2>
      <LineChart data={data} />
    </div>
  );
};

export default EarnedChart;

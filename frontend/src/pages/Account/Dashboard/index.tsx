import { TFunction } from 'i18next';
import { useTranslation } from 'react-i18next';

import { H2, TotalInfo } from 'components';

import DashboardCharts from './Charts';

import SVGReport from 'assets/svg/SVGReport';

const totalInfo = (t: TFunction<['dashboard'], undefined>) => [
  { id: 1, name: t('dashboard:total.totalForwarders'), value: '255', percentage: 100 },
  { id: 2, name: t('dashboard:total.activeForwarders'), value: '240', percentage: 30 },
  { id: 3, name: t('dashboard:total.totalOrders'), value: '3945' },
  { id: 4, name: t('dashboard:total.LastMonthOrders'), value: '1203', percentage: -10 },
  { id: 5, name: t('dashboard:total.earned'), value: '4.6M', percentage: 25 },
  { id: 6, name: t('dashboard:total.paidOut'), value: '1.3M', percentage: 13 },
];

const Dashboard = () => {
  const { t } = useTranslation(['dashboard']);

  return (
    <div className="account-container--dashboard media-full-1200 flex-col gap">
      <section className="flex-between align-center mb-16 media-flex-col-768 gap-8">
        <div className="flex-col">
          <H2>{t('dashboard:greeting.hello', { name: 'Hanna' })}</H2>
          <p className="text-secondary">{t('dashboard:greeting.traffic')}</p>
        </div>
        <button className='nowrap'>
          <SVGReport />
          <p>{t('dashboard:greeting.generateReport')}</p>
        </button>
      </section>
      <TotalInfo totalInfo={totalInfo} />
      <DashboardCharts />
    </div>
  );
};

export default Dashboard;

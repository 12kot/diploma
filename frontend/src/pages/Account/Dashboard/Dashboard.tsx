import { TFunction } from 'i18next';
import { useTranslation } from 'react-i18next';

import { Button, H2, TotalInfo } from 'components';

import { DashboardCharts } from './Charts';

import { SVGReport } from 'assets';

import styles from './styles.module.scss';
import { useAppSelector } from 'store';

const totalInfo = (t: TFunction<['dashboard'], undefined>) => [
  { id: 1, name: t('dashboard:total.totalForwarders'), value: '255', percentage: 100 },
  { id: 2, name: t('dashboard:total.activeForwarders'), value: '240', percentage: 30 },
  { id: 3, name: t('dashboard:total.totalOrders'), value: '3945' },
  { id: 4, name: t('dashboard:total.LastMonthOrders'), value: '1203', percentage: -10 },
  { id: 5, name: t('dashboard:total.earned'), value: '4.6M', percentage: 25 },
  { id: 6, name: t('dashboard:total.paidOut'), value: '1.3M', percentage: 13 },
];

export const Dashboard = () => {
  const { t } = useTranslation(['dashboard']);
  const firstName = useAppSelector((state) => state.user.firstName);

  return (
    <div className={styles.container}>
      <section className={styles.greeting}>
        <div className={styles.name}>
          <H2>{t('dashboard:greeting.hello', { name: firstName })}</H2>
          <span>{t('dashboard:greeting.traffic')}</span>
        </div>
        <Button>
          <SVGReport />
          <p>{t('dashboard:greeting.generateReport')}</p>
        </Button>
      </section>
      <TotalInfo totalInfo={totalInfo} />
      <DashboardCharts />
    </div>
  );
};

import { useTranslation } from 'react-i18next';

import { H2 } from 'components';

import TotalInfo from './Total';
import DashboardCharts from './Charts';

import SVGReport from 'assets/svg/SVGReport';

const DashboardAdmin = () => {
  const { t } = useTranslation(['dashboard']);

  return (
    <div className="account-container--dashboard flex-col gap">
      <section className="flex-between align-center mb-16">
        <div className="flex-col">
          <H2>{t('dashboard:greeting.hello', { name: 'Hanna' })}</H2>
          <p className="text-secondary">{t('dashboard:greeting.traffic')}</p>
        </div>
        <button>
          <SVGReport />
          <p>{t('dashboard:greeting.generateReport')}</p>
        </button>
      </section>
      <TotalInfo />
      <DashboardCharts />
    </div>
  );
};

export default DashboardAdmin;

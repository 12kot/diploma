import { TFunction } from 'i18next';

import { TotalInfo } from 'components';

import ProfileCharts from './Charts';

import SVGProfileInfo from 'assets/svg/SVGProfileInfo';
import { useTranslation } from 'react-i18next';

const totalInfo = (t: TFunction<['dashboard'], undefined>) => [
  { id: 1, name: t('dashboard:total.totalForwarders'), value: '255', percentage: 100 },
  { id: 4, name: t('dashboard:total.LastMonthOrders'), value: '1203', percentage: -10 },
  { id: 5, name: t('dashboard:total.earned'), value: '4.6M', percentage: 25 },
  { id: 6, name: t('dashboard:total.paidOut'), value: '1.3M', percentage: 13 },
];

const GeneralProfilePage = () => {
  const { t } = useTranslation('dashboard');

  return (
    <div className="profile-grid">
      <section className="flex-col gap profile-padding profile-grid-first">
        <div className="flex gap-mini align-center">
          <SVGProfileInfo />
          <p>
            <b className="text-14">{t('profile.personalInfo')}</b>
          </p>
        </div>
        <form className="flex-col gap profile-grid-first-overflow">
          <section className="flex gap-mini">
            <input type="text" placeholder="Name" className="w-full" />
            <input type="text" placeholder="Surname" className="w-full" />
          </section>
          <input type="email" placeholder="Email" />
          <input type="phone" placeholder="Phone number" />
          <section className="flex gap-mini">
            <input type="text" placeholder="Country" className="w-full" />
            <input type="text" placeholder="City" className="w-full" />
          </section>
          <textarea rows={10} placeholder="Self-description" />
        </form>
      </section>
      <section className="flex-col gap profile-padding profile-grid-second">
        <div className="flex gap-mini align-center">
          <SVGProfileInfo />
          <p>
            <b className="text-14">{t('profile.professionalInfo')}</b>
          </p>
        </div>
        <TotalInfo totalInfo={totalInfo} />
        <ProfileCharts />
      </section>
    </div>
  );
};

export default GeneralProfilePage;

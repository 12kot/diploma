import { TFunction } from 'i18next';
import { useTranslation } from 'react-i18next';

import SVGArrowUp from 'assets/svg/SVGArrowUp';
import SVGArrowDown from 'assets/svg/SVGArrowDown';

const totalInfo = (t: TFunction<["dashboard"], undefined>) => [
  { id: 1, name: t('dashboard:total.totalForwarders'), value: '255', percentage: 100 },
  { id: 2, name: t('dashboard:total.activeForwarders'), value: '240', percentage: 30 },
  { id: 3, name: t('dashboard:total.totalOrders'), value: '3945' },
  { id: 4, name: t('dashboard:total.LastMonthOrders'), value: '1203', percentage: -10 },
  { id: 5, name: t('dashboard:total.earned'), value: '4.6M', percentage: 25 },
  { id: 6, name: t('dashboard:total.paidOut'), value: '1.3M', percentage: 13 },
];

const TotalInfo = () => {
  const { t } = useTranslation(['dashboard']);

  return (
    <section className="account-container--dashboard -total flex-between rounded-16">
      {totalInfo(t).map((item) => (
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

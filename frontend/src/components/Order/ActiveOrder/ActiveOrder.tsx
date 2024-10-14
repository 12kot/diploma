import { useTranslation } from 'react-i18next';

import { useEscapeKey, getOrderStatusText } from 'features';

import SVGBack from 'assets/svg/SVGBack';

interface Props {
  setActiveOrder: (v: number | null) => void;
}

export const ActiveOrder = ({ setActiveOrder }: Props) => {
  const { t } = useTranslation('dashboard');

  useEscapeKey(() => setActiveOrder(null));

  return (
    <div className="flex-col gap wrap">
      <section className="flex align-center relative">
        <button className="--default --border square rounded p-0 absolute l-0 t-0" onClick={() => setActiveOrder(null)}>
          <SVGBack />
        </button>
        <p className="text-center w-full">
          <b>Warsaw → Hrodna</b>
        </p>
      </section>
      <hr />

      <section className="flex-between gap pages-active-order media-flex-col-768">
        <div className="btn --transparent w-m flex-start flex-col h-content w-full">
          <b>{t('pages.orders.cargoOwner')}</b>
          <div className="flex-col">
            <p className="text-12 text-secondary">{t('pages.orders.id')}</p>
            <p className="text-14">10219939113</p>
          </div>
          <div className="flex-col">
            <p className="text-12 text-secondary">{t('pages.orders.name')}</p>
            <p className="text-14">Full Name</p>
          </div>
          <div className="flex-col">
            <p className="text-12 text-secondary">{t('pages.orders.email')}</p>
            <a href="mailto:yakol.nikita@gmail.com" className="text-14">
              yakol.nikita@gmail.com
            </a>
          </div>
          <div className="flex-col">
            <p className="text-12 text-secondary">{t('pages.orders.phone')}</p>
            <a href="tel:+375292812071" className="text-14">
              +375 29 281 20 71
            </a>
          </div>
        </div>
        <div className="btn --transparent w-m flex-start flex-col h-content w-full">
          <b>{t('pages.orders.cargoInfo')}</b>
          <div className="flex-col">
            <p className="text-12 text-secondary">{t('pages.orders.status')}</p>
            <p className="text-14">{getOrderStatusText('waiting', t)}</p>
          </div>
          <div className="flex-col">
            <p className="text-12 text-secondary">{t('pages.orders.id')}</p>
            <p className="text-14">10219939113</p>
          </div>
          <div className="flex-col">
            <p className="text-12 text-secondary">{t('pages.orders.typeOfPackaging')}</p>
            <p className="text-14">Package name</p>
          </div>
          <div className="flex-col">
            <p className="text-12 text-secondary">{t('pages.orders.receivingAddress')}</p>
            <p className="text-14">Poland, Warsaw</p>
          </div>
          <div className="flex-col">
            <p className="text-12 text-secondary">{t('pages.orders.unloadingAddress')}</p>
            <p className="text-14">Belarus, Hrodna</p>
          </div>
          <div className="flex-col">
            <p className="text-12 text-secondary">{t('pages.orders.price')}</p>
            <p className="text-14">$25000</p>
          </div>
        </div>
      </section>
    </div>
  );
};

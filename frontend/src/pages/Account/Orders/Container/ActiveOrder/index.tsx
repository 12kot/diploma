import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { AddDriverToOrder } from './Modal';
import { useEscapeKey, getOrderStatusText } from 'features';

import SVGBack from 'assets/svg/SVGBack';
import tilesImage from 'assets/img/tiles.png';

interface Props {
  setActiveOrder: (v: number | null) => void;
}

const ActiveOrder = ({ setActiveOrder }: Props) => {
  const { t } = useTranslation(['dashboard', 'common']);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEscapeKey(() => setActiveOrder(null));

  return (
    <div className="flex-col gap relative order-container -order h-full nowrap">
      <AddDriverToOrder isOpen={isOpen} setIsOpen={() => setIsOpen((v) => !v)} />
      <section className="flex align-center realtive">
        <button className="--default --border square rounded p-0 absolute l-0 t-0" onClick={() => setActiveOrder(null)}>
          <SVGBack />
        </button>
        <p className="text-center w-full">
          <b>Warsaw → Hrodna</b>
        </p>
      </section>
      <hr />

      <button onClick={() => setIsOpen((v) => !v)}>{t('common:buttons.addDriver')}</button>

      <div className="flex order-container-info h-full">
        <div className="flex-between gap order-container__active-order w-full h-full">
          <div className="flex-col w-full gap">
            <section className="btn --transparent flex-start flex-col h-content">
              <b>{t('dashboard:pages.orders.driverInfo')}</b>
              <div className="flex-col">
                <p className="text-12 text-secondary">{t('dashboard:pages.orders.status')}</p>
                <p className="text-14">{getOrderStatusText('waiting', t)}</p>
              </div>
              <div className="flex-col">
                <p className="text-12 text-secondary">{t('dashboard:pages.orders.id')}</p>
                <p className="text-14">10219939113</p>
              </div>
              <div className="flex-col">
                <p className="text-12 text-secondary">{t('dashboard:pages.orders.typeOfPackaging')}</p>
                <p className="text-14">Package name</p>
              </div>
            </section>
            <section className="btn --transparent flex-start flex-col h-content">
              <b>{t('dashboard:pages.orders.cargoOwner')}</b>
              <div className="flex-col">
                <p className="text-12 text-secondary">{t('dashboard:pages.orders.id')}</p>
                <p className="text-14">10219939113</p>
              </div>
              <div className="flex-col">
                <p className="text-12 text-secondary">{t('dashboard:pages.orders.name')}</p>
                <p className="text-14">Full Name</p>
              </div>
              <div className="flex-col">
                <p className="text-12 text-secondary">{t('dashboard:pages.orders.email')}</p>
                <a href="mailto:yakol.nikita@gmail.com" className="text-14">
                  yakol.nikita@gmail.com
                </a>
              </div>
              <div className="flex-col">
                <p className="text-12 text-secondary">{t('dashboard:pages.orders.phone')}</p>
                <a href="tel:+375292812071" className="text-14">
                  +375 29 281 20 71
                </a>
              </div>
            </section>
          </div>
          <section className="btn --transparent flex-start flex-col h-content w-full">
            <b>{t('pages.orders.cargoInfo')}</b>
            <div className="flex-col">
              <p className="text-12 text-secondary">{t('dashboard:pages.orders.status')}</p>
              <p className="text-14">{getOrderStatusText('waiting', t)}</p>
            </div>
            <div className="flex-col">
              <p className="text-12 text-secondary">{t('dashboard:pages.orders.id')}</p>
              <p className="text-14">10219939113</p>
            </div>
            <div className="flex-col">
              <p className="text-12 text-secondary">{t('dashboard:pages.orders.typeOfPackaging')}</p>
              <p className="text-14">Package name</p>
            </div>
            <div className="flex-col">
              <p className="text-12 text-secondary">{t('dashboard:pages.orders.receivingAddress')}</p>
              <p className="text-14">Poland, Warsaw</p>
            </div>
            <div className="flex-col">
              <p className="text-12 text-secondary">{t('dashboard:pages.orders.unloadingAddress')}</p>
              <p className="text-14">Belarus, Hrodna</p>
            </div>
            <div className="flex-col">
              <p className="text-12 text-secondary">{t('dashboard:pages.orders.price')}</p>
              <p className="text-14">$25000</p>
            </div>
          </section>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1206112.193426632!2d24.37295603911168!3d53.81283745487652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x46e078a115ce4489%3A0x3cc3a76402e38475!2z0JPRgNCT0KMg0LjQvC4g0K8u0JrRg9C_0LDQu9GLLCDQk9GA0L7QtNC90L4!3m2!1d53.695645999999996!2d23.8265319!4m5!1s0x46dbcfd35b1e6ad3%3A0xb61b853ddb570d9!2z0JzQuNC90YHQug!3m2!1d53.900601099999996!2d27.558971999999997!5e0!3m2!1sru!2sby!4v1728515158396!5m2!1sru!2sby"
          className="h-full w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <img src={tilesImage} loading="lazy" className="top-0 left-0 absolute w-full z--1" />
    </div>
  );
};

export default ActiveOrder;

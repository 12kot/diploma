import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { MapWithRoute } from 'components';
import { useEscapeKey, getOrderStatusText, useAuth } from 'features';

import { AddDriverToOrder } from './Modal';

import SVGBack from 'assets/svg/SVGBack';
import tilesImage from 'assets/img/tiles.png';

interface Props {
  setActiveOrder: (v: number | null) => void;
}

export const FullOrder = ({ setActiveOrder }: Props) => {
  const { user } = useAuth();
  const { t } = useTranslation(['dashboard', 'common']);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEscapeKey(() => setActiveOrder(null));

  return (
    <div className="flex-col relative order-container -order h-full nowrap">
      {user?.role === 'forwarder' && <AddDriverToOrder isOpen={isOpen} setIsOpen={() => setIsOpen((v) => !v)} />}
      <section className="order-container__padding-header flex align-center realtive">
        <button className="--default --border square rounded p-0 absolute l-0 t-0" onClick={() => setActiveOrder(null)}>
          <SVGBack />
        </button>
        <p className="text-center w-full">
          <b>Warsaw → Hrodna</b>
        </p>
      </section>
      <hr />
      {user?.role === 'forwarder' && (
        <button onClick={() => setIsOpen((v) => !v)} className='order-container__padding-actions'>{t('common:buttons.addDriver')}</button>
      )}

      <div className="order-container-info flex h-full ">
        <div className="order-container__padding  order-container__active-order flex-between gap w-full h-full">
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

        <MapWithRoute
          origin={{ lat: 53.893009, lng: 27.567444 }}
          destination={{
            lat: 53.669353,
            lng: 23.813131,
          }}
        />
      </div>
      <img src={tilesImage} loading="lazy" className="top-0 left-0 absolute w-full z--1" />
    </div>
  );
};

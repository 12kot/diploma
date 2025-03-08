import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { BgImage, Button, MapWithRoute } from 'components';
import { useEscapeKey, getOrderStatusText, EUserRole, cx } from 'features';

import { AddDriverToOrder } from './Modal';

import { SVGBack, tilesImg } from 'assets';

import styles from './style.module.scss';
import { useAppSelector } from 'store';

interface Props {
  setActiveOrder: (v: number | null) => void;
}

export const FullOrder = ({ setActiveOrder }: Props) => {
  const user = useAppSelector(state => state.user);
  const { t } = useTranslation(['dashboard', 'common']);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEscapeKey(() => setActiveOrder(null));

  return (
    <div className={styles.container}>
      {user?.role === EUserRole.Forwarder && (
        <AddDriverToOrder isOpen={isOpen} setIsOpen={() => setIsOpen((v) => !v)} />
      )}
      <section className={cx(styles.padding_header, styles.route)}>
        <Button buttonType={['default', 'border']} className={styles.back} onClick={() => setActiveOrder(null)}>
          <SVGBack />
        </Button>
        <p className={styles.text}>
          <b>Warsaw → Hrodna</b>
        </p>
      </section>
      <hr />
      {user?.role === EUserRole.Forwarder && (
        <div className={styles.addDriver}>
          <Button onClick={() => setIsOpen((v) => !v)}>
            {t('common:buttons.addDriver')}
          </Button>
        </div>
      )}

      <div className={styles.info}>
        <div className={styles.active_order}>
          <div className={styles.item}>
            <section className={styles.section}>
              <b>{t('dashboard:pages.orders.driverInfo')}</b>
              <div className={styles.data}>
                <span>{t('dashboard:pages.orders.status')}</span>
                <p>{getOrderStatusText('waiting', t)}</p>
              </div>
              <div className={styles.data}>
                <span>{t('dashboard:pages.orders.id')}</span>
                <p>10219939113</p>
              </div>
              <div className={styles.data}>
                <span>{t('dashboard:pages.orders.typeOfPackaging')}</span>
                <p>Package name</p>
              </div>
            </section>
            <section className={styles.section}>
              <b>{t('dashboard:pages.orders.cargoOwner')}</b>
              <div className={styles.data}>
                <span>{t('dashboard:pages.orders.id')}</span>
                <p>10219939113</p>
              </div>
              <div className={styles.data}>
                <span>{t('dashboard:pages.orders.name')}</span>
                <p>Full Name</p>
              </div>
              <div className={styles.data}>
                <span>{t('dashboard:pages.orders.email')}</span>
                <a href="mailto:yakol.nikita@gmail.com">yakol.nikita@gmail.com</a>
              </div>
              <div className={styles.data}>
                <span>{t('dashboard:pages.orders.phone')}</span>
                <a href="tel:+375292812071">+375 29 281 20 71</a>
              </div>
            </section>
          </div>
          <section className={cx(styles.section, styles.width)}>
            <b>{t('pages.orders.cargoInfo')}</b>
            <div className={styles.data}>
              <span>{t('dashboard:pages.orders.status')}</span>
              <p>{getOrderStatusText('waiting', t)}</p>
            </div>
            <div className={styles.data}>
              <span>{t('dashboard:pages.orders.id')}</span>
              <p>10219939113</p>
            </div>
            <div className={styles.data}>
              <span>{t('dashboard:pages.orders.typeOfPackaging')}</span>
              <p>Package name</p>
            </div>
            <div className={styles.data}>
              <span>{t('dashboard:pages.orders.receivingAddress')}</span>
              <p>Poland, Warsaw</p>
            </div>
            <div className={styles.data}>
              <span>{t('dashboard:pages.orders.unloadingAddress')}</span>
              <p>Belarus, Hrodna</p>
            </div>
            <div className={styles.data}>
              <span>{t('dashboard:pages.orders.price')}</span>
              <p>$25000</p>
            </div>
          </section>
        </div>

        <div className={styles.map}>
          <MapWithRoute
            origin={{ lat: 53.893009, lng: 27.567444 }}
            destination={{
              lat: 53.669353,
              lng: 23.813131,
            }}
          />
        </div>
      </div>
      <BgImage image={tilesImg} isTop />
    </div>
  );
};

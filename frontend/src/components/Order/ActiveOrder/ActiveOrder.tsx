import { useTranslation } from 'react-i18next';

import { Button } from 'components';
import { useEscapeKey, getOrderStatusText } from 'features';

import { SVGBack } from 'assets';

import styles from './styles.module.scss';

interface Props {
  setActiveOrder: (v: number | null) => void;
}

export const ActiveOrder = ({ setActiveOrder }: Props) => {
  const { t } = useTranslation('dashboard');

  useEscapeKey(() => setActiveOrder(null));

  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <Button buttonType={["default", "border"]} className={styles.back} onClick={() => setActiveOrder(null)}>
          <SVGBack />
        </Button>
        <p className={styles.text}>
          <b>Warsaw → Hrodna</b>
        </p>
      </section>
      <hr />

      <section className={styles.content}>
        <div className={styles.info}>
          <b>{t('pages.orders.cargoOwner')}</b>
          <div className={styles.card}>
            <p className={styles.headerText}>{t('pages.orders.id')}</p>
            <p className={styles.mainText}>10219939113</p>
          </div>
          <div className={styles.card}>
            <p className={styles.headerText}>{t('pages.orders.name')}</p>
            <p className={styles.mainText}>Full Name</p>
          </div>
          <div className={styles.card}>
            <p className={styles.headerText}>{t('pages.orders.email')}</p>
            <a href="mailto:yakol.nikita@gmail.com" className={styles.mainText}>
              yakol.nikita@gmail.com
            </a>
          </div>
          <div className={styles.card}>
            <p className={styles.headerText}>{t('pages.orders.phone')}</p>
            <a href="tel:+375292812071" className={styles.mainText}>
              +375 29 281 20 71
            </a>
          </div>
        </div>
        <div className={styles.info}>
          <b>{t('pages.orders.cargoInfo')}</b>
          <div className={styles.card}>
            <p className={styles.headerText}>{t('pages.orders.status')}</p>
            <p className={styles.mainText}>{getOrderStatusText('waiting', t)}</p>
          </div>
          <div className={styles.card}>
            <p className={styles.headerText}>{t('pages.orders.id')}</p>
            <p className={styles.mainText}>10219939113</p>
          </div>
          <div className={styles.card}>
            <p className={styles.headerText}>{t('pages.orders.typeOfPackaging')}</p>
            <p className={styles.mainText}>Package name</p>
          </div>
          <div className={styles.card}>
            <p className={styles.headerText}>{t('pages.orders.receivingAddress')}</p>
            <p className={styles.mainText}>Poland, Warsaw</p>
          </div>
          <div className={styles.card}>
            <p className={styles.headerText}>{t('pages.orders.unloadingAddress')}</p>
            <p className={styles.mainText}>Belarus, Hrodna</p>
          </div>
          <div className={styles.card}>
            <p className={styles.headerText}>{t('pages.orders.price')}</p>
            <p className={styles.mainText}>$25000</p>
          </div>
        </div>
      </section>
    </div>
  );
};

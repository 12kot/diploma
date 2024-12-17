import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, H2, HR, MapWithRoute } from 'components';

import { OrderForm } from './components';
import { AddressModal } from './Modal';

import styles from "./styles.module.scss";

export const CreateOrder = () => {
  const { t } = useTranslation(['dashboard', 'common']);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalType, setModalType] = useState<'upload' | 'download'>('upload');

  return (
    <div className={styles.container}>
      <AddressModal isOpen={isOpen} setIsOpen={() => setIsOpen((v) => !v)} modalType={modalType} />
      <section className={styles.payment}>
        <H2>{t('dashboard:createOrder.index')}</H2>
        <Button>{t('common:buttons.getPaymentInfo')}</Button>
      </section>
      <HR />
      <section className={styles.content}>
        <OrderForm openDownloadModal={() => setIsOpen((v) => !v)} setModalType={setModalType} />

        <div className={styles.map}>
          <MapWithRoute
            origin={{ lat: 53.893009, lng: 27.567444 }}
            destination={{
              lat: 53.669353,
              lng: 23.813131,
            }}
          />
        </div>
      </section>
    </div>
  );
};

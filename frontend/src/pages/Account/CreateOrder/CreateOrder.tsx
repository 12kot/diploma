import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { H2, HR, MapWithRoute } from 'components';

import { OrderForm } from './components';
import { AddressModal } from './Modal';

export const CreateOrder = () => {
  const { t } = useTranslation(['dashboard', 'common']);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalType, setModalType] = useState<'upload' | 'download'>('upload');

  return (
    <div className="create-order flex-col">
      <AddressModal isOpen={isOpen} setIsOpen={() => setIsOpen((v) => !v)} modalType={modalType} />
      <section className="create-order__padding flex-between align-center">
        <H2>{t('dashboard:createOrder.index')}</H2>
        <button>{t('common:buttons.getPaymentInfo')}</button>
      </section>
      <HR />
      <section className="create-order__content h-full">
        <OrderForm openDownloadModal={() => setIsOpen((v) => !v)} setModalType={setModalType} />

        <div className="create-order__content--second">
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

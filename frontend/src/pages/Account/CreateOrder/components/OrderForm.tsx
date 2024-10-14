import { useTranslation } from 'react-i18next';

import SVGCar from 'assets/svg/SVGCar';
import SVGCargo from 'assets/svg/SVGCargo';
import SVGDownload from 'assets/svg/SVGDownload';
import SVGUpload from 'assets/svg/SVGUpload';

interface Props {
  openDownloadModal: () => void;
  setModalType: (v: 'upload' | 'download') => void;
}

const OrderForm = ({ openDownloadModal, setModalType }: Props) => {
  const { t } = useTranslation(['dashboard', 'common']);

  const handleSetAddress = (v: 'upload' | 'download') => {
    setModalType(v);
    openDownloadModal();
  };
  

  return (
    <form className="create-order__padding create-order__content--first flex-col gap">
      <div className="flex gap-mini align-center create-order__svg">
        <SVGCargo />
        <p>
          <b className="text-14">{t('dashboard:createOrder.cargoInfo')}</b>
        </p>
      </div>
      <section className="flex gap-mini">
        <input type="text" placeholder={t('common:placeholders.name')} className="w-full" />
        <input type="text" placeholder={t('common:placeholders.type')} className="w-full" />
      </section>
      <section className="flex gap-mini">
        <input type="text" placeholder={t('common:placeholders.width')} className="w-full" />
        <input type="text" placeholder={t('common:placeholders.heigth')} className="w-full" />
        <input type="text" placeholder={t('common:placeholders.depth')} className="w-full" />
        <input type="text" placeholder={t('common:placeholders.weight')} className="w-full" />
      </section>
      <section className="flex gap-mini">
        <input type="text" placeholder={t('common:placeholders.loadingMethod')} className="w-full" />
        <input type="text" placeholder={t('common:placeholders.packageType')} className="w-full" />
      </section>
      <textarea rows={10} placeholder={t('common:placeholders.cargoDescription')} />
      <div className="flex gap-mini align-center create-order__svg">
        <SVGCar />
        <p>
          <b className="text-14">{t('dashboard:createOrder.deliveryInfo')}</b>
        </p>
      </div>
      <section className="flex gap-mini">
        <button type="button" className="--transparent w-full" onClick={() => handleSetAddress('download')}>
          <SVGDownload />
          <p>{t('common:buttons.addDownloadAddress')}</p>
        </button>
        <button type="button" className="--transparent w-full" onClick={() => handleSetAddress('upload')}>
          <SVGUpload />
          {t('common:buttons.addUploadAddress')}
        </button>
      </section>
      <section className="flex gap-mini">
        <input type="date" className="w-full" placeholder={t('common:placeholders.whenPickCargo')} />
        <input type="date" className="w-full" placeholder={t('common:placeholders.whenDeliver')} />
      </section>
    </form>
  );
};

export default OrderForm;

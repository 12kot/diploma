import { useTranslation } from 'react-i18next';

import { Button } from 'components';

import { SVGCar, SVGCargo, SVGDownload, SVGUpload } from 'assets';

import styles from './styles.module.scss';

interface Props {
  openDownloadModal: () => void;
  setModalType: (v: 'upload' | 'download') => void;
}

export const OrderForm = ({ openDownloadModal, setModalType }: Props) => {
  const { t } = useTranslation(['dashboard', 'common']);

  const handleSetAddress = (v: 'upload' | 'download') => {
    setModalType(v);
    openDownloadModal();
  };

  return (
    <form className={styles.container}>
      <div className={styles.info}>
        <SVGCargo />
        <p>
          <b>{t('dashboard:createOrder.cargoInfo')}</b>
        </p>
      </div>
      <section className={styles.item}>
        <input type="text" placeholder={t('common:placeholders.name')} className="w-full" />
        <input type="text" placeholder={t('common:placeholders.type')} className="w-full" />
      </section>
      <section className={styles.item}>
        <input type="text" placeholder={t('common:placeholders.width')} className="w-full" />
        <input type="text" placeholder={t('common:placeholders.heigth')} className="w-full" />
        <input type="text" placeholder={t('common:placeholders.depth')} className="w-full" />
        <input type="text" placeholder={t('common:placeholders.weight')} className="w-full" />
      </section>
      <section className={styles.item}>
        <input type="text" placeholder={t('common:placeholders.loadingMethod')} className="w-full" />
        <input type="text" placeholder={t('common:placeholders.packageType')} className="w-full" />
      </section>
      <textarea rows={10} placeholder={t('common:placeholders.cargoDescription')} />
      <div className={styles.info}>
        <SVGCar />
        <p>
          <b>{t('dashboard:createOrder.deliveryInfo')}</b>
        </p>
      </div>
      <section className={styles.item}>
        <Button type="button" buttonType={'transparent'} onClick={() => handleSetAddress('download')}>
          <SVGDownload />
          <p>{t('common:buttons.addDownloadAddress')}</p>
        </Button>
        <Button type="button" buttonType={'transparent'} onClick={() => handleSetAddress('upload')}>
          <SVGUpload />
          {t('common:buttons.addUploadAddress')}
        </Button>
      </section>
      <section className={styles.item}>
        <input type="date" className="w-full" placeholder={t('common:placeholders.whenPickCargo')} />
        <input type="date" className="w-full" placeholder={t('common:placeholders.whenDeliver')} />
      </section>
    </form>
  );
};

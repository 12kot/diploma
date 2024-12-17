import { useTranslation } from 'react-i18next';

import { Button, Map, Modal } from 'components';

import styles from './styles.module.scss';

interface Props {
  isOpen: boolean;
  setIsOpen: () => void;
  modalType: 'upload' | 'download';
}

export const AddressModal = ({ isOpen, setIsOpen, modalType }: Props) => {
  const { t } = useTranslation(['dashboard', 'common']);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} className={styles.container}>
      <p>
        <b>
          {t(
            modalType === 'download'
              ? 'dashboard:createOrder.modal.addDownloadAddress'
              : 'dashboard:createOrder.modal.addUploadAddress',
          )}
        </b>
      </p>
      <div className={styles.map}>
        <Map />
      </div>
      <form className={styles.form}>
        <input type="text" placeholder={t('common:placeholders.address')} />
        <input type="text" placeholder={t('common:placeholders.phone')} />

        <section className={styles.actions}>
          <Button buttonType={'transparent'} type="button" onClick={setIsOpen}>
            {t('common:buttons.cancel')}
          </Button>
          <Button>{t('common:buttons.save')}</Button>
        </section>
      </form>
    </Modal>
  );
};

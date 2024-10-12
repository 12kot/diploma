import { Map, Modal } from 'components';
import { useTranslation } from 'react-i18next';

interface Props {
  isOpen: boolean;
  setIsOpen: () => void;
  modalType: 'upload' | 'download';
}

const AddressModal = ({ isOpen, setIsOpen, modalType }: Props) => {
  const { t } = useTranslation(['dashboard', 'common']);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} className="address-modal flex-col align-center gap">
      <p>
        <b>
          {t(
            modalType === 'download'
              ? 'dashboard:createOrder.modal.addDownloadAddress'
              : 'dashboard:createOrder.modal.addUploadAddress',
          )}
        </b>
      </p>
      <div className="address-modal__map w-full z-10">
        <Map />
      </div>
      <form className="flex-col gap w-full">
        <input type="text" placeholder={t('common:placeholders.address')} className="w-full" />
        <input type="text" placeholder={t('common:placeholders.phone')} className="w-full" />

        <section className="flex gap-mini">
          <button className="--transparent w-full" type="button" onClick={setIsOpen}>
            {t('common:buttons.cancel')}
          </button>
          <button className="w-full">{t('common:buttons.save')}</button>
        </section>
      </form>
    </Modal>
  );
};

export default AddressModal;

import { FormEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, H2, Modal } from 'components';

import mailImage from 'assets/img/mail.png';

import styles from './styles.module.scss';
import { useAppSelector } from 'store';

interface Props {
  isOpen: boolean;
  setIsOpen: () => void;
}

export const ContactUsModal = ({ isOpen, setIsOpen }: Props) => {
  const [isSend, setIsSend] = useState<boolean>(false);

  const renderContent = () => {
    if (isSend) return <SendModal setIsSend={(v) => setIsSend(v)} setIsOpen={setIsOpen} />;
    return <Form setIsSend={(v) => setIsSend(v)} setIsOpen={setIsOpen} />;
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} className={styles.container}>
      {renderContent()}
    </Modal>
  );
};

interface FormProps {
  setIsSend: (v: boolean) => void;
  setIsOpen: () => void;
}

const Form = ({ setIsSend, setIsOpen }: FormProps) => {
  const { t } = useTranslation(['menuHolder', 'common']);
  const { email, phoneNumber } = useAppSelector((state) => state.user);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSend(true);
  };

  return (
    <>
      <H2 className={styles.center}>{t('common:buttons.contactUs')}</H2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.user}>
          <input type="email" value={email} disabled />
          <input type="phone" value={phoneNumber} disabled />
        </div>
        <input type="text" placeholder={t('menuHolder:support.modal.whatHappened')} />
        <textarea rows={5} placeholder={t('menuHolder:support.modal.describeProblem')} />
        <footer className={styles.actions}>
          <Button buttonType={'transparent'} type="button" onClick={setIsOpen}>
            {t('common:buttons.cancel')}
          </Button>
          <Button>{t('common:buttons.send')}</Button>
        </footer>
      </form>
    </>
  );
};

const SendModal = ({ setIsSend, setIsOpen }: FormProps) => {
  const { t } = useTranslation(['menuHolder', 'common']);

  return (
    <div className={styles.send}>
      <img src={mailImage} alt="mail-image" loading="lazy" />
      <p>{t('menuHolder:support.modal.sendSuccessText')}</p>
      <div className={styles.actions}>
        <Button buttonType={'transparent'} onClick={() => setIsSend(false)}>
          {t('common:buttons.sendAnotherRequest')}
        </Button>
        <Button onClick={setIsOpen}>{t('common:buttons.continueWorking')}</Button>
      </div>
    </div>
  );
};

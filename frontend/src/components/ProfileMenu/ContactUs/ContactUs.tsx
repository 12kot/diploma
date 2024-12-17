import { FormEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, H2, Modal } from 'components';

import mailImage from 'assets/img/mail.png';

import styles from './styles.module.scss';

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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSend(true);
  };

  return (
    <>
      <H2 className="text-center">{t('common:buttons.contactUs')}</H2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.user}>
          <input type="email" value="yakol.nikita@gmail.com" disabled />
          <input type="phone" value="+375 29 281 20 71" disabled />
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

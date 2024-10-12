import { FormEvent, useState } from 'react';

import { H2, Modal } from 'components';

import mailImage from 'assets/img/mail.png';
import { useTranslation } from 'react-i18next';

interface Props {
  isOpen: boolean;
  setIsOpen: () => void;
}

const ContactUsModal = ({ isOpen, setIsOpen }: Props) => {
  const [isSend, setIsSend] = useState<boolean>(false);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} className="flex-col gap contact-us__modal">
      {isSend ? (
        <SendModal setIsSend={(v) => setIsSend(v)} setIsOpen={setIsOpen} />
      ) : (
        <Form setIsSend={(v) => setIsSend(v)} setIsOpen={setIsOpen} />
      )}
    </Modal>
  );
};

export default ContactUsModal;

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
      <form className="flex-col gap" onSubmit={handleSubmit}>
        <div className="flex gap-mini">
          <input type="email" value="yakol.nikita@gmail.com" disabled />
          <input type="phone" value="+375 29 281 20 71" disabled />
        </div>
        <input type="text" placeholder={t('menuHolder:support.modal.whatHappened')} />
        <textarea rows={5} placeholder={t('menuHolder:support.modal.describeProblem')} />
        <footer className="flex gap-mini">
          <button className="--transparent w-full" type="button" onClick={setIsOpen}>
            {t('common:buttons.cancel')}
          </button>
          <button className="w-full ">{t('common:buttons.send')}</button>
        </footer>
      </form>
    </>
  );
};

const SendModal = ({ setIsSend, setIsOpen }: FormProps) => {
  const { t } = useTranslation(['menuHolder', 'common']);

  return (
    <div className="flex-col flex-center gap contact-us__modal__send">
      <img src={mailImage} alt="mail-image" loading="lazy" className="w-m" />
      <p className="text-center text-14">{t('menuHolder:support.modal.sendSuccessText')}</p>
      <div className="flex gap-mini">
        <button className="--transparent" onClick={() => setIsSend(false)}>
          {t('common:buttons.sendAnotherRequest')}
        </button>
        <button onClick={setIsOpen}>{t('common:buttons.continueWorking')}</button>
      </div>
    </div>
  );
};

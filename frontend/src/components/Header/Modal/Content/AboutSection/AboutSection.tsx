import { useTranslation } from 'react-i18next';

import { useContactUsModal } from 'features';

import { SVGContactUs } from 'assets';

import { NavButton } from '../components';
import styles from './styles.module.scss';

interface Props {
  setIsOpen: () => void;
}

export const AboutSection = ({ setIsOpen }: Props) => {
  const { setContactUsModalOpen } = useContactUsModal();
  const { t } = useTranslation(['menuHolder', 'common']);

  const handleOpenContactUsModal = () => {
    setIsOpen();
    setContactUsModalOpen();
  };

  return (
    <>
      <p className={styles.category}>{t('menuHolder:sections.about')}</p>
      <NavButton
        onClick={() => handleOpenContactUsModal()}
        icon={<SVGContactUs />}
        text={t('common:buttons.contactUs')}
      />
    </>
  );
};

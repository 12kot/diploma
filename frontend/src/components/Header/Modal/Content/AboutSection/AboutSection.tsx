import { useTranslation } from 'react-i18next';

import { SVGContactUs } from 'assets';

import { NavButton } from '../components';
import styles from './styles.module.scss';

interface Props {
  setIsOpen: () => void;
}

export const AboutSection = ({ setIsOpen }: Props) => {
  const { t } = useTranslation(['menuHolder', 'common']);

  const handleOpenContactUsModal = () => {
    setIsOpen();
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

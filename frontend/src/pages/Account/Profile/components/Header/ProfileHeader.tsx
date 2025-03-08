import { useTranslation } from 'react-i18next';

import { useAppSelector } from 'store';
import { Button, H1, Indicator } from 'components';

import styles from './styles.module.scss';

interface Props {
  onSubmit: () => void;
  isLoading: boolean
}

export const ProfileHeader: React.FC<Props> = ({ onSubmit, isLoading }) => {
  const { t } = useTranslation(['common']);
  const { firstName, lastName, email, role } = useAppSelector((state) => state.user);

  return (
    <header className={styles.container}>
      <div className={styles.user}>
        <img src="https://cdn.openart.ai/published/8EVNpLAOnr5fVQgKrqWw/Tnz4qXWD_lV1v_1024.webp" />
        <section className={styles.data}>
          <div className={styles.name}>
            <H1>{firstName + ' ' + lastName}</H1>
            <Indicator className={styles.indicator}>{role}</Indicator>
          </div>
          <span>{email}</span>
        </section>
      </div>
      <Button className={styles.save} onClick={onSubmit} disabled={isLoading}>{t('common:buttons.saveChanges')}</Button>
    </header>
  );
};

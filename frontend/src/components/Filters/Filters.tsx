import { Button } from 'components';

import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';

interface Props {
  handleCreateAddress: () => void
}

export const Filters: React.FC<Props> = ({handleCreateAddress}) => {
  const { t } = useTranslation('common');
  return (
    <div className={styles.container}>
      <Button buttonType={[`filter_active`]} onClick={handleCreateAddress}>{t('buttons.createAddress')}</Button>
    </div>
  );
};

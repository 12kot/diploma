import { Button } from 'components';

import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';

interface Props {
  handleCreate: () => void;
}

export const Filters: React.FC<Props> = ({ handleCreate }) => {
  const { t } = useTranslation('common');
  return (
    <div className={styles.container}>
      <Button buttonType={[`filter_active`]} onClick={handleCreate}>
        {t('buttons.createNew')}
      </Button>
    </div>
  );
};

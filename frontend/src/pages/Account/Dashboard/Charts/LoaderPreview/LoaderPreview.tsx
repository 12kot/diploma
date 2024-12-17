import { useTranslation } from 'react-i18next';

import { H2, Loader } from 'components';

import styles from "../chart.module.scss"

export const LoaderChart = () => {
  const { t } = useTranslation(['dashboard']);

  return (
    <div className={styles.chart}>
      <H2>{t('charts.loaderPreview')}</H2>
      <div className={styles.loader}>
        <Loader />
      </div>
    </div>
  );
};

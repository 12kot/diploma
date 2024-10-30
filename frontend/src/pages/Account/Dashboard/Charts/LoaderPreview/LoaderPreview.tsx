import { useTranslation } from 'react-i18next';

import { H2, Loader } from 'components';

export const LoaderChart = () => {
  const { t } = useTranslation(['dashboard']);

  return (
    <div className="chart flex-col gap-mini">
      <H2>{t('charts.loaderPreview')}</H2>
      <div className="flex-center w-full h-full">
        <Loader />
      </div>
    </div>
  );
};

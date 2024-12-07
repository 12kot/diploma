import { useTranslation } from 'react-i18next';

import { SVGFacebook, SVGGoogle } from 'assets';

export const ProvidersAuth = () => {
  const { t } = useTranslation(['auth']);

  return (
    <section className="text-center flex-col gap">
      <button className="--transparent">
        <SVGGoogle />
        <p>{t('auth:buttons.withGoogle')}</p>
      </button>
      <button className="--transparent">
        <SVGFacebook />
        <p>{t('auth:buttons.withFacebook')}</p>
      </button>
    </section>
  );
};

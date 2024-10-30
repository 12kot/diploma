import { H2 } from 'components';
import { useTranslation } from 'react-i18next';

import previewImage from 'assets/img/preview.webp';
import SVGStar from 'assets/svg/SVGStar';

export const AuthPreview = () => {
  const { t } = useTranslation(['auth']);

  return (
    <div className="auth-container--preview">
      <section className="auth-container--preview--review flex-col gap-mid">
        <H2 className="main-color">{t('auth:preview.feedback')}</H2>
        <div className="flex-between items-center">
          <div className="flex-col gap-mini">
            <p>
              <b>{t('auth:preview.username')}</b>
            </p>
            <span>{t('auth:preview.company')}</span>
          </div>
          <div className="flex gap-mini">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <SVGStar key={i} />
              ))}
          </div>
        </div>
      </section>
      <section className="auth-container--preview--img">
        <img src={previewImage} alt="preview" loading="lazy" />
      </section>
    </div>
  );
};

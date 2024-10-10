import { H2 } from 'components';

import { useTranslation } from 'react-i18next';

const Settings = () => {
  const { t } = useTranslation(['dashboard', 'common']);

  return (
    <div className="settings flex-col gap">
      <div className="flex-col gap-mini">
        <H2>{t('dashboard:settings.changePassword')}</H2>
        <span>{t('dashboard:settings.note')}</span>
      </div>
      <form className="flex-col gap">
        <input type="password" placeholder="Current password" />
        <input type="password" placeholder="New password" />
        <button>{t('common:buttons.updatePassword')}</button>
      </form>
    </div>
  );
};

export default Settings;

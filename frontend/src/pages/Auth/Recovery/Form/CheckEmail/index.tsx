import { H1 } from 'components';
import { useTranslation } from 'react-i18next';
import mailImage from 'assets/img/image.png';
import { NavLink } from 'react-router-dom';
import SVGBack from 'assets/svg/SVGBack';

interface Props {
  handleClose: () => void;
}

const CheckEmail = ({ handleClose }: Props) => {
  const { t } = useTranslation(['auth']);

  return (
    <div className="auth-container--form flex-center flex-col relative">
      <button className="btn --transparent absolute w-content top-16 left-16 gap-mini text-14" onClick={handleClose}>
        <SVGBack />
        <p>{t('auth:recovery.checkEmail.backTo')}</p>
      </button>
      <div className="form flex-center">
        <img src={mailImage} className="w-m" loading="lazy" />
        <header className="text-center">
          <H1>{t('auth:recovery.checkEmail.header')}</H1>
          <p>{t('auth:recovery.checkEmail.title')}</p>
        </header>

        <NavLink to="https://mail.google.com/mail" className="btn" target="_blank">
          <p>{t('auth:recovery.checkEmail.submit')}</p>
        </NavLink>
      </div>
    </div>
  );
};

export default CheckEmail;

import SVGLink from 'assets/svg/SVGLink';
import { H1 } from 'components';
import { IUserRole } from 'features';
import { useTranslation } from 'react-i18next';

interface Props {
  name: string;
  isBanned: boolean;
  role: IUserRole;
}

export const UserName = ({ name, isBanned, role }: Props) => {
  const { t } = useTranslation('dashboard');

  return (
    <section className="flex-between gap align-center">
      <div className="flex gap info align-center">
        <img src="https://cdn.logoworks.com/wp-content/uploads/2017/06/Untitled-2-640x360-1.png" className="rounded" />
        <div className="flex-col gap-mini">
          <H1>{name}</H1>
          <span className='flex gap-mini'>
            <p className="indicator">{role}</p>
            {isBanned && <p className="indicator -red">{t('common.banned', { date: '23.09.2024' })}</p>}
          </span>
        </div>
      </div>
      <button className="--default --border square rounded p-0">
        <SVGLink />
      </button>
    </section>
  );
};

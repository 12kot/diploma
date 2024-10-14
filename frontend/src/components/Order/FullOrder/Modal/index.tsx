import { useTranslation } from 'react-i18next';

import { Labels, MapWithRoute, Modal } from 'components';

import SVGClose from 'assets/svg/SVGClose';
import SVGEarth from 'assets/svg/SVGEarth';
import SVGTrendingUp from 'assets/svg/SVGTrendingUp';

interface Props {
  isOpen: boolean;
  setIsOpen: () => void;
}

export const AddDriverToOrder = ({ isOpen, setIsOpen }: Props) => {
  const { t } = useTranslation(['dashboard', 'common']);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} className="order-container__modal flex-col gap">
      <header className="flex gap-mini align-center">
        <p className="clamp-2">
          <b>{t('dashboard:order.addDriverToOrder')}</b>
        </p>
      </header>
      <form className="order-container__modal-content h-full gap overflow">
        <section className="flex-col gap overflow">
          <input type="text" placeholder={t('common:placeholders.findDriver')} className="w-full" />
          <MiniDriver active />
          <div className="flex-col order-container__modal-content-drivers">
            {Array(15)
              .fill(0)
              .map((_, i) => (
                <MiniDriver key={i} active={i === 8} />
              ))}
          </div>
          <button className="w-full mt">{t('common:buttons.confirm')}</button>
        </section>
        <section className="flex-col gap">
          <Labels labels={labels} wrap />
          <MapWithRoute
            origin={{ lat: 53.893009, lng: 27.567444 }}
            destination={{
              lat: 53.669353,
              lng: 23.813131,
            }}
          />
        </section>
      </form>
    </Modal>
  );
};

const MiniDriver = ({ active }: { active?: boolean }) => {
  return (
    <div className={`--default flex-start gap-mini mini-driver align-center ${active && 'mini-driver-active'}`}>
      <img src="https://cdn3.pixelcut.app/1/3/profile_picture_1728ecf2bd.jpg" className="rounded" loading="lazy" />
      <div className="flex-col flex-start">
        <b className="text-14">Hanna super Driver</b>
        <Labels labels={labels} />
      </div>

      {active && (
        <button className="--default square rounded p-0 ml" type="button">
          <SVGClose />
        </button>
      )}
    </div>
  );
};

const labels = [
  {
    id: 1,
    icon: <SVGTrendingUp />,
    name: '10h in way',
  },
  {
    id: 2,
    icon: <SVGEarth />,
    name: '$10 000',
  },
];

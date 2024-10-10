import SVGClose from 'assets/svg/SVGClose';
import SVGEarth from 'assets/svg/SVGEarth';
import SVGTrendingUp from 'assets/svg/SVGTrendingUp';
import { Labels, Modal } from 'components';
import { useTranslation } from 'react-i18next';

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
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1206112.193426632!2d24.37295603911168!3d53.81283745487652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x46e078a115ce4489%3A0x3cc3a76402e38475!2z0JPRgNCT0KMg0LjQvC4g0K8u0JrRg9C_0LDQu9GLLCDQk9GA0L7QtNC90L4!3m2!1d53.695645999999996!2d23.8265319!4m5!1s0x46dbcfd35b1e6ad3%3A0xb61b853ddb570d9!2z0JzQuNC90YHQug!3m2!1d53.900601099999996!2d27.558971999999997!5e0!3m2!1sru!2sby!4v1728515158396!5m2!1sru!2sby"
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>
      </form>
    </Modal>
  );
};

const MiniDriver = ({ active }: { active?: boolean }) => {
  return (
    <button className={`--default flex-start gap-mini mini-driver align-center ${active && 'mini-driver-active'}`}>
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
    </button>
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

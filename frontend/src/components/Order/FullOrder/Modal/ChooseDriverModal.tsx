import { useTranslation } from 'react-i18next';

import { cx } from 'features';
import { Button, Labels, MapWithRoute, Modal } from 'components';

import { SVGCheck, SVGClose, SVGEarth, SVGTrendingUp } from 'assets';

import styles from './styles.module.scss';

interface Props {
  isOpen: boolean;
  setIsOpen: () => void;
}

export const AddDriverToOrder = ({ isOpen, setIsOpen }: Props) => {
  const { t } = useTranslation(['dashboard', 'common']);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} className={styles.container}>
      <header className={styles.header}>
        <p className={styles.clamp}>
          <b>{t('dashboard:order.addDriverToOrder')}</b>
        </p>
      </header>
      <form className={styles.content}>
        <section className={styles.cards}>
          <input type="text" placeholder={t('common:placeholders.findDriver')} />
          <MiniDriver active />
          <div className={styles.drivers}>
            {Array(15)
              .fill(0)
              .map((_, i) => (
                <MiniDriver key={i} active={i === 8} />
              ))}
          </div>
          <Button className={styles.confirm}>{t('common:buttons.confirm')}</Button>
        </section>
        <section className={styles.map}>
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
    <div className={cx(styles.card, active && styles.card_active)}>
      <img
        src="https://cdn.openart.ai/published/8EVNpLAOnr5fVQgKrqWw/Tnz4qXWD_lV1v_1024.webp"
        loading="lazy"
      />
      <div className={styles.name}>
        <b>Hanna super Driver</b>
        <Labels labels={labels} />
      </div>

      {!active && (
        <Button buttonType={'default'} className={cx(styles.close, styles.check)} type="button">
          <SVGCheck />
        </Button>
      )}
      {active && (
        <Button buttonType={'default'} className={styles.close} type="button">
          <SVGClose />
        </Button>
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

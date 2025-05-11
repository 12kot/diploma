import { Button } from 'components';

import { SVGClose } from 'assets';

import styles from './styles.module.scss';

interface Props {
  title: string;
  closeActiveDelivery: () => void;
}

export const DeliveryLabels = ({ title, closeActiveDelivery }: Props) => {
  return (
    <section className={styles.container}>
      <b>{title}</b>
      <div className={styles.actions}>
        <Button buttonType="transparent" className={styles.back} onClick={closeActiveDelivery}>
          <SVGClose />
        </Button>
      </div>
    </section>
  );
};

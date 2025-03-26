import { Button } from 'components';

import { SVGClose } from 'assets';

import styles from './styles.module.scss';

interface Props {
  title: string;
  closeActiveCargo: () => void;
}

export const CargoLabels = ({ title, closeActiveCargo }: Props) => {
  return (
    <section className={styles.container}>
      <b>{title}</b>
      <div className={styles.actions}>
        <Button buttonType="transparent" className={styles.back} onClick={closeActiveCargo}>
          <SVGClose />
        </Button>
      </div>
    </section>
  );
};

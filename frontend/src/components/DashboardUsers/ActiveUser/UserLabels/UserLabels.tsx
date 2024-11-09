import { ILabel } from 'features';
import { Button, Labels } from 'components';

import { SVGShare, SVGFavorite, SVGClose } from 'assets';

import styles from './styles.module.scss';

interface Props {
  labels: ILabel[];
  closeActiveUser: () => void;
}

export const UserLabels = ({ labels, closeActiveUser }: Props) => {
  return (
    <section className={styles.container}>
      <div className={styles.labels}>
        <Button buttonType="transparent" className={styles.back} onClick={closeActiveUser}>
          <SVGClose />
        </Button>
        <Labels labels={labels} />
      </div>
      <div className={styles.actions}>
        <Button buttonType={'default'} className={styles.button}>
          <SVGShare />
        </Button>
        <Button buttonType={'default'} className={styles.button}>
          <SVGFavorite />
        </Button>
      </div>
    </section>
  );
};

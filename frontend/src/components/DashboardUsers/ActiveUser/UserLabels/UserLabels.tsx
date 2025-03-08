import { Button } from 'components';

import { SVGClose } from 'assets';

import styles from './styles.module.scss';

interface Props {
  closeActiveUser: () => void;
}

export const UserLabels = ({ closeActiveUser }: Props) => {
  return (
    <section className={styles.container}>
      <div className={styles.labels}>
        <Button buttonType="transparent" className={styles.back} onClick={closeActiveUser}>
          <SVGClose />
        </Button>
      </div>
    </section>
  );
};

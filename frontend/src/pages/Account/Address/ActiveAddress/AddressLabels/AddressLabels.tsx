import { Button } from 'components';

import { SVGClose, SVGTrash } from 'assets';

import styles from './styles.module.scss';

interface Props {
  title: string;
  onDelete: () => void;
  closeActiveAddress: () => void;
}

export const AddressLabels = ({ title, closeActiveAddress, onDelete }: Props) => {
  return (
    <section className={styles.container}>
      <b>{title}</b>
      <div className={styles.actions}>
        <Button buttonType="transparent" className={styles.back} onClick={onDelete}>
          <SVGTrash />
        </Button>
        <Button buttonType="transparent" className={styles.back} onClick={closeActiveAddress}>
          <SVGClose />
        </Button>
      </div>
    </section>
  );
};

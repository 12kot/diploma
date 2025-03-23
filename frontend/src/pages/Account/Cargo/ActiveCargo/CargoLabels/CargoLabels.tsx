import { Button } from 'components';

import { SVGClose, SVGTrash } from 'assets';

import styles from './styles.module.scss';

interface Props {
  title: string;
  isCreate: boolean;
  onDelete: () => void;
  closeActiveCargo: () => void;
}

export const CargoLabels = ({ title, isCreate, closeActiveCargo, onDelete }: Props) => {
  return (
    <section className={styles.container}>
      <b>{title}</b>
      <div className={styles.actions}>
        {!isCreate && (
          <Button buttonType="transparent" className={styles.back} onClick={onDelete}>
            <SVGTrash />
          </Button>
        )}
        <Button buttonType="transparent" className={styles.back} onClick={closeActiveCargo}>
          <SVGClose />
        </Button>
      </div>
    </section>
  );
};

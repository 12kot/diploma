import { Button } from 'components';

import { SVGClose } from 'assets';

import styles from './styles.module.scss';

interface Props {
  title: string;
  closeActiveAddress: () => void;
}

export const AddressLabels = ({ title, closeActiveAddress }: Props) => {
  return (
    <section className={styles.container}>
      <b>{title}</b>
      <div className={styles.actions}>
        <Button buttonType="transparent" className={styles.back} onClick={closeActiveAddress}>
          <SVGClose />
        </Button>
      </div>
    </section>
  );
};

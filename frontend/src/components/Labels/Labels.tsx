import { cx, ILabel } from 'features';
import { Indicator } from 'components';

import styles from './styles.module.scss';

interface Props {
  wrap?: boolean;
  labels: ILabel[];
}

export const Labels = ({ labels, wrap }: Props) => {
  return (
    <div className={cx(styles.container, wrap && styles.wrap)}>
      {labels.map((label) => (
        <Label key={label.id} {...label} />
      ))}
    </div>
  );
};

const Label = ({ icon, name, id }: ILabel) => {
  return (
    <Indicator type="border" className={styles.label} key={id}>
      {icon}
      {name}
    </Indicator>
  );
};

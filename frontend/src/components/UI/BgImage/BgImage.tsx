import { cx } from 'features';

import styles from './styles.module.scss';

interface Props {
  image: string;
  isTop?: boolean;
}

export const BgImage = ({ image, isTop }: Props) => {
  return <img src={image} loading="lazy" className={cx(styles.container, isTop ? styles.top : styles.bottom)} />;
};

import styles from './styles.module.scss';

interface Props {
  negative?: boolean;
}

export const Loader = ({ negative }: Props) => {
  return <div className={`${styles.loader} ${negative && styles.negative}`}></div>;
};

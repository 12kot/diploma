import styles from './styles.module.scss';

interface Props {
  negative?: boolean;
  center?: boolean;
}

export const Loader = ({ negative, center }: Props) => {
  if (center) return <LoaderCenter negative />;

  return <div className={`${styles.loader} ${negative && styles.negative}`} />;
};

const LoaderCenter = ({ negative }: Props) => {
  return (
    <div className={`w-full h-full flex-center ` + styles.grid}>
      <div className={`${styles.loader} ${negative && styles.negative}`} />
    </div>
  );
};

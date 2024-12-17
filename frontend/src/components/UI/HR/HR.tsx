import styles from "./styles.module.scss";

interface Props {
  text?: string;
}

export const HR = ({ text }: Props) => {
  return (
    <div className={styles.container}>
      <p>{text}</p>
      <hr />
    </div>
  );
};

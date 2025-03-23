import styles from './styles.module.scss';

interface Props {
  email: string;
  phone: string;
}

export const Contacts: React.FC<Props> = ({ phone, email }) => {
  return (
    <section className={styles.container}>
      <a className={styles.link} href={`tel:${phone}`}>
        {phone}
      </a>
      <a className={styles.link} href={`mailto:${email}`}>
        {email}
      </a>
    </section>
  );
};

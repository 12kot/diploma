import styles from './styles.module.scss';

export const Contacts = () => {
  return (
    <section className={styles.container}>
      <a className={styles.link} href="tel:+375292812071">
        +375 29 281 20 71
      </a>
      <a className={styles.link} href="mailto:yakol.nikita@gmail.com">
        yakol.nikita@gmail.com
      </a>
    </section>
  );
};

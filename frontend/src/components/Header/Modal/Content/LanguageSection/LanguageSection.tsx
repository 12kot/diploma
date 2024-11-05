import { HeaderLng } from 'components/Header/Lng';
import styles from './styles.module.scss';

export const LanguageSection = () => {
  return (
    <section className={styles.container}>
      <HeaderLng className={styles.display} />
    </section>
  );
};

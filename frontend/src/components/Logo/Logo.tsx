import { H2 } from 'components/UI';
import IMGLogo from './logo.jpeg';
import styles from './styles.module.scss';

export const Logo: React.FC = () => {
  return (
    <div className={styles.container}>
      <img src={IMGLogo} /><H2>LogistPro</H2>
    </div>
  );
};

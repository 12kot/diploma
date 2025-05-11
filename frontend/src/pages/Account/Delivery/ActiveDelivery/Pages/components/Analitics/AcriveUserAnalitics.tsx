import { EarnedChart } from 'pages/Account/Dashboard/Charts/Earned';

import styles from './styles.module.scss';

export const AcriveUserAnalitics = () => {
  return (
    <div className={styles.container}>
      <EarnedChart />
      <EarnedChart />
      <EarnedChart />
      <EarnedChart />
      <EarnedChart />
    </div>
  );
};

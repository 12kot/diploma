import EarnedChart from "pages/Account/Dashboard/Charts/Earned";

import styles from "./styles.module.scss";

export const AcriveUserAnalitics = () => {
  return (
    <div className={`${styles.container} mt-16`}>
      <EarnedChart />
      <EarnedChart />
      <EarnedChart />
      <EarnedChart />
      <EarnedChart />
    </div>
  );
};

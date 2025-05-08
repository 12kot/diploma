import { cx } from "features";
import { Button } from "components";

import styles from "./styles.module.scss";

interface Props {
  className?: string;
}

export const HeaderLng = ({ className }: Props) => {
  return (
    <Button buttonType="transparent" className={cx(styles.container, className)} aria-label="Switch to Russian">
      <img src="https://flagsapi.com/RU/flat/64.png" alt="en" loading="lazy" />
      <p>RU</p>
    </Button>
  );
};

import { TFunction } from 'i18next';
import { useTranslation } from 'react-i18next';

import { Indicator } from 'components';

import { SVGArrowUp, SVGArrowDown } from 'assets';

import styles from './styles.module.scss';

interface IItem {
  id: number;
  name: string;
  value: string;
  percentage?: number;
}

interface Props {
  totalInfo: (t: TFunction<['dashboard'], undefined>) => IItem[];
}

export const TotalInfo = ({ totalInfo }: Props) => {
  const { t } = useTranslation(['dashboard']);

  return (
    <section className={styles.container}>
      {totalInfo(t).map((item) => (
        <Item {...item} key={item.id} />
      ))}
    </section>
  );
};

const Item = ({ name, value, percentage }: IItem) => {
  return (
    <div className={styles.item}>
      <span className={styles.name}>{name}</span>
      <b className={styles.value}>{value}</b>
      {percentage && (
        <Indicator type={percentage < 0 ? `red` : undefined} icon={percentage >= 0 ? <SVGArrowUp /> : <SVGArrowDown />}>
          {Math.abs(percentage)}%
        </Indicator>
      )}
    </div>
  );
};

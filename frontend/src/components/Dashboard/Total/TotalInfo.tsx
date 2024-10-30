import { TFunction } from 'i18next';
import { useTranslation } from 'react-i18next';

import { SVGArrowUp, SVGArrowDown } from 'assets';

interface Props {
  totalInfo: (t: TFunction<['dashboard'], undefined>) => {
    id: number;
    name: string;
    value: string;
    percentage?: number;
  }[];
}

export const TotalInfo = ({ totalInfo }: Props) => {
  const { t } = useTranslation(['dashboard']);

  return (
    <section className="account-container--dashboard -total media-full-1200 flex-between rounded-16">
      {totalInfo(t).map((item) => (
        <div className="flex-col gap-mini media-center-768" key={item.id}>
          <p className="text-12 text-secondary">{item.name}</p>
          <b className="text-h1">{item.value}</b>
          {item.percentage && (
            <div className={`indicator ${item.percentage < 0 && `-red`}`}>
              {item.percentage >= 0 ? <SVGArrowUp /> : <SVGArrowDown />}
              <p>{Math.abs(item.percentage)}%</p>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

import SVGDollar from 'assets/svg/SVGDollar';
import SVGTag from 'assets/svg/SVGTag';
import SVGTime from 'assets/svg/SVGTime';
import SVGWeight from 'assets/svg/SVGWeight';
import { getOrderIndicatorClass, getOrderStatusText, IOrder } from 'features';
import { useTranslation } from 'react-i18next';

interface OrderProps extends IOrder {
  setActiveOrder: (v: number) => void;
}

export const Order = ({ id, cityFrom, cityTo, loadedDate, unloadedDate, cost, weight, type, setActiveOrder }: OrderProps) => {
  const { t } = useTranslation('dashboard');

  return (
    <button className="--transparent flex-start flex-col gap-mini" onClick={() => setActiveOrder(id)}>
      <p>
        {cityFrom} → {cityTo}
      </p>
      <div className="flex gap-mini wrap">
        <p className={`indicator ${getOrderIndicatorClass(type)}`}>{getOrderStatusText(type, t)}</p>
        <div className="iflex gap-mini indicator -border nowrap">
          <SVGDollar />
          <p>{cost}</p>
        </div>
        <div className="iflex gap-mini indicator -border nowrap">
          <SVGTag />
          <p>{id}</p>
        </div>
        <div className="iflex gap-mini indicator -border nowrap">
          <SVGTime />
          <p>
            {loadedDate} - {unloadedDate}
          </p>
        </div>
        <div className="iflex gap-mini indicator -border nowrap">
          <SVGWeight />
          <p>{weight}</p>
        </div>
      </div>
    </button>
  );
};

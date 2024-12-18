import { TFunction } from "i18next";
import { IOrderType } from "features/types";

export const getOrderStatusText = (type: IOrderType, t: TFunction<"dashboard", undefined>) => {
  if (type === 'waiting') return t('pages.orders.indicator.waiting');
  if (type === 'closed') return t('pages.orders.indicator.closed');
  return t('pages.orders.indicator.way');
};

export const getOrderIndicatorClass = (type: IOrderType) => {
  if (type === 'waiting') return 'blue';
  if (type === 'closed') return 'red';
  return undefined;
};

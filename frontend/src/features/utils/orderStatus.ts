import { TFunction } from "i18next";

export const getOrderStatusText = (type: 'loading' | 'closed' | 'way', t: TFunction<"dashboard", undefined>) => {
  if (type === 'loading') return t('pages.orders.indicator.loading');
  if (type === 'closed') return t('pages.orders.indicator.closed');
  return t('pages.orders.indicator.way');
};

export const getOrderIndicatorClass = (type: 'loading' | 'closed' | 'way') => {
  if (type === 'loading') return '-blue';
  if (type === 'closed') return '-red';
  return '';
};

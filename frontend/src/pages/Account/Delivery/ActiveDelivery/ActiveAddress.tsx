import { cx, IAddress, IDelivery } from 'features';
import * as Yup from 'yup';
import { BgImage, Button } from 'components';

import tilesImage from 'assets/img/tiles.png';

import styles from './styles.module.scss';
import { DeliveryLabels } from './DeliveryLabels';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { useCreateDeliveryMutation, useEditDeliveryMutation } from 'store';
import toast from 'react-hot-toast';
import { SVGMapMarker } from 'assets';
import { useEffect, useState } from 'react';

const formatDate = (timestamp: number) => {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

interface Props {
  addresses: IAddress[];
  delivery?: IDelivery;
  isCreate: boolean;
  onCreate: () => void;
  closeActiveDelivery: () => void;
}

const LoadApproachValues = ['AUTOMATED', 'MANUAL'];

export const ActiveDelivery = ({ addresses, delivery, isCreate, onCreate, closeActiveDelivery }: Props) => {
  const { t } = useTranslation(['common', 'dashboard']);

  const [ediDelivery, { isLoading: isLoading }] = useEditDeliveryMutation();
  const [createDelivery, { isLoading: isLoading1 }] = useCreateDeliveryMutation();

  const [activeAddress, setActiveAddress] = useState(delivery?.address);

  useEffect(() => {
    setActiveAddress(delivery?.address);
  }, [isCreate, delivery]);

  const validationSchema = Yup.object({
    date: Yup.string().required(),
    loadType: Yup.mixed<'AUTOMATED' | 'MANUAL'>().oneOf(['AUTOMATED', 'MANUAL']).required(),
  });

  const formik = useFormik<Partial<IDelivery>>({
    initialValues: {
      date: delivery?.date ? formatDate(Number(delivery?.date)) : undefined,
      loadType: delivery?.loadType || 'AUTOMATED',
    },
    enableReinitialize: true,
    validationSchema,
    onSubmit: async (data) => {
      if (!activeAddress) return;
      const newDate = {
        ...data,
        id: delivery?.id ? delivery?.id : undefined,
        date: new Date(data.date as string).getTime(),
        address: { id: activeAddress?.id },
      };
      if (isCreate) {
        //@ts-ignore
        const res = await createDelivery(newDate as IDelivery);
        if (!res.error) {
          toast.success(t('deliverySuccess'));
          onCreate();
        } else {
          toast.error(t('deliveryError'));
        }
      } else {
        //@ts-ignore
        await ediDelivery(newDate);
      }
      closeActiveDelivery();
    },
  });

  const addressTitle = [
    delivery?.address?.countryName,
    delivery?.address?.cityName,
    delivery?.address?.street,
    delivery?.address?.apartment,
  ]
    .filter(Boolean)
    .join(', ');

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <DeliveryLabels title={addressTitle || t('newDelivery')} closeActiveDelivery={closeActiveDelivery} />
        <form className={styles.form} onSubmit={formik.handleSubmit}>
          <div className={styles.block}>
            <input
              type="date"
              name="date"
              placeholder={t('placeholders.date')}
              className={cx(formik.touched.date && formik.errors.date && styles.error)}
              value={formik.values.date}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              min={new Date().toISOString().split('T')[0]}
            />
            <select
              {...formik.getFieldProps('loadType')}
              className={cx(formik.touched.loadType && formik.errors.loadType && styles.error)}>
              {LoadApproachValues.map((value) => (
                <option value={value} key={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.block}>
            <SVGMapMarker />
            <p>
              <b>{t('dashboard:pages.orders.landingInfo')}</b>
            </p>
          </div>
          <div className={styles.cards}>
            {addresses.map((address) => (
              <Button
                type="button"
                buttonType={activeAddress?.id !== address.id ? 'transparent' : undefined}
                onClick={() => setActiveAddress(address)}
                key={address.id}>
                {`${address?.countryName ? `${address?.countryName}, ` : ''}${
                  address?.cityName ? `${address?.cityName}, ` : ''
                }${address?.street ? `${address?.street}` : ''}`}
              </Button>
            ))}
          </div>

          <Button className={styles.save} disabled={isLoading || isLoading1}>{t('placeholders.save')}</Button>
        </form>
      </div>
      <BgImage image={tilesImage} isTop />
    </div>
  );
};

import { cx, IAddress } from 'features';
import * as Yup from 'yup';
import { BgImage, Button } from 'components';

import tilesImage from 'assets/img/tiles.png';

import styles from './styles.module.scss';
import { AddressLabels } from './AddressLabels';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { useCreateAddressMutation, useEditAddressMutation } from 'store';
import toast from 'react-hot-toast';

interface Props {
  address?: IAddress;
  isCreate: boolean;
  onCreate: () => void;
  closeActiveAddress: () => void;
}

export const ActiveAddress = ({ address, isCreate, onCreate, closeActiveAddress }: Props) => {
  const { t } = useTranslation('common');

  const [ediAddress] = useEditAddressMutation();
  const [createAddress] = useCreateAddressMutation();

  const validationSchema = Yup.object({
    apartment: Yup.number().required(),
    cityName: Yup.string().required(),
    countryName: Yup.string().required(),
    house: Yup.number().required(),
    phoneNumber: Yup.string().required(),
    street: Yup.string().required(),
  });

  const formik = useFormik<Partial<IAddress>>({
    initialValues: {
      apartment: Number(address?.apartment),
      cityName: address?.cityName || '',
      countryName: address?.countryName || '',
      house: Number(address?.house),
      phoneNumber: address?.phoneNumber || '',
      street: address?.street || '',
    },
    enableReinitialize: true,
    validationSchema,
    onSubmit: async (data) => {
      if (isCreate) {
        const res = await createAddress(data as IAddress);
        if (!res.error) {
          toast.success(t('addressSuccess'));
          onCreate();
        } else {
          toast.error(t('addressError'));
        }
      } else {
        ediAddress({id: address?.id, ...data});
      }
      closeActiveAddress();
    },
  });

  const addressTitle = [address?.countryName, address?.cityName, address?.street, address?.apartment]
    .filter(Boolean)
    .join(', ');

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <AddressLabels title={addressTitle || t('newAddress')} closeActiveAddress={closeActiveAddress} />
        <form className={styles.form} onSubmit={formik.handleSubmit}>
          <div className={styles.block}>
            <input
              type="text"
              name="countryName"
              placeholder={t('placeholders.country')}
              className={cx(formik.touched.countryName && formik.errors.countryName && styles.error)}
              value={formik.values.countryName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <input
              type="text"
              name="cityName"
              placeholder={t('placeholders.city')}
              className={cx(formik.touched.cityName && formik.errors.cityName && styles.error)}
              value={formik.values.cityName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className={styles.block}>
            <input
              type="text"
              name="street"
              placeholder={t('placeholders.street')}
              className={cx(formik.touched.street && formik.errors.street && styles.error)}
              value={formik.values.street}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <input
              type="number"
              name="house"
              placeholder={t('placeholders.house')}
              className={cx(formik.touched.house && formik.errors.house && styles.error)}
              value={formik.values.house}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className={styles.block}>
            <input
              type="text"
              name="phoneNumber"
              placeholder={t('placeholders.phoneNumber')}
              className={cx(formik.touched.phoneNumber && formik.errors.phoneNumber && styles.error)}
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <input
              type="number"
              name="apartment"
              placeholder={t('placeholders.apartment')}
              className={cx(formik.touched.apartment && formik.errors.apartment && styles.error)}
              value={formik.values.apartment}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <Button className={styles.save}>{t('placeholders.save')}</Button>
        </form>
      </div>
      <BgImage image={tilesImage} isTop />
    </div>
  );
};

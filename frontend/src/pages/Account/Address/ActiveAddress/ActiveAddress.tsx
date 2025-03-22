import { cx, IAddress } from 'features';
import * as Yup from 'yup';
import { BgImage, Button } from 'components';

import tilesImage from 'assets/img/tiles.png';

import styles from './styles.module.scss';
import { AddressLabels } from './AddressLabels';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { useCreateAddressMutation, useDeleteAddressMutation, useEditAddressMutation } from 'store';

interface Props {
  address: IAddress;
  isCreate: boolean;
  onCreate: (id: IAddress['id']) => void;
  closeActiveAddress: () => void;
}

export const ActiveAddress = ({ address, isCreate, onCreate, closeActiveAddress }: Props) => {
  const { t } = useTranslation('common');

  const [ediAddress] = useEditAddressMutation();
  const [createAddress] = useCreateAddressMutation();
  const [deleteAddress] = useDeleteAddressMutation();

  const handleDelete = () => {
    deleteAddress({ id: address.id });
    closeActiveAddress();
  };

  const validationSchema = Yup.object({
    apartment: Yup.number().required(),
    cityName: Yup.string().required(),
    countryName: Yup.string().required(),
    house: Yup.number().required(),
    phoneNumber: Yup.string().required(),
    street: Yup.string().required(),
  });

  const formik = useFormik<Omit<IAddress, 'id'>>({
    initialValues: address,
    enableReinitialize: true,
    validationSchema,
    onSubmit: async (data) => {
      if (isCreate) {
        const res = await createAddress(data);
        if (res.data) {
          onCreate(res.data.id);
        }
      } else {
        ediAddress(data);
      }
    },
  });

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <AddressLabels
          title={`${address.countryName}, ${address.cityName}, ${address.street}, ${address.apartment}`}
          onDelete={handleDelete}
          closeActiveAddress={closeActiveAddress}
        />
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
              type="text"
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
              type="text"
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

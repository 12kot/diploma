import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

import { BgImage, Button, MapWithRoute } from 'components';
import { useEscapeKey, getOrderStatusText, EUserRole, cx } from 'features';

import { SVGBack, SVGCargo, SVGMapMarker, tilesImg } from 'assets';

import styles from './style.module.scss';
import { useAppSelector, useCreateCargoMutation, useEditCargoMutation } from 'store';
import { useFormik } from 'formik';

interface Props {
  setActiveOrder: (v: number | null) => void;
}

interface IFormOrder {
  loadApproach: 'FTL' | 'LTL';
  loadMethod: 'ABOVE' | 'BEHIND' | 'SIDE';
  name: string;
  packaging: 'BAG' | 'BOX' | 'PALLET' | 'TAPE';
  depth: string | number | null;
  height: string | number | null;
  weight: string | number | null;
  width: string | number | null;

  distance: number | null;

  landingApartment: number | null;
  landingHouse: number | null;
  landingCityName: string;
  landingCountryName: string;
  landingPhoneNumber: string;
  landingStreet: string;
  landingDate: string;
  landingDateLoadType: 'AUTOMATED' | 'MANUAL';

  loadingApartment: number | null;
  loadingHouse: number | null;
  loadingCityName: string;
  loadingCountryName: string;
  loadingPhoneNumber: string;
  loadingStreet: string;
  loadingDate: string;
  loadingDateLoadType: 'AUTOMATED' | 'MANUAL';

  paymentDate: string;
  paymentDeadline: string;
  paymentStatus: 'LATE' | 'ON_TIME' | 'OWE';
  price: number | null;
}

const LoadApproachValues = ['FTL', 'LTL'];
const LandingDateLoadValues = ['AUTOMATED', 'MANUAL'];
const LoadMethodValues = ['ABOVE', 'BEHIND', 'SIDE'];
const PackagingValues = ['BAG', 'BOX', 'PALLET', 'TAPE'];

export const FullOrder = ({ setActiveOrder }: Props) => {
  const { t } = useTranslation(['common', 'dashboard']);

  const [ediCargo] = useEditCargoMutation();
  const [createCargo] = useCreateCargoMutation();

  const validationSchema = Yup.object({
    loadApproach: Yup.mixed<'FTL' | 'LTL'>().oneOf(['FTL', 'LTL']).required(),
    loadMethod: Yup.mixed<'ABOVE' | 'BEHIND' | 'SIDE'>().oneOf(['ABOVE', 'BEHIND', 'SIDE']).required(),
    name: Yup.string().required(),
    packaging: Yup.mixed<'BAG' | 'BOX' | 'PALLET' | 'TAPE'>().oneOf(['BAG', 'BOX', 'PALLET', 'TAPE']).required(),
    depth: Yup.number().min(1).required(),
    height: Yup.number().min(1).required(),
    weight: Yup.number().min(1).required(),
    width: Yup.number().min(1).required(),
    distance: Yup.number().min(1).required(),

    landingApartment: Yup.number().min(1).required(),
    landingHouse: Yup.number().min(1).required(),
    landingCityName: Yup.string().required(),
    landingCountryName: Yup.string().required(),
    landingPhoneNumber: Yup.string().required(),
    landingStreet: Yup.string().required(),
    landingDate: Yup.string().required(),
    landingDateLoadType: Yup.mixed<'AUTOMATED' | 'MANUAL'>().oneOf(['AUTOMATED', 'MANUAL']).required(),

    loadingApartment: Yup.number().min(1).required(),
    loadingHouse: Yup.number().min(1).required(),
    loadingCityName: Yup.string().required(),
    loadingCountryName: Yup.string().required(),
    loadingPhoneNumber: Yup.string().required(),
    loadingStreet: Yup.string().required(),
    loadingDate: Yup.string().required(),
    loadingDateLoadType: Yup.mixed<'AUTOMATED' | 'MANUAL'>().oneOf(['AUTOMATED', 'MANUAL']).required(),

    paymentDate: Yup.string().required(),
    paymentDeadline: Yup.string().required(),
    paymentStatus: Yup.mixed<'LATE' | 'ON_TIME' | 'OWE'>().oneOf(['LATE', 'ON_TIME', 'OWE']).required(),
    price: Yup.number().min(1).required(),
  });

  const formik = useFormik<IFormOrder>({
    initialValues: {
      // loadApproach: cargo.loadApproach,
      // loadMethod: cargo.loadMethod,
      // name: cargo.name,
      // packaging: cargo.packaging,
      // depth: cargo.size.depth ?? '',
      // height: cargo.size.height ?? '',
      // weight: cargo.size.weight ?? '',
      // width: cargo.size.width ?? '',
    },
    enableReinitialize: true,
    validationSchema,
    onSubmit: async (data) => {
      // const newData = {
      //   id: cargo.id,
      //   loadApproach: data.loadApproach,
      //   loadMethod: data.loadMethod,
      //   name: data.name,
      //   packaging: data.packaging,
      //   size: {
      //     id: cargo.size.id,
      //     depth: Number(data.depth),
      //     height: Number(data.height),
      //     weight: Number(data.weight),
      //     width: Number(data.width),
      //   },
      // };
      // if (isCreate) {
      //   const res = await createCargo(newData);
      //   if (res.data) {
      //     onCreate(res.data.id);
      //   }
      // } else {
      //   ediCargo(newData);
      // }
    },
  });

  useEscapeKey(() => setActiveOrder(null));

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <div className={styles.info}>
          <SVGCargo />
          <p>
            <b>{t('dashboard:createOrder.cargoInfo')}</b>
          </p>
        </div>
        <section className={styles.item}>
          <input
            type="text"
            name="name"
            placeholder={t('common:placeholders.name')}
            value={formik.values.name}
            className={cx(formik.touched.name && formik.errors.name && styles.error)}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </section>
        <section className={styles.item}>
          <input
            type="number"
            min={1}
            placeholder={t('common:placeholders.width')}
            {...formik.getFieldProps('width')}
            className={cx(formik.touched.width && formik.errors.width && styles.error)}
          />
          <input
            type="number"
            min={1}
            placeholder={t('common:placeholders.height')}
            {...formik.getFieldProps('height')}
            className={cx(formik.touched.height && formik.errors.height && styles.error)}
          />
          <input
            type="number"
            min={1}
            placeholder={t('common:placeholders.depth')}
            {...formik.getFieldProps('depth')}
            className={cx(formik.touched.depth && formik.errors.depth && styles.error)}
          />
          <input
            type="number"
            min={1}
            placeholder={t('common:placeholders.weight')}
            {...formik.getFieldProps('weight')}
            className={cx(formik.touched.weight && formik.errors.weight && styles.error)}
          />
        </section>
        <section className={styles.item}>
          <select
            {...formik.getFieldProps('loadApproach')}
            className={cx(formik.touched.loadApproach && formik.errors.loadApproach && styles.error)}>
            {LoadApproachValues.map((value) => (
              <option value={value} key={value}>
                {value}
              </option>
            ))}
          </select>
          <select
            {...formik.getFieldProps('loadMethod')}
            className={cx(formik.touched.loadMethod && formik.errors.loadMethod && styles.error)}>
            {LoadMethodValues.map((value) => (
              <option value={value} key={value}>
                {value}
              </option>
            ))}
          </select>
          <select
            {...formik.getFieldProps('packaging')}
            className={cx(formik.touched.packaging && formik.errors.packaging && styles.error)}>
            {PackagingValues.map((value) => (
              <option value={value} key={value}>
                {value}
              </option>
            ))}
          </select>
        </section>
        <div className={styles.info}>
          <SVGMapMarker />
          <p>
            <b>{t('dashboard:pages.orders.landingInfo')}</b>
          </p>
        </div>

        <div className={styles.item}>
          <input
            type="text"
            name="landingCountryName"
            placeholder={t('placeholders.country')}
            className={cx(formik.touched.landingCountryName && formik.errors.landingCountryName && styles.error)}
            value={formik.values.landingCountryName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <input
            type="text"
            name="landingCityName"
            placeholder={t('placeholders.city')}
            className={cx(formik.touched.landingCityName && formik.errors.landingCityName && styles.error)}
            value={formik.values.landingCityName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className={styles.item}>
          <input
            type="text"
            name="landingStreet"
            placeholder={t('placeholders.street')}
            className={cx(formik.touched.landingStreet && formik.errors.landingStreet && styles.error)}
            value={formik.values.landingStreet}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <input
            type="number"
            name="landingHouse"
            placeholder={t('placeholders.house')}
            className={cx(formik.touched.landingHouse && formik.errors.landingHouse && styles.error)}
            value={formik.values.landingHouse as number}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className={styles.item}>
          <input
            type="text"
            name="landingPhoneNumber"
            placeholder={t('placeholders.phoneNumber')}
            className={cx(formik.touched.landingPhoneNumber && formik.errors.landingPhoneNumber && styles.error)}
            value={formik.values.landingPhoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <input
            type="text"
            name="landingApartment"
            placeholder={t('placeholders.apartment')}
            className={cx(formik.touched.landingApartment && formik.errors.landingApartment && styles.error)}
            value={formik.values.landingApartment as number}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className={styles.item}>
          <select
            {...formik.getFieldProps('landingDateLoadType')}
            className={cx(formik.touched.landingDateLoadType && formik.errors.landingDateLoadType && styles.error)}>
            {LandingDateLoadValues.map((value) => (
              <option value={value} key={value}>
                {value}
              </option>
            ))}
          </select>
          <input
            type="date"
            name="landingDate"
            placeholder={t('placeholders.landingDate')}
            className={cx(formik.touched.landingDate && formik.errors.landingDate && styles.error)}
            value={formik.values.landingDate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>

        <div className={styles.info}>
          <SVGMapMarker />
          <p>
            <b>{t('dashboard:pages.orders.loadingInfo')}</b>
          </p>
        </div>

        <div className={styles.item}>
          <input
            type="text"
            name="loadingCountryName"
            placeholder={t('placeholders.country')}
            className={cx(formik.touched.loadingCountryName && formik.errors.loadingCountryName && styles.error)}
            value={formik.values.loadingCountryName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <input
            type="text"
            name="loadingCityName"
            placeholder={t('placeholders.city')}
            className={cx(formik.touched.loadingCityName && formik.errors.loadingCityName && styles.error)}
            value={formik.values.loadingCityName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className={styles.item}>
          <input
            type="text"
            name="loadingStreet"
            placeholder={t('placeholders.street')}
            className={cx(formik.touched.loadingStreet && formik.errors.loadingStreet && styles.error)}
            value={formik.values.loadingStreet}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <input
            type="text"
            name="loadingHouse"
            placeholder={t('placeholders.house')}
            className={cx(formik.touched.loadingHouse && formik.errors.loadingHouse && styles.error)}
            value={formik.values.loadingHouse as number}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className={styles.item}>
          <input
            type="text"
            name="loadingPhoneNumber"
            placeholder={t('placeholders.phoneNumber')}
            className={cx(formik.touched.loadingPhoneNumber && formik.errors.loadingPhoneNumber && styles.error)}
            value={formik.values.loadingPhoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <input
            type="text"
            name="loadingApartment"
            placeholder={t('placeholders.apartment')}
            className={cx(formik.touched.loadingApartment && formik.errors.loadingApartment && styles.error)}
            value={formik.values.loadingApartment as number}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className={styles.item}>
          <select
            {...formik.getFieldProps('loadingDateLoadType')}
            className={cx(formik.touched.loadingDateLoadType && formik.errors.loadingDateLoadType && styles.error)}>
            {LandingDateLoadValues.map((value) => (
              <option value={value} key={value}>
                {value}
              </option>
            ))}
          </select>
          <input
            type="date"
            name="loadingDate"
            placeholder={t('placeholders.loadingDate')}
            className={cx(formik.touched.loadingDate && formik.errors.loadingDate && styles.error)}
            value={formik.values.loadingDate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <Button type="submit" className={styles.save}>
          {t('placeholders.save')}
        </Button>
      </form>

      <BgImage image={tilesImg} isTop />
    </div>
  );
};

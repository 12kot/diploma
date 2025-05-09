import { cx, ICargo } from 'features';
import * as Yup from 'yup';
import { BgImage, Button } from 'components';

import tilesImage from 'assets/img/tiles.png';

import styles from './styles.module.scss';
import { CargoLabels } from './CargoLabels';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { useCreateCargoMutation, useEditCargoMutation } from 'store';
import { SVGCargo } from 'assets';
import toast from 'react-hot-toast';

interface IFormCargo {
  loadApproach: 'FTL' | 'LTL';
  loadMethod: 'ABOVE' | 'BEHIND' | 'SIDE';
  name: string;
  packaging: 'BAG' | 'BOX' | 'PALLET' | 'TAPE';
  depth: string | number | null;
  height: string | number | null;
  weight: string | number | null;
  width: string | number | null;
}

interface Props {
  cargo: ICargo;
  isCreate: boolean;
  onCreate: (id: ICargo['id']) => void;
  closeActiveCargo: () => void;
}

const LoadApproachValues = ['FTL', 'LTL'];
const LoadMethodValues = ['ABOVE', 'BEHIND', 'SIDE'];
const PackagingValues = ['BAG', 'BOX', 'PALLET', 'TAPE'];

export const ActiveCargo = ({ cargo, isCreate, onCreate, closeActiveCargo }: Props) => {
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
  });

  const formik = useFormik<IFormCargo>({
    initialValues: {
      loadApproach: cargo.loadApproach,
      loadMethod: cargo.loadMethod,
      name: cargo.name,
      packaging: cargo.packaging,
      depth: cargo.size.depth ?? '',
      height: cargo.size.height ?? '',
      weight: cargo.size.weight ?? '',
      width: cargo.size.width ?? '',
    },
    enableReinitialize: true,
    validationSchema,
    onSubmit: async (data) => {
      const newData = {
        id: cargo.id,
        loadApproach: data.loadApproach,
        loadMethod: data.loadMethod,
        name: data.name,
        packaging: data.packaging,
        size: {
          id: cargo.size.id,
          depth: Number(data.depth),
          height: Number(data.height),
          weight: Number(data.weight),
          width: Number(data.width),
        },
      };
      if (isCreate) {
        const res = await createCargo(newData);
        if (res.data) {
          toast.success(t('cargoSuccess'));
          onCreate(res.data.id);
        } else {
          toast.error(t('cargoError'));
        }
      } else {
        ediCargo(newData);
      }
    },
  });
  
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <CargoLabels
          title={cargo.name ? `${cargo.name}, ${t('common:gramm', { value: cargo.size.weight })}` : t('newCargo')}
          closeActiveCargo={closeActiveCargo}
        />
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
          <Button type="submit" className={styles.save}>
            {t('placeholders.save')}
          </Button>
        </form>
      </div>
      <BgImage image={tilesImage} isTop />
    </div>
  );
};

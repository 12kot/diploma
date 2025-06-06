import { useState } from 'react';

import * as Yup from 'yup';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

import { BgImage, Button } from 'components';
import { useEscapeKey, cx, ITransportation, ICargo, IUser, EUserRole, IDelivery } from 'features';

import { SVGCargo, SVGMapMarker, tilesImg } from 'assets';

import styles from './style.module.scss';
import { useAppSelector, useCreateTransportationsMutation, useEditTransportationsMutation } from 'store';

const formatDate = (timestamp: number) => {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

interface Props {
  transportation?: ITransportation;
  users: IUser[];
  cargos: ICargo[];
  canOnChange: boolean;
  addresses: IDelivery[];
  onSumbit: () => void;
  setActiveOrder: (v: number | null) => void;
}

interface IFormOrder {
  distance: string | number | null;

  price: number;
  paymentDate: string;
  paymentDeadline: string;
}

export const FullOrder = ({ transportation, users, onSumbit, cargos, addresses, canOnChange }: Props) => {
  const { t } = useTranslation(['common', 'dashboard']);
  const user = useAppSelector((state) => state.user);

  const [activeUser, setActiveUser] = useState(transportation?.user);
  const [activeOwner, setActiveOwner] = useState(transportation?.payment.user);
  const [activeCrago, setActiveCargo] = useState(transportation?.cargo);
  const [activeLanding, setActiveLanding] = useState(transportation?.landing);
  const [activeLoading, setActiveLoading] = useState(transportation?.loading);

  const [ediCargo, { isLoading: isLoading }] = useEditTransportationsMutation();
  const [createTransportation, { isLoading: isLoading1 }] = useCreateTransportationsMutation();

  const validationSchema = Yup.object({
    distance: Yup.number().min(1).required(),

    paymentDate: Yup.string().optional(),
    paymentDeadline: Yup.string().required(),
    price: Yup.number().min(1).required(),
  });

  const formik = useFormik<Partial<IFormOrder>>({
    initialValues: {
      distance: transportation?.distance ?? '',
      paymentDate: transportation?.payment.date ? formatDate(transportation?.payment.date) : undefined,
      paymentDeadline: transportation?.payment.deadline ? formatDate(transportation?.payment.deadline) : undefined,
      price: transportation?.payment.price,
    },
    enableReinitialize: true,
    validationSchema,
    onSubmit: async (data, { resetForm }) => {
      if (!activeCrago || !activeLanding || !activeLoading || !canOnChange || !activeUser || !activeOwner) return;

      const newData = {
        cargo: {
          id: activeCrago?.id,
        },
        distance: data.distance,
        id: transportation?.id,
        landing: {
          id: activeLanding?.id,
        },
        loading: {
          id: activeLoading?.id,
        },
        payment: {
          price: data.price,
          date: new Date(data.paymentDate as string).getTime(),
          deadline: data.paymentDeadline,
          user: {
            id: activeOwner.id,
          },
        },
        user: {
          id: activeUser.id,
        },
      };
      if (typeof transportation?.id !== 'number') {
        //@ts-ignore
        const res = await createTransportation(newData as ITransportation);
        if (!res.error) {
          resetForm();
          toast.success(t('common:transportationSuccess'));
        } else {
          toast.error(t('common:transportationError'));
        }
      } else {
        //@ts-ignore
        await ediCargo(newData as ITransportation);
      }
      onSumbit();
    },
  });

  useEscapeKey(() => onSumbit());

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
            type="number"
            name="distance"
            placeholder={t('common:placeholders.distance')}
            value={formik.values.distance as number}
            className={cx(formik.touched.distance && formik.errors.distance && styles.error)}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={!canOnChange}
          />
        </section>

        {canOnChange && (
          <>
            <div className={styles.info}>
              <SVGMapMarker />
              <p>
                <b>{t('dashboard:pages.orders.paymentInfo')}</b>
              </p>
            </div>

            <div className={styles.item}>
              <div className={styles.full}>
                <span>{t('placeholders.paymentDate')}</span>
                <input
                  type="date"
                  name="paymentDate"
                  placeholder={t('placeholders.paymentDate')}
                  className={cx(formik.touched.paymentDate && formik.errors.paymentDate && styles.error)}
                  value={formik.values.paymentDate}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  disabled={!canOnChange}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              <div className={styles.full}>
                <span>{t('placeholders.paymentDeadline')}</span>
                <input
                  type="date"
                  name="paymentDeadline"
                  placeholder={t('placeholders.paymentDeadline')}
                  className={cx(formik.touched.paymentDeadline && formik.errors.paymentDeadline && styles.error)}
                  value={formik.values.paymentDeadline}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  disabled={!canOnChange}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              <div className={styles.full}>
                <span>{t('placeholders.price')}</span>
                <input
                  type="number"
                  name="price"
                  placeholder={t('placeholders.price')}
                  className={cx(formik.touched.price && formik.errors.price && styles.error)}
                  value={formik.values.price as number}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  disabled={!canOnChange}
                />
              </div>
            </div>
          </>
        )}

        {canOnChange && (
          <>
            <div className={styles.info}>
              <SVGMapMarker />
              <p>
                <b>{t('dashboard:pages.orders.paymentUserInfo')}</b>
              </p>
            </div>
            <div className={styles.cards}>
              {users
                .filter((user) => user.roles.find((role) => role.role === EUserRole.Owner))
                .map((user) => (
                  <Button
                    type="button"
                    buttonType={activeOwner?.id !== user.id ? 'transparent' : undefined}
                    onClick={() => setActiveOwner(user)}
                    key={user.id}>
                    {user.firstName + ' ' + user.lastName}
                  </Button>
                ))}
            </div>
          </>
        )}

        <div className={styles.info}>
          <SVGCargo />
          <p>
            <b>{t('dashboard:pages.orders.cargoInfo')}</b>
          </p>
        </div>

        <div className={styles.cards}>
          {!canOnChange && (
            <Button buttonType={['border', 'transparent']} type="button">
              {activeCrago?.name +
                ', ' +
                activeCrago?.loadApproach +
                ', ' +
                activeCrago?.loadMethod +
                ', ' +
                activeCrago?.packaging +
                ', ' +
                `${activeCrago?.size.depth}x${activeCrago?.size.height}x${activeCrago?.size.weight}x${activeCrago?.size.width}`}
            </Button>
          )}
          {canOnChange &&
            cargos.map((cargo) => (
              <Button
                type="button"
                buttonType={activeCrago?.id !== cargo.id ? 'transparent' : undefined}
                onClick={() => setActiveCargo(cargo)}
                disabled={!canOnChange}
                key={cargo.id}>
                {cargo.name}
              </Button>
            ))}
        </div>

        <div className={styles.info}>
          <SVGMapMarker />
          <p>
            <b>{t('dashboard:pages.orders.landingInfo')}</b>
          </p>
        </div>
        <div className={styles.cards}>
          {!canOnChange && (
            <Button buttonType={['border', 'transparent']} type="button">
              {`${activeLanding?.address.countryName ? `${activeLanding?.address.countryName}, ` : ''}${
                activeLanding?.address.cityName ? `${activeLanding?.address.cityName}, ` : ''
              }${activeLanding?.address.street ? `${activeLanding?.address.street}` : ''}${
                activeLanding?.address.phoneNumber ? `, ${activeLanding.address.phoneNumber}` : ''
              }`}
            </Button>
          )}
          {addresses.map((cargo) => (
            <Button
              type="button"
              buttonType={activeLanding?.id !== cargo.id ? 'transparent' : undefined}
              disabled={activeLoading?.id === cargo.id || !canOnChange}
              onClick={() => setActiveLanding(cargo)}
              key={cargo.id}>
              {`${cargo?.address.countryName ? `${cargo?.address.countryName}, ` : ''}${
                cargo?.address.cityName ? `${cargo?.address.cityName}, ` : ''
              }${cargo?.address.street ? `${cargo?.address.street}` : ''}`}
            </Button>
          ))}
        </div>

        <div className={styles.info}>
          <SVGMapMarker />
          <p>
            <b>{t('dashboard:pages.orders.loadingInfo')}</b>
          </p>
        </div>
        <div className={styles.cards}>
          {!canOnChange && (
            <Button buttonType={['border', 'transparent']} type="button">
              {`${activeLanding?.address.countryName ? `${activeLanding?.address.countryName}, ` : ''}${
                activeLanding?.address.cityName ? `${activeLanding?.address.cityName}, ` : ''
              }${activeLanding?.address.street ? `${activeLanding?.address.street}` : ''}${
                activeLanding?.address.phoneNumber ? `, ${activeLanding.address.phoneNumber}` : ''
              }`}
            </Button>
          )}
          {canOnChange &&
            addresses.map((cargo) => (
              <Button
                type="button"
                buttonType={activeLoading?.id !== cargo.id ? 'transparent' : undefined}
                disabled={activeLanding?.id === cargo.id || !canOnChange}
                onClick={() => setActiveLoading(cargo)}
                key={cargo.id}>
                {`${cargo.address.countryName ? `${cargo.address.countryName}, ` : ''}${
                  cargo.address.cityName ? `${cargo.address.cityName}, ` : ''
                }${cargo?.address.street ? `${cargo.address.street}` : ''}`}
              </Button>
            ))}
        </div>

        <div className={styles.info}>
          <SVGMapMarker />
          <p>
            <b>{t('dashboard:pages.orders.driversInfo')}</b>
          </p>
        </div>
        <div className={styles.cards}>
          {!canOnChange && (
            <Button buttonType={['border', 'transparent']} type="button">
              {user.firstName + ' ' + user.lastName}
            </Button>
          )}
          {canOnChange &&
            users
              .filter((user) => user.roles.find((role) => role.role === EUserRole.Driver))
              .map((user) => (
                <Button
                  type="button"
                  buttonType={activeUser?.id !== user.id ? 'transparent' : undefined}
                  onClick={() => setActiveUser(user)}
                  key={user.id}>
                  {user.firstName + ' ' + user.lastName}
                </Button>
              ))}
        </div>

        {canOnChange && (
          <Button
            type="submit"
            onClick={() => console.log(formik.errors)}
            disabled={isLoading || isLoading1}
            className={styles.save}>
            {t('placeholders.save')}
          </Button>
        )}
      </form>

      <BgImage image={tilesImg} isTop />
    </div>
  );
};

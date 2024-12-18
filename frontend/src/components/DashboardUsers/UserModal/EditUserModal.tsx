import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { AllRoles, cx, EUserRole } from 'features';

import { Button, H2, Modal } from 'components';

import styles from './styles.module.scss';

interface ModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  isCreate?: boolean;
}

export const EditUserModal = ({ isOpen, setIsOpen, isCreate }: ModalProps) => {
  const { t } = useTranslation(['dashboard', 'common']);
  const [activeRole, setActiveRole] = useState<EUserRole>(EUserRole.Admin);

  const validationSchema = Yup.object({
    name: Yup.string().required(),
    surname: Yup.string().required(),
    email: Yup.string().email().required(),
    phone: Yup.string().required(),
    country: Yup.string().required(),
    city: Yup.string().required(),
    self: Yup.string(),
  });

  const formik = useFormik<IFormik>({
    initialValues: initFormik,
    validationSchema,
    onSubmit: (data, { resetForm }) => {
      console.log(data);
      setIsOpen();
      resetForm();
    },
  });

  return (
    <Modal setIsOpen={setIsOpen} isOpen={isOpen} className={styles.container}>
      <header>
        <H2>
          {isCreate ? t('dashboard:editProfile.create') : t('dashboard:editProfile.edit', { name: 'Hanna Kisel' })}
        </H2>
      </header>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <section className={styles.section}>
          <input
            type="text"
            name="name"
            placeholder={t('common:placeholders.name')}
            className={cx(formik.touched.name && formik.errors.name && styles.error)}
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <input
            type="text"
            name="surname"
            placeholder={t('common:placeholders.surname')}
            className={cx(formik.touched.surname && formik.errors.surname && styles.error)}
            value={formik.values.surname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </section>
        <section className={styles.roles}>
          {AllRoles(t).map((role, i) => (
            <Button
              buttonType={'default'}
              className={cx(styles.button, role.value === activeRole && styles.active)}
              key={i}
              type="button"
              onClick={() => setActiveRole(role.value)}>
              {role.name}
            </Button>
          ))}
        </section>
        <input
          type="email"
          name="email"
          placeholder={t('common:placeholders.email')}
          className={cx(formik.touched.email && formik.errors.email && styles.error)}
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <input
          type="phone"
          name="phone"
          placeholder={t('common:placeholders.phoneNumber')}
          className={cx(formik.touched.phone && formik.errors.phone && styles.error)}
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <section className={styles.section}>
          <input
            type="text"
            name="country"
            placeholder={t('common:placeholders.country')}
            className={cx(formik.touched.country && formik.errors.country && styles.error)}
            value={formik.values.country}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <input
            type="text"
            name="city"
            placeholder={t('common:placeholders.city')}
            className={cx(formik.touched.city && formik.errors.city && styles.error)}
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </section>
        <textarea
          rows={8}
          name="self"
          placeholder={t('common:placeholders.selfDescription')}
          value={formik.values.self}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </form>
      <section className={styles.actions}>
        <Button buttonType={"transparent"} onClick={setIsOpen}>
          {t('common:buttons.cancel')}
        </Button>
        <Button onClick={() => formik.handleSubmit()}>
          {isCreate ? t('common:buttons.createUser') : t('common:buttons.save')}
        </Button>
      </section>
    </Modal>
  );
};

interface IFormik {
  name: string;
  surname: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  self: string;
}

const initFormik: IFormik = {
  name: '',
  surname: '',
  email: '',
  phone: '',
  country: '',
  city: '',
  self: '',
};

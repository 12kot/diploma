import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { AllRoles, cx, EUserRole } from 'features';

import { Button, H2, Modal } from 'components';

import styles from './styles.module.scss';
import { useAppSelector, useRegisterUserMutation } from 'store';

interface ModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  isCreate?: boolean;
}

export const EditUserModal = ({ isOpen, setIsOpen, isCreate }: ModalProps) => {
  const { t } = useTranslation(['dashboard', 'common']);
  const [registerUser] = useRegisterUserMutation();
  const { firstName, lastName } = useAppSelector((state) => state.user);
  const [activeRole, setActiveRole] = useState<EUserRole>(EUserRole.Admin);

  const validationSchema = Yup.object({
    name: Yup.string().required(),
    surname: Yup.string().required(),
    email: Yup.string().email().required(),
    phone: Yup.string().required(),
    username: Yup.string().required(),
    password: Yup.string().required(),
    self: Yup.string(),
  });

  const formik = useFormik<IFormik>({
    initialValues: initFormik,
    validationSchema,
    onSubmit: async (data, { resetForm }) => {
      const userData = {
        about: data.self.trim(),
        email: data.email.trim(),
        firstName: data.name.trim(),
        lastName: data.surname.trim(),
        name: data.username.trim(),
        password: data.password.trim(),
        phoneNumber: data.phone.trim(),
        roles: [
          {
            role: activeRole,
          },
        ],
      };

      let isError = false;

      if (isCreate) {
        const res = await registerUser(userData);
        isError = !!res.error;
      }

      if (isError) {
        alert('Error');
      } else {
        setIsOpen();
        resetForm();
        alert('Done');
      }
    },
  });

  return (
    <Modal setIsOpen={setIsOpen} isOpen={isOpen} className={styles.container}>
      <header>
        <H2>
          {isCreate
            ? t('dashboard:editProfile.create')
            : t('dashboard:editProfile.edit', { name: firstName + ' ' + lastName })}
        </H2>
      </header>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <section className={styles.section}>
          <input
            type="text"
            name="username"
            placeholder={t('common:placeholders.username')}
            className={cx(formik.touched.username && formik.errors.username && styles.error)}
            value={formik.values.username.trim()}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <input
            type="text"
            name="password"
            placeholder={t('common:placeholders.password')}
            className={cx(formik.touched.password && formik.errors.password && styles.error)}
            value={formik.values.password.trim()}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </section>
        <section className={styles.section}>
          <input
            type="text"
            name="name"
            placeholder={t('common:placeholders.name')}
            className={cx(formik.touched.name && formik.errors.name && styles.error)}
            value={formik.values.name.trim()}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <input
            type="text"
            name="surname"
            placeholder={t('common:placeholders.surname')}
            className={cx(formik.touched.surname && formik.errors.surname && styles.error)}
            value={formik.values.surname.trim()}
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
          value={formik.values.email.trim()}
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
        <textarea
          rows={8}
          name="self"
          placeholder={t('common:placeholders.selfDescription')}
          value={formik.values.self}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <section className={styles.actions}>
          <Button buttonType={'transparent'} onClick={setIsOpen}>
            {t('common:buttons.cancel')}
          </Button>
          <Button type="submit">{isCreate ? t('common:buttons.createUser') : t('common:buttons.save')}</Button>
        </section>
      </form>
    </Modal>
  );
};

interface IFormik {
  name: string;
  surname: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  self: string;
}

const initFormik: IFormik = {
  name: '',
  surname: '',
  email: '',
  phone: '',
  username: '',
  password: '',
  self: '',
};

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { AllRoles, EUserRole } from 'features';

import { H2 } from 'components/UI/Font';
import { Modal } from 'components/Modal';

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
    <Modal setIsOpen={setIsOpen} isOpen={isOpen} className="flex-col gap user-edit-modal">
      <header>
        <H2>
          {isCreate ? t('dashboard:editProfile.create') : t('dashboard:editProfile.edit', { name: 'Hanna Kisel' })}
        </H2>
      </header>
      <form className="flex-col gap" onSubmit={formik.handleSubmit}>
        <div className="flex-col gap">
          <section className="flex gap-mini">
            <input
              type="text"
              name="name"
              placeholder={t('common:placeholders.name')}
              className={`w-full ${formik.touched.name && formik.errors.name && '--error'}`}
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <input
              type="text"
              name="surname"
              placeholder={t('common:placeholders.surname')}
              className={`w-full ${formik.touched.surname && formik.errors.surname && '--error'}`}
              value={formik.values.surname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </section>
          <section className="flex w-full user-edit-modal-roles">
            {AllRoles(t).map((role, i) => (
              <button
                className={`--default ${role.value === activeRole && 'user-edit-modal-roles-active'} nowrap`}
                key={i}
                type="button"
                onClick={() => setActiveRole(role.value)}>
                {role.name}
              </button>
            ))}
          </section>
          <input
            type="email"
            name="email"
            placeholder={t('common:placeholders.email')}
            className={`w-full ${formik.touched.email && formik.errors.email && '--error'}`}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <input
            type="phone"
            name="phone"
            placeholder={t('common:placeholders.phoneNumber')}
            className={`w-full ${formik.touched.phone && formik.errors.phone && '--error'}`}
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <section className="flex gap-mini">
            <input
              type="text"
              name="country"
              placeholder={t('common:placeholders.country')}
              className={`w-full ${formik.touched.country && formik.errors.country && '--error'}`}
              value={formik.values.country}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <input
              type="text"
              name="city"
              placeholder={t('common:placeholders.city')}
              className={`w-full ${formik.touched.city && formik.errors.city && '--error'}`}
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
        </div>
      </form>
      <section className="flex gap-mini user-edit-modal-actions">
        <button className="--transparent w-full" onClick={setIsOpen}>
          {t('common:buttons.cancel')}
        </button>
        <button className="w-full" onClick={() => formik.handleSubmit()}>
          {isCreate ? t('common:buttons.createUser') : t('common:buttons.save')}
        </button>
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

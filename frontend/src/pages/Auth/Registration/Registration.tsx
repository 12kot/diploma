import { AuthHolderLazy } from '..';
import { RegistrationFormLazy } from './Form';

export const Registration = () => {
  return (
    <AuthHolderLazy>
      <RegistrationFormLazy />
    </AuthHolderLazy>
  );
};

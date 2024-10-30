import { AuthHolderLazy } from '..';
import { LoginFormLazy } from './Form';

export const Login = () => {
  return (
    <AuthHolderLazy>
      <LoginFormLazy />
    </AuthHolderLazy>
  );
};

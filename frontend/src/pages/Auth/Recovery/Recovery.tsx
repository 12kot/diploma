import { AuthHolderLazy } from '..';
import { RecoveryFormLazy } from './Form';

export const Recovery = () => {
  return (
    <AuthHolderLazy>
      <RecoveryFormLazy />
    </AuthHolderLazy>
  );
};

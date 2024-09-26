import { ReactNode } from 'react';
import AuthPreview from './components/Preview';

interface Props {
  children: ReactNode;
}

const AuthHolder = ({ children }: Props) => {
  return (
    <div className="auth-container">
      {children}
      <AuthPreview />
    </div>
  );
};

export default AuthHolder;

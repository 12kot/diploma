import React, { createContext, useContext, useMemo, ReactNode, useEffect, useCallback } from 'react';
import { IUserRole } from 'features/types';

import { useLocalStorage } from './useLocalStorage';
import { useUserAuthMutation } from 'store/api/authApi';

interface IUser {
  token: string;
  role: IUserRole;
}

interface AuthContextType {
  user: IUser | null;
  login: (user: IUser) => void;
  setRole: (role: IUserRole) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useLocalStorage<IUser | null>('user', null);
  const [authUser, { data: authUserData, error }] = useUserAuthMutation();

  useEffect(() => {
    //авторизация
  }, [authUser]);

  useEffect(() => {
    //если ошибка - разлогин
  }, [error]);

  useEffect(() => {
    if (!authUserData) return;
    //устанавливаем юзера
  }, [authUserData]);

  const login = useCallback(
    (user: IUser) => {
      setUser(user);
    },
    [setUser],
  );

  //УДАЛИТЬ
  const setRole = useCallback(
    (role: IUserRole) => {
      setUser({ role, token: '121212' });
    },
    [setUser],
  );

  const logout = useCallback(() => {
    setUser(null);
  }, [setUser]);

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
      setRole,
    }),
    [user, login, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

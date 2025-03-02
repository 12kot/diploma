import React, { createContext, useContext, useMemo, ReactNode, useCallback, useState, useEffect } from 'react';
import { EUserRole } from 'features/types';

import { useLocalStorage } from '../hooks/useLocalStorage';
import { useFindUserInfoMutation } from 'store';

interface IUser {
  role: EUserRole;
}

interface MiniUser {
  token: string;
  name: string;
}

interface AuthContextType {
  user: IUser | null;
  miniUser: MiniUser | null;
  isLoading: boolean;
  login: (miniUser: MiniUser) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [findUserInfo, { error, data: userData, isLoading }] = useFindUserInfoMutation();
  const [miniUser, setMiniUser] = useLocalStorage<MiniUser | null>('miniUser', null);

  useEffect(() => {
    if (!miniUser) return;

    findUserInfo({ name: miniUser.name });
  }, [miniUser, findUserInfo]);

  useEffect(() => {
    if (!error) return;
    setUser(null);
  }, [error]);

  useEffect(() => {
    if (!userData) return;
    setUser({...userData, role: userData?.roles[0]?.role});
  }, [userData]);

  const login = useCallback(
    (miniUser: MiniUser) => {
      setMiniUser(miniUser);
    },
    [setMiniUser],
  );

  const logout = useCallback(() => {
    setUser(null);
    setMiniUser(null);
  }, [setUser, setMiniUser]);

  const value = useMemo(
    () => ({
      user,
      miniUser,
      isLoading,
      login,
      logout,
    }),
    [user, login, logout, miniUser, isLoading],
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

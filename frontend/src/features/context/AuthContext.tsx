import React, { createContext, useContext, useMemo, ReactNode, useCallback, useEffect } from 'react';

import { useLocalStorage } from '../hooks/useLocalStorage';
import { useAppDispatch, useFindUserInfoMutation } from 'store';
import { editUserInfo } from 'store/slices/userSlice';


interface MiniUser {
  token: string;
  name: string;
}

interface AuthContextType {
  miniUser: MiniUser | null;
  isLoading: boolean;
  login: (miniUser: MiniUser) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const dispatch = useAppDispatch();
  const [findUserInfo, { error, data: userData, isLoading }] = useFindUserInfoMutation();
  const [miniUser, setMiniUser] = useLocalStorage<MiniUser | null>('miniUser', null);

  useEffect(() => {
    if (!miniUser) return;

    findUserInfo({ name: miniUser.name });
  }, [miniUser, findUserInfo]);

  useEffect(() => {
    if (!error) return;
    dispatch(editUserInfo(null));
    setMiniUser(null);
  }, [error]);

  useEffect(() => {
    if (!userData) return;
    dispatch(editUserInfo({...userData, role: userData?.roles[0]?.role}));
  }, [userData]);

  const login = useCallback(
    (miniUser: MiniUser) => {
      setMiniUser(miniUser);
    },
    [setMiniUser],
  );

  const logout = useCallback(() => {
    dispatch(editUserInfo(null));
    setMiniUser(null);
  }, [dispatch, setMiniUser]);

  const value = useMemo(
    () => ({
      miniUser,
      isLoading,
      login,
      logout,
    }),
    [login, logout, miniUser, isLoading],
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

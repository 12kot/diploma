import { configureStore } from '@reduxjs/toolkit';

import { addressApi, cargoApi, usersApi } from './api';
import { authApi } from './api/authApi';
import userSlice from './slices/userSlice';

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    user: userSlice,
    [authApi.reducerPath]: authApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [addressApi.reducerPath]: addressApi.reducer,
    [cargoApi.reducerPath]: cargoApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(authApi.middleware).concat(addressApi.middleware).concat(cargoApi.middleware).concat(usersApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

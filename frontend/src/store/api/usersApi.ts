import { createApi } from '@reduxjs/toolkit/query/react';
import { BaseQuery } from './baseQuery';
import { EUserRole, IRegisterUser, IUser } from 'features';

interface IGetUser extends IUser {
  roles: { role: EUserRole }[];
}

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: BaseQuery,
  endpoints: (builder) => ({
    findUserInfo: builder.mutation<IGetUser, { name: string }>({
      query: (params) => ({
        url: '/api/users/find',
        method: 'GET',
        params,
      }),
    }),

    editUser: builder.mutation<IUser, Partial<IUser>>({
      query: ({id, ...body}) => ({
        url: `/api/users/${id}`,
        method: 'PUT',
        body,
      }),
    }),
   
    registerUser: builder.mutation<IUser, Partial<IRegisterUser>>({
      query: (body) => ({
        url: `/api/users/register`,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useFindUserInfoMutation, useEditUserMutation, useRegisterUserMutation } = usersApi;

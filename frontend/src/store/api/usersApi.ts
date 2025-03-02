import { createApi } from '@reduxjs/toolkit/query/react';
import { BaseQuery } from './baseQuery';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: BaseQuery,
  endpoints: (builder) => ({
    findUserInfo: builder.mutation<any, { name: string }>({
      query: (params) => ({
        url: '/api/users/find',
        method: 'GET',
        params,
      }),
    }),
  }),
});

export const { useFindUserInfoMutation } = usersApi;

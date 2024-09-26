import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders: (headers) => {
      return headers;
    },
  }),
  endpoints: (builder) => ({
    userAuth: builder.mutation<void, void>({
      query: (body) => ({
        url: '/api/auth/login/',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useUserAuthMutation } = authApi;

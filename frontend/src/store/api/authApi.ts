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
    userAuth: builder.mutation<string, { name: string; password: string }>({
      query: (body) => ({
        url: '/login/',
        method: 'POST',
        body,
        responseHandler: async (response) => {
          return await response.text();
        },
      }),
    }),
  }),
});

export const { useUserAuthMutation } = authApi;

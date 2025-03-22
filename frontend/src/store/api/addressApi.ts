import { createApi } from '@reduxjs/toolkit/query/react';
import { BaseQuery } from './baseQuery';
import { IAddress } from 'features';

export const addressApi = createApi({
  reducerPath: 'addressApi',
  baseQuery: BaseQuery,
  tagTypes: ['addresses'],
  endpoints: (builder) => ({
    getAddresses: builder.query<IAddress[], void>({
      query: () => ({
        url: '/api/addresses',
        method: 'GET',
      }),
      providesTags: ['addresses'],
    }),

    editAddress: builder.mutation<IAddress, Partial<IAddress>>({
      query: ({ id, ...body }) => ({
        url: `/api/addresses/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['addresses'],
    }),

    createAddress: builder.mutation<IAddress, Omit<IAddress, 'id'>>({
      query: (body) => ({
        url: `/api/addresses`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['addresses'],
    }),

    deleteAddress: builder.mutation<IAddress, { id: IAddress['id'] }>({
      query: ({ id }) => ({
        url: `/api/addresses/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['addresses'],
    }),
  }),
});

export const { useGetAddressesQuery, useEditAddressMutation, useCreateAddressMutation, useDeleteAddressMutation } = addressApi;

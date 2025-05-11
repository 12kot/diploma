import { createApi } from '@reduxjs/toolkit/query/react';
import { BaseQuery } from './baseQuery';
import { IDelivery } from 'features';

export const deliveryApi = createApi({
  reducerPath: 'deliveryApi',
  baseQuery: BaseQuery,
  tagTypes: ['delivery'],
  endpoints: (builder) => ({
    getDelivery: builder.query<IDelivery[], void>({
      query: () => ({
        url: '/api/deliveries',
        method: 'GET',
        params: { pageSize: 9999 },
      }),
      providesTags: ['delivery'],
    }),

    editDelivery: builder.mutation<IDelivery, Partial<IDelivery>>({
      query: ({ id, ...body }) => ({
        url: `/api/deliveries/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['delivery'],
    }),

    createDelivery: builder.mutation<IDelivery, Omit<IDelivery, 'id'>>({
      query: (body) => ({
        url: `/api/deliveries`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['delivery'],
    }),
  }),
});

export const { useGetDeliveryQuery, useEditDeliveryMutation, useCreateDeliveryMutation } = deliveryApi;

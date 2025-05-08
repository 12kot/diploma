import { createApi } from '@reduxjs/toolkit/query/react';
import { BaseQuery } from './baseQuery';
import { ITransportation } from 'features';

export const transportationApi = createApi({
  reducerPath: 'transportationApi',
  baseQuery: BaseQuery,
  tagTypes: ['transportations'],
  endpoints: (builder) => ({
    getTransportations: builder.query<ITransportation[], void>({
      query: () => ({
        url: '/api/transportations',
        method: 'GET',
      }),
      providesTags: ['transportations'],
    }),

    editTransportations: builder.mutation<ITransportation, Partial<ITransportation>>({
      query: ({ id, ...body }) => ({
        url: `/api/transportations/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['transportations'],
    }),

    createTransportations: builder.mutation<ITransportation, Partial<ITransportation>>({
      query: (body) => ({
        url: `/api/transportations`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['transportations'],
    }),
  }),
});

export const { useCreateTransportationsMutation, useEditTransportationsMutation, useLazyGetTransportationsQuery } = transportationApi;

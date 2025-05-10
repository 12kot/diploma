import { createApi } from '@reduxjs/toolkit/query/react';
import { BaseQuery } from './baseQuery';
import { ICargo } from 'features';

export const cargoApi = createApi({
  reducerPath: 'cargoApi',
  baseQuery: BaseQuery,
  tagTypes: ['cargo'],
  endpoints: (builder) => ({
    getCargos: builder.query<ICargo[], void>({
      query: () => ({
        url: '/api/cargos',
        method: 'GET',
        params: { pageSize: 9999 },
      }),
      providesTags: ['cargo'],
    }),

    editCargo: builder.mutation<ICargo, Partial<ICargo>>({
      query: ({ id, ...body }) => ({
        url: `/api/cargos/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['cargo'],
    }),

    createCargo: builder.mutation<ICargo, ICargo>({
      query: ({id, ...body}) => ({
        url: `/api/cargos`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['cargo'],
    }),
  }),
});

export const { useGetCargosQuery, useEditCargoMutation, useCreateCargoMutation} = cargoApi;

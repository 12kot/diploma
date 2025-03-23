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

    createCargo: builder.mutation<ICargo, Omit<ICargo, 'id'>>({
      query: (body) => ({
        url: `/api/cargos`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['cargo'],
    }),

    deleteCargo: builder.mutation<ICargo, { id: ICargo['id'] }>({
      query: ({ id }) => ({
        url: `/api/cargos/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['cargo'],
    }),
  }),
});

export const { useGetCargosQuery, useEditCargoMutation, useCreateCargoMutation, useDeleteCargoMutation} = cargoApi;

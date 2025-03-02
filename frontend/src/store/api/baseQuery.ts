import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const BaseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
  prepareHeaders: (headers) => {
    const userStr = localStorage.getItem('miniUser');
    let user;
    try {
      user = JSON.parse(userStr + '');
    } catch {
      console.log('incorrect user');
    }

    headers.set('Authorization', `Bearer ${user?.token}`);
    return headers;
  },
});

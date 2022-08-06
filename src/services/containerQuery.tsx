import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ContainerResponse } from '../types';

export const containerAPI = createApi({
  reducerPath: 'containerAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),

  endpoints: (builder) => ({
    getContainers: builder.query<ContainerResponse, void>({
      query: () => `container`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetContainersQuery } = containerAPI;

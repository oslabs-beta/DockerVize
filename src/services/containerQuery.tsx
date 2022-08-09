import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ContainerResponse, MemoryDataResponse } from '../types';

export const containerAPI = createApi({
  reducerPath: 'containerAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),

  endpoints: (builder) => ({
    getContainers: builder.query<ContainerResponse, void>({
      query: () => `container`,
    }),
    getData: builder.query<MemoryDataResponse, void>({
      query: () => ({
        url: 'metrics',
        method: 'POST',
        body: {
          query: 'container_memory_usage_bytes',
          secondsPassed: 90,
          interval: 15,
        },
      }),
    }),
  }),
});

// query: () => ({
//   url: '/metrics',
//   method: 'GET',
//   body: {query: }
// }),

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetContainersQuery, useGetDataQuery } = containerAPI;

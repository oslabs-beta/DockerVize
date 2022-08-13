import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ContainerResponse, MemoryDataResponse } from '../types';

export const containerAPI = createApi({
  reducerPath: 'containerAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),

  endpoints: (builder) => ({
    getContainers: builder.query<ContainerResponse, void>({
      query: () => `container`,
    }),
    getMemoryData: builder.query<MemoryDataResponse, void>({
      query: () => ({
        url: 'metrics',
        method: 'POST',
        body: {
          query: 'container_memory_usage_bytes',
          secondsPassed: 90,
          interval: 1,
        },
      }),
    }),
    getCPUData: builder.query<MemoryDataResponse, void>({
      query: () => ({
        url: 'metrics/cpu',
        method: 'POST',
        body: {
          query:
            'rate(container_cpu_user_seconds_total{id=~"/docker.*"}[30s])*100',
          secondsPassed: 90,
          interval: 1,
        },
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are auto-generated based on the defined endpoints
export const {
  useGetContainersQuery,
  useGetMemoryDataQuery,
  useGetCPUDataQuery,
} = containerAPI;

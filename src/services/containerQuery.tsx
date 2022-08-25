//Redux Query files are used to send requests to the backend or externally. 

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ContainerResponse, MemoryDataResponse } from '../types';

//RTK Query is a powerful data fetching and caching tool. It is designed to simplify common cases for loading data in a web application, 
//eliminating the need to hand-write data fetching & caching logic yourself.

//RTK Query is an optional addon included in the Redux Toolkit package, and its functionality is built on top of the other APIs in Redux Toolkit.

export const containerAPI = createApi({
  reducerPath: 'containerAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (builder) => ({
    //Sends request to backend - receives raw container status
    getContainers: builder.query<ContainerResponse, void>({
      query: () => `container`,
    }),
    //Sends request to backend - receives raw memory metrics
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
    //Sends request to backend - receives raw CPU metrics
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

//Export hooks for usage in functional components, which are auto-generated based on the defined endpoints
//Queries are invoked in containers as functions
//When exporting RTK Queries - you must use the following format:
//"use" + query name in Pascal case + "Query"
export const {
  useGetContainersQuery,
  useGetMemoryDataQuery,
  useGetCPUDataQuery,
} = containerAPI;

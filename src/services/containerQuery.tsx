// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface ObjectElement {
  id: string;
  name: string;
  state: string;
}

export type ContainerResponse = ObjectElement[];
// export interface ContainerResponse {
//   data: ObjectElement[];
// }

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

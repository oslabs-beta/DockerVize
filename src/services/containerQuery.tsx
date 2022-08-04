// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// interface ToggleState {
//   statusToggle: boolean;
//   dataToggle: boolean;
// }

// interface ResponseArray {
//   id?: ToggleState;
// }

// interface ContainerResponse extends Array<ResponseArray> {}

type ContainerResponse = string;

// Define a service using a base URL and expected endpoints
export const containerAPI = createApi({
  reducerPath: 'containerAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),

  endpoints: (builder) => ({
    getContainers: builder.query<ContainerResponse, void>({
      query: () => `pokemon/bulbasaur`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetContainersQuery } = containerAPI;

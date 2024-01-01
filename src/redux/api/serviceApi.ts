import { tagTypes } from "../tag-Types";
import { baseApi } from "./baseApi";

export const serviceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllServices: build.query({
      query: () => ({
        url: `/services`,
        method: "GET",
      }),
      providesTags: [tagTypes.All],
    }),
    getSingleService: build.query({
      query: (id) => ({
        url: `/services/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.All],
    }),
    DeleteService: build.mutation({
      query: (id) => ({
        url: `/services/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.admin],
    }),
  }),
});

export const {
  useDeleteServiceMutation,
  useGetAllServicesQuery,
  useGetSingleServiceQuery,
} = serviceApi;

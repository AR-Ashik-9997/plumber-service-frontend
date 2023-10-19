import { tagTypes } from "../tag-Types";
import { baseApi } from "./baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => ({
        url: `/profile/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.user, tagTypes.admin, tagTypes.superAdmin],
    }),
    getAlltUsers: build.query({
      query: () => ({
        url: "/user",
        method: "GET",
      }),
      providesTags: [tagTypes.admin,tagTypes.superAdmin],
    }),
    getSingleUser: build.query({
      query: (id) => ({
        url: `/user/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.admin, tagTypes.superAdmin],
    }),
    DeleteSingleUser: build.mutation({
      query: (id) => ({
        url: `/user/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.admin,tagTypes.superAdmin],
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetAlltUsersQuery,
  useGetSingleUserQuery,
  useDeleteSingleUserMutation,
} = userApi;

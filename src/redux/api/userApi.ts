import { tagTypes } from "../tag-Types";
import { baseApi } from "./baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => ({
        url: `/profile/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
    getAlltUsers: build.query({
      query: () => ({
        url: "/user",
        method: "GET",
      }),
      providesTags: [tagTypes.admin],
    }),
    getSingleUser: build.query({
      query: (id) => ({
        url: `/user/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.admin],
    }),
  }),
});

export const { useGetUserQuery, useGetAlltUsersQuery, useGetSingleUserQuery } =
  userApi;

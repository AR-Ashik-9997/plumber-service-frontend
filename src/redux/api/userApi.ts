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
  }),
});

export const { useGetUserQuery } = userApi;

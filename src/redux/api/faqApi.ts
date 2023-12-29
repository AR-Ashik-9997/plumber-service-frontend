import { tagTypes } from "../tag-Types";
import { baseApi } from "./baseApi";

export const faqApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSinglefaq: build.query({
      query: () => ({
        url: `/faq`,
        method: "GET",
      }),
      providesTags: [tagTypes.admin, tagTypes.user, tagTypes.superAdmin],
    }),
  }),
});

export const { useGetSinglefaqQuery } = faqApi;

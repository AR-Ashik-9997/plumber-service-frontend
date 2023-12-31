import { axiosBaseQuery } from "@/axios/axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";
import { tagTypesList } from "../tag-Types";
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BACKEND_API}/api/v1`,
  }),
  endpoints: () => ({}),
  tagTypes: tagTypesList,
});

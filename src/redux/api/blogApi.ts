import { tagTypes } from "../tag-Types";
import { baseApi } from "./baseApi";

export const blogApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllBlogs: build.query({
      query: () => ({
        url: `/blogs`,
        method: "GET",
      }),
      providesTags: [tagTypes.All],
    }),
    getSingleBlog: build.query({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.All],
    }),
    DeleteBlog: build.mutation({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.admin],
    }),
  }),
});

export const {
  useDeleteBlogMutation,
  useGetAllBlogsQuery,
  useGetSingleBlogQuery,
} = blogApi;

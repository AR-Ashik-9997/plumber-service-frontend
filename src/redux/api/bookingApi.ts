import { authAccess } from "@/services/auth_service";
import { tagTypes } from "../tag-Types";
import { baseApi } from "./baseApi";

export const bookingApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSingleBookings: build.query({
      query: (id) => ({
        url: `/bookings/${id}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${authAccess}`,
        },
      }),
      providesTags: [tagTypes.admin, tagTypes.user],
    }),
    getAllBookings: build.query({
      query: () => ({
        url: `/bookings`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${authAccess}`,
        },
      }),
      providesTags: [tagTypes.admin, tagTypes.user],
    }),
    CancelBooking: build.mutation({
      query: (id) => ({
        url: `/bookings/${id}`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${authAccess}`,
        },
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const {
  useGetAllBookingsQuery,
  useGetSingleBookingsQuery,
  useCancelBookingMutation,
} = bookingApi;

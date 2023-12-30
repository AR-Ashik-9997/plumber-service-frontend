import UpdateUserBookings from "@/components/Bookings/UpdateUserBooking";
import { IDProps } from "@/types/globalTypes";
import React from "react";

const UpdateBooking = ({ params }: IDProps) => {
  return (
    <div>
      <UpdateUserBookings params={params} />
    </div>
  );
};

export default UpdateBooking;

import UpdateBookings from "@/components/BookingManage/UpdateBooking";
import { IDProps } from "@/types/globalTypes";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "update Booking Schedule",
};
const BookingSchedule = ({ params }: IDProps) => {
  return (
    <div>
      <UpdateBookings params={params} />
    </div>
  );
};

export default BookingSchedule;

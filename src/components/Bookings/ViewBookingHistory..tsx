"use client";
import Loader from "../common/Loader";
import Link from "next/link";
import Breadcrumb from "../Breadcrumbs/Breadcrumb";
import { FcCancel } from "react-icons/fc";
import { CiEdit } from "react-icons/ci";
import { IGetAllBookings } from "@/types/globalTypes";
import {
  useCancelBookingMutation,
  useGetAllBookingsQuery,
} from "@/redux/api/bookingApi";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const ViewBookingHistory = () => {
  const { data: BookingData, isLoading } = useGetAllBookingsQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 10000,
  });
  const [DeleteService] = useCancelBookingMutation();
  const router = useRouter();
  const handleDelete = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        DeleteService(id).then(() => {
          Swal.fire("Cancel!", "Your Booking has been Canceled.", "success"),
            router.refresh();
        });
      }
    });
  };
  return (
    <section>
      {isLoading ? (
        <Loader />
      ) : (
        <section>
          <Breadcrumb pageName="All Bookings" />
          <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
            <div className="max-w-full overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-gray-2 text-left dark:bg-meta-4">
                    <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                      Service Name
                    </th>
                    <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                      Booking Date
                    </th>
                    <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                      Booking Time
                    </th>
                    <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                      Status
                    </th>
                    <th className="py-4 px-4 font-medium text-black dark:text-white">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {BookingData?.map((item: IGetAllBookings, index: number) => (
                    <tr key={index}>
                      <td className="border-b border-[#eee] py-5 dark:border-strokedark">
                        <p
                          className={`inline-flex rounded-full  py-1  text-md font-medium`}
                        >
                          {item?.service?.title}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <p
                          className={`inline-flex rounded-full  py-1  text-md font-medium`}
                        >
                          {item?.date}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <p
                          className={`inline-flex rounded-full  py-1  text-md font-medium`}
                        >
                          {item?.time}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <p
                          className={`inline-flex rounded-full  py-1  text-md font-medium`}
                        >
                          {item?.status}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <div className="flex items-center space-x-3.5">
                          <Link
                            className="hover:text-primary text-2xl"
                            href={`/user/updateBooking/${item?.id}`}
                          >
                            <CiEdit />
                          </Link>
                          <button
                            onClick={() => handleDelete(item?.id)}
                            className="hover:text-primary text-[red] text-2xl"
                          >
                            <FcCancel />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}
    </section>
  );
};

export default ViewBookingHistory;

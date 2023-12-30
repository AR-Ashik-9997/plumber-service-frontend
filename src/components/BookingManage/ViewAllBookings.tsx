"use client";
import Loader from "../common/Loader";
import { IGetAllBookings } from "@/types/globalTypes";
import Link from "next/link";
import Breadcrumb from "../Breadcrumbs/Breadcrumb";
import { useGetAllBookingsQuery } from "@/redux/api/bookingApi";
import { CiEdit } from "react-icons/ci";

const ViewAllBookings = () => {
  const { data: AllBookings, isLoading } = useGetAllBookingsQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 10000,
  });

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
                    <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                      User Name
                    </th>
                    <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                      Service Name
                    </th>
                    <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                      Date
                    </th>
                    <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                      Time
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
                  {AllBookings?.map((item: IGetAllBookings, index: number) => (
                    <tr key={index}>
                      <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                        <h5 className="font-medium text-black dark:text-white">
                          {item?.user?.name}
                        </h5>
                      </td>
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
                            href={`/admin/bookingmanage/updateschedule/${item?.id}`}
                          >
                            <CiEdit />
                          </Link>
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

export default ViewAllBookings;

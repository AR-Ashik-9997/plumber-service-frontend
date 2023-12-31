"use client";
import Loader from "../common/Loader";
import { useGetAlltUsersQuery } from "@/redux/api/userApi";
import { IAllUser } from "@/types/globalTypes";
import Link from "next/link";
import Breadcrumb from "../Breadcrumbs/Breadcrumb";
import { CiEdit } from "react-icons/ci";

const AllUsers = () => {
  const { data, isLoading } = useGetAlltUsersQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 10000,
  }); 
  return (
    <section>
      {isLoading ? (
        <Loader />
      ) : (
        <section>
          <Breadcrumb pageName="All User" />
          <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
            <div className="max-w-full overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-gray-2 text-left dark:bg-meta-4">
                    <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                      Name
                    </th>
                    <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                      Email
                    </th>
                    <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                      Role
                    </th>
                    <th className="py-4 px-4 font-medium text-black dark:text-white">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item: IAllUser, index: number) => (
                    <tr key={index}>
                      <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                        <h5 className="font-medium text-black dark:text-white">
                          {item?.name}
                        </h5>
                      </td>
                      <td className="border-b border-[#eee] py-5 dark:border-strokedark">
                        <p
                          className={`inline-flex rounded-full  py-1  text-md font-medium`}
                        >
                          {item?.email}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <p
                          className={`inline-flex rounded-full  py-1  text-md font-medium`}
                        >
                          {item?.role}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <div className="flex items-center space-x-3.5">
                          <Link
                            className="hover:text-primary text-2xl"
                            href={`/admin/usermanage/updateUser/${item?.id}`}
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

export default AllUsers;

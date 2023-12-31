"use client";
import Loader from "../common/Loader";
import { IGetService } from "@/types/globalTypes";
import Link from "next/link";
import Breadcrumb from "../Breadcrumbs/Breadcrumb";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import {
  useDeleteServiceMutation,
  useGetAllServicesQuery,
} from "@/redux/api/serviceApi";
import { CiEdit } from "react-icons/ci";
import { FcCancel } from "react-icons/fc";

const ViewServices = () => {
  const { data, isLoading } = useGetAllServicesQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 10000,
  });

  const [DeleteService] = useDeleteServiceMutation();
  const router = useRouter();
  const handleDelete = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        DeleteService(id).then(() => {
          Swal.fire("Deleted!", "Your file has been deleted.", "success"),
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
          <Breadcrumb pageName="All Services" />
          <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
            <div className="max-w-full overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-gray-2 text-left dark:bg-meta-4">
                    <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white pl-9 xl:pl-11">
                      Servce Name
                    </th>
                    <th className="min-w-[150px] py-4 font-medium text-black dark:text-white">
                      Amount
                    </th>
                    <th className="min-w-[120px] py-4  font-medium text-black dark:text-white">
                      Category
                    </th>
                    <th className="min-w-[120px] py-4  font-medium text-black dark:text-white">
                      Availability
                    </th>
                    <th className="py-4 px-4 font-medium text-black dark:text-white">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((item: IGetService, index: number) => (
                    <tr key={index}>
                      <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                        <h5 className="font-medium text-black dark:text-white">
                          {item?.title}
                        </h5>
                      </td>
                      <td className="border-b border-[#eee] py-5 dark:border-strokedark">
                        <p
                          className={`inline-flex rounded-full  py-1  text-md font-medium`}
                        >
                          {item.price}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <p
                          className={`inline-flex rounded-full  py-1  text-md font-medium`}
                        >
                          {item.category}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <p
                          className={`inline-flex rounded-full  py-1  text-md font-medium`}
                        >
                          {item.availability}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <div className="flex items-center space-x-3.5">
                          <Link
                            className="hover:text-primary text-2xl"
                            href={`/admin/servicemanage/updateService/${item?.id}`}
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

export default ViewServices;

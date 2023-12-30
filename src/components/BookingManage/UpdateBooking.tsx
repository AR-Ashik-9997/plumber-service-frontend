"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { IAllBookingsForAdmin, IDProps } from "@/types/globalTypes";
import { useState } from "react";
import { authAccess } from "@/services/auth_service";
import axios from "axios";
import { Button, Select, SelectItem } from "@nextui-org/react";
import Swal from "sweetalert2";
import Loader from "../common/Loader";

import React from "react";
import Image from "next/image";
import { useGetSingleBookingsQuery } from "@/redux/api/bookingApi";

const UpdateBookings = ({ params }: IDProps) => {
  const { id } = params;
  const { data: BookingData, isLoading } = useGetSingleBookingsQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 1000,
  });
  const { handleSubmit, reset, control } = useForm<IAllBookingsForAdmin>();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const onSubmit: SubmitHandler<IAllBookingsForAdmin> = async (
    data: IAllBookingsForAdmin
  ) => {
    setLoading(true);
    await axios
      .patch(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/api/v1/bookings/${id}`,
        {
          date: data.date,
          time: data.time,
          status: data.status,
        },
        {
          headers: {
            Authorization: `${authAccess}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        if (!!res?.data.success) {
          setLoading(false);
          reset();
          Swal.fire("Good job!", `${res?.data?.message}`, "success");
        }
      })
      .catch((err) => setErrorMessage(err?.response?.data?.message));
  };
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="mx-auto">
          <Breadcrumb pageName="Edit Booking Schedule" />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                <div>
                  <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ">
                    <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                      <h3 className="font-medium text-black dark:text-white">
                        Booking Schedule Information
                      </h3>
                    </div>
                    {errorMessage && (
                      <p className="text-[red] text-lg mt-1 text-center">
                        {errorMessage}
                      </p>
                    )}

                    <div className="p-7">
                      <div className="mb-5.5">
                        <label
                          className="mb-3 block text-sm font-medium text-black dark:text-white"
                          htmlFor="username"
                        >
                          User Name
                        </label>
                        <div className="relative">
                          <span className="absolute left-4.5 top-4"></span>
                          <Controller
                            name="user.name"
                            control={control}
                            defaultValue={BookingData?.user?.name}
                            render={({ field }) => (
                              <input
                                {...field}
                                className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                type="text"
                                readOnly
                                id="username"
                              />
                            )}
                          />
                        </div>
                      </div>
                      <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                        <div className="w-full sm:w-1/2">
                          <label
                            className="mb-3 block text-sm font-medium text-black dark:text-white "
                            htmlFor="servicename"
                          >
                            Service Name
                          </label>
                          <div>
                            <Controller
                              name="service.title"
                              control={control}
                              defaultValue={BookingData?.service?.title}
                              render={({ field }) => (
                                <input
                                  {...field}
                                  className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                  type="text"
                                  id="servicename"
                                  readOnly
                                />
                              )}
                            />
                          </div>
                        </div>
                        <div className="w-full sm:w-1/2">
                          <label
                            className="mb-3 block text-sm font-medium text-black dark:text-white"
                            htmlFor="date"
                          >
                            Booking Date
                          </label>
                          <Controller
                            name="date"
                            control={control}
                            defaultValue={BookingData?.date}
                            render={({ field }) => (
                              <input
                                {...field}
                                className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                type="date"
                                id="date"
                              />
                            )}
                          />
                        </div>
                      </div>
                      <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                        <div className="w-full sm:w-1/2">
                          <label
                            className="mb-3 block text-sm font-medium text-black dark:text-white "
                            htmlFor="bookingTime"
                          >
                            Booking Time
                          </label>
                          <div>
                            <Controller
                              name="time"
                              control={control}
                              defaultValue={BookingData?.time}
                              render={({ field }) => (
                                <input
                                  {...field}
                                  className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                  type="time"
                                  id="bookingTime"
                                />
                              )}
                            />
                          </div>
                        </div>
                        <div className="w-full sm:w-1/2">
                          <label
                            className="mb-3 block text-sm font-medium text-black dark:text-white"
                            htmlFor="status"
                          >
                            Status
                          </label>
                          <Controller
                            name="status"
                            control={control}
                            defaultValue={BookingData?.status}
                            render={({ field }) => (
                              <Select
                                defaultSelectedKeys={[`${BookingData?.status}`]}
                                className="max-w-xs text-black"
                                size="md"
                                {...field}
                              >
                                <SelectItem key="Pending" value="Pending">
                                  Pending
                                </SelectItem>
                                <SelectItem key="Accepted" value="Accepted">
                                  Accepted
                                </SelectItem>
                                <SelectItem key="Rejected" value="Rejected">
                                  Rejected
                                </SelectItem>
                              </Select>
                            )}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                    <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                      <h3 className="font-medium text-black dark:text-white">
                        Service Photo
                      </h3>
                    </div>
                    <div className="p-7">
                      <div className="pb-2">
                        <Image
                          src={BookingData?.service?.image}
                          alt="a"
                          width={150}
                          height={150}
                          layout="responsive"
                        />
                      </div>
                      <div className="flex justify-end gap-4.5">
                        {!loading ? (
                          <Button
                            color="primary"
                            radius="none"
                            className="w-1/4 active:scale-95 duration-200 text-lg"
                            type="submit"
                          >
                            Update Schedule
                          </Button>
                        ) : (
                          <Button
                            isLoading
                            className="w-1/4  text-lg bg-[#E83A15] text-white opacity-90"
                            type="submit"
                          >
                            Loding
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default UpdateBookings;

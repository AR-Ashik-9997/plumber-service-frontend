"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { IDProps, IGetServiceFeatures, IServices } from "@/types/globalTypes";
import { useState } from "react";
import { authAccess } from "@/services/auth_service";
import axios from "axios";
import { Button, Select, SelectItem } from "@nextui-org/react";
import Swal from "sweetalert2";
import Loader from "../common/Loader";
import { useGetSingleServiceQuery } from "@/redux/api/serviceApi";
import React from "react";
import Image from "next/image";
import { uploadFile } from "@/services/FileUpload";

const UpdateService = ({ params }: IDProps) => {
  const { id } = params;
  const { data: serviceData, isLoading } = useGetSingleServiceQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 1000,
  });

  const { handleSubmit, reset, control } = useForm<IServices>();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const onSubmit: SubmitHandler<IServices> = async (data: IServices) => {
    setLoading(true);

    const title = data.title;
    const description = data.description;
    const availability = data.availability;
    const price = data.price;
    const category = data.category;
    const image = await uploadFile(data.image);
    const features = [];
    features.push(data.features);
    const updateData = {
      title,
      description,
      availability,
      price,
      image,
      category,
      features,
    };
    await axios
      .patch(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/api/v1/services/${id}`,
        updateData,
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
          <Breadcrumb pageName="Edite Service" />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                <div>
                  <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ">
                    <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                      <h3 className="font-medium text-black dark:text-white">
                        Service Card Information
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
                          htmlFor="fullName"
                        >
                          Service title
                        </label>
                        <div className="relative">
                          <span className="absolute left-4.5 top-4"></span>
                          <Controller
                            name="title"
                            control={control}
                            defaultValue={serviceData?.title}
                            render={({ field }) => (
                              <input
                                {...field}
                                className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                type="text"
                                id="title"
                              />
                            )}
                          />
                        </div>
                      </div>
                      <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                        <div className="w-full sm:w-1/2">
                          <label
                            className="mb-3 block text-sm font-medium text-black dark:text-white "
                            htmlFor="price"
                          >
                            Service Amount
                          </label>
                          <div>
                            <Controller
                              name="price"
                              control={control}
                              defaultValue={serviceData?.price}
                              render={({ field }) => (
                                <input
                                  {...field}
                                  className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                  type="text"
                                  id="price"
                                />
                              )}
                            />
                          </div>
                        </div>
                        <div className="w-full sm:w-1/2">
                          <label
                            className="mb-3 block text-sm font-medium text-black dark:text-white"
                            htmlFor="Category"
                          >
                            Category name
                          </label>
                          <Controller
                            name="category"
                            control={control}
                            defaultValue={serviceData?.category}
                            render={({ field }) => (
                              <input
                                {...field}
                                className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                type="text"
                                id="Category"
                              />
                            )}
                          />
                        </div>
                      </div>
                      {serviceData?.features?.map(
                        (item: IGetServiceFeatures, index: number) => (
                          <React.Fragment key={index}>
                            <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                              <div className="w-full sm:w-1/2">
                                <label
                                  className="mb-3 block text-sm font-medium text-black dark:text-white "
                                  htmlFor="feature1"
                                >
                                  Service Feature 1
                                </label>
                                <div>
                                  <Controller
                                    name="features.feature1"
                                    control={control}
                                    defaultValue={item?.feature1}
                                    render={({ field }) => (
                                      <input
                                        {...field}
                                        className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                        type="text"
                                        id="feature1"
                                      />
                                    )}
                                  />
                                </div>
                              </div>
                              <div className="w-full sm:w-1/2">
                                <label
                                  className="mb-3 block text-sm font-medium text-black dark:text-white "
                                  htmlFor="feature2"
                                >
                                  Service Feature 2
                                </label>
                                <div>
                                  <Controller
                                    name="features.feature2"
                                    control={control}
                                    defaultValue={item?.feature2}
                                    render={({ field }) => (
                                      <input
                                        {...field}
                                        className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                        type="text"
                                        id="feature2"
                                      />
                                    )}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                              <div className="w-full sm:w-1/2">
                                <label
                                  className="mb-3 block text-sm font-medium text-black dark:text-white "
                                  htmlFor="feature3"
                                >
                                  Service Feature 3
                                </label>
                                <div>
                                  <Controller
                                    name="features.feature3"
                                    control={control}
                                    defaultValue={item?.feature3}
                                    render={({ field }) => (
                                      <input
                                        {...field}
                                        className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                        type="text"
                                        id="feature3"
                                      />
                                    )}
                                  />
                                </div>
                              </div>
                              <div className="w-full sm:w-1/2">
                                <label
                                  className="mb-3 block text-sm font-medium text-black dark:text-white "
                                  htmlFor="feature4"
                                >
                                  Service Feature 4
                                </label>
                                <div>
                                  <Controller
                                    name="features.feature4"
                                    control={control}
                                    defaultValue={item?.feature4}
                                    render={({ field }) => (
                                      <input
                                        {...field}
                                        className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                        type="text"
                                        id="feature5"
                                      />
                                    )}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                              <div className="w-full sm:w-1/2">
                                <label
                                  className="mb-3 block text-sm font-medium text-black dark:text-white "
                                  htmlFor="feature5"
                                >
                                  Service Feature 5
                                </label>
                                <div>
                                  <Controller
                                    name="features.feature5"
                                    control={control}
                                    defaultValue={item?.feature5}
                                    render={({ field }) => (
                                      <input
                                        {...field}
                                        className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                        type="text"
                                        id="feature5"
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
                                  name="availability"
                                  control={control}
                                  defaultValue={serviceData?.availability}
                                  render={({ field }) => (
                                    <Select
                                      defaultSelectedKeys={[
                                        `${serviceData?.availability}`,
                                      ]}
                                      className="max-w-xs text-black"
                                      size="md"
                                      {...field}
                                    >
                                      <SelectItem
                                        key="Available"
                                        value="Available"
                                      >
                                        Availabile
                                      </SelectItem>
                                      <SelectItem
                                        key="NotAvailable"
                                        value="NotAvailable"
                                      >
                                        Not Available
                                      </SelectItem>
                                    </Select>
                                  )}
                                />
                              </div>
                            </div>
                          </React.Fragment>
                        )
                      )}
                      <div className="mb-5.5">
                        <label
                          className="mb-3 block text-sm font-medium text-black dark:text-white"
                          htmlFor="description"
                        >
                          Description
                        </label>
                        <div className="relative">
                          <span className="absolute left-4.5 top-4">
                            <svg
                              className="fill-current"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g opacity="0.8" clipPath="url(#clip0_88_10224)">
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M1.56524 3.23223C2.03408 2.76339 2.66997 2.5 3.33301 2.5H9.16634C9.62658 2.5 9.99967 2.8731 9.99967 3.33333C9.99967 3.79357 9.62658 4.16667 9.16634 4.16667H3.33301C3.11199 4.16667 2.90003 4.25446 2.74375 4.41074C2.58747 4.56702 2.49967 4.77899 2.49967 5V16.6667C2.49967 16.8877 2.58747 17.0996 2.74375 17.2559C2.90003 17.4122 3.11199 17.5 3.33301 17.5H14.9997C15.2207 17.5 15.4326 17.4122 15.5889 17.2559C15.7452 17.0996 15.833 16.8877 15.833 16.6667V10.8333C15.833 10.3731 16.2061 10 16.6663 10C17.1266 10 17.4997 10.3731 17.4997 10.8333V16.6667C17.4997 17.3297 17.2363 17.9656 16.7674 18.4344C16.2986 18.9033 15.6627 19.1667 14.9997 19.1667H3.33301C2.66997 19.1667 2.03408 18.9033 1.56524 18.4344C1.0964 17.9656 0.833008 17.3297 0.833008 16.6667V5C0.833008 4.33696 1.0964 3.70107 1.56524 3.23223Z"
                                  fill=""
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M16.6664 2.39884C16.4185 2.39884 16.1809 2.49729 16.0056 2.67253L8.25216 10.426L7.81167 12.188L9.57365 11.7475L17.3271 3.99402C17.5023 3.81878 17.6008 3.5811 17.6008 3.33328C17.6008 3.08545 17.5023 2.84777 17.3271 2.67253C17.1519 2.49729 16.9142 2.39884 16.6664 2.39884ZM14.8271 1.49402C15.3149 1.00622 15.9765 0.732178 16.6664 0.732178C17.3562 0.732178 18.0178 1.00622 18.5056 1.49402C18.9934 1.98182 19.2675 2.64342 19.2675 3.33328C19.2675 4.02313 18.9934 4.68473 18.5056 5.17253L10.5889 13.0892C10.4821 13.196 10.3483 13.2718 10.2018 13.3084L6.86847 14.1417C6.58449 14.2127 6.28409 14.1295 6.0771 13.9225C5.87012 13.7156 5.78691 13.4151 5.85791 13.1312L6.69124 9.79783C6.72787 9.65131 6.80364 9.51749 6.91044 9.41069L14.8271 1.49402Z"
                                  fill=""
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_88_10224">
                                  <rect width="20" height="20" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </span>

                          <Controller
                            name="description"
                            control={control}
                            defaultValue={serviceData?.description}
                            render={({ field }) => (
                              <textarea
                                {...field}
                                className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                id="description"
                                rows={6}
                                placeholder="Write your bio here"
                              ></textarea>
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
                        User Photo
                      </h3>
                    </div>
                    <div className="p-7">
                      <div className="pb-2">
                        <Image
                          src={serviceData?.image}
                          alt="a"
                          width={150}
                          height={150}
                          layout="responsive"
                        />
                      </div>
                      <div
                        id="FileUpload"
                        className="relative mb-5.5 block w-full cursor-pointer  rounded border-2 border-dashed border-primary bg-gray py-4 px-4 dark:bg-meta-4 sm:py-7.5"
                      >
                        <Controller
                          name="image"
                          control={control}
                          render={({
                            field: { value, onChange, ...field },
                          }) => {
                            return (
                              <input
                                {...field}
                                onChange={(event) => {
                                  onChange(
                                    event.target.files
                                      ? event.target.files
                                      : null
                                  );
                                }}
                                type="file"
                                accept="image/*"
                              />
                            );
                          }}
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
                            Update Service
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

export default UpdateService;

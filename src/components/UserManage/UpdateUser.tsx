"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { ICreateUser, IDProps, ISingleUserProfile } from "@/types/globalTypes";
import React, { useEffect, useState } from "react";
import { authAccess } from "@/services/auth_service";
import Image from "next/image";
import axios from "axios";
import { Button, Select, SelectItem } from "@nextui-org/react";
import Swal from "sweetalert2";
import { useGetSingleUserQuery } from "@/redux/api/userApi";
import Loader from "@/components/common/Loader";
import { uploadFile } from "@/services/FileUpload";

const UpdateUser = ({ params }: IDProps) => {
  const { id } = params;
  const { data: userData } = useGetSingleUserQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 1000,
  });
  const [pageLoading, setPageLoading] = useState<boolean>(true);
  const { handleSubmit, reset, control } = useForm<ICreateUser>();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const onSubmit: SubmitHandler<ICreateUser> = async (data: ICreateUser) => {
    setLoading(true);
    const image = await uploadFile(data?.profile?.image);
    data.profile.image = image;
    await axios
      .patch(`${process.env.NEXT_PUBLIC_BACKEND_API}/api/v1/user/${id}`, data, {
        headers: {
          Authorization: `${authAccess}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if (!!res?.data.success) {
          setLoading(false);
          reset();
          Swal.fire("Good job!", `${res?.data?.message}`, "success");
        }
      })
      .catch((err) => setErrorMessage(err?.response?.data?.message));
  };
  useEffect(() => {
    setTimeout(() => setPageLoading(false), 1000);
  }, []);
  return (
    <>
      {pageLoading ? (
        <Loader />
      ) : (
        <div className="mx-auto max-w-270">
          <Breadcrumb pageName="Edit User" />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-9 gap-8">
              <div className="col-span-9 xl:col-span-6">
                <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ">
                  <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                    <h3 className="font-medium text-black dark:text-white">
                      User Information
                    </h3>
                  </div>
                  {errorMessage && (
                    <p className="text-[red] text-lg mt-1 text-center">
                      {errorMessage}
                    </p>
                  )}
                  <div className="p-7">
                    <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                      <div className="w-full sm:w-1/2">
                        <label
                          className="mb-3 block text-sm font-medium text-black dark:text-white"
                          htmlFor="fullName"
                        >
                          Full Name
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
                              <g opacity="0.8">
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M3.72039 12.887C4.50179 12.1056 5.5616 11.6666 6.66667 11.6666H13.3333C14.4384 11.6666 15.4982 12.1056 16.2796 12.887C17.061 13.6684 17.5 14.7282 17.5 15.8333V17.5C17.5 17.9602 17.1269 18.3333 16.6667 18.3333C16.2064 18.3333 15.8333 17.9602 15.8333 17.5V15.8333C15.8333 15.1703 15.5699 14.5344 15.1011 14.0655C14.6323 13.5967 13.9964 13.3333 13.3333 13.3333H6.66667C6.00363 13.3333 5.36774 13.5967 4.8989 14.0655C4.43006 14.5344 4.16667 15.1703 4.16667 15.8333V17.5C4.16667 17.9602 3.79357 18.3333 3.33333 18.3333C2.8731 18.3333 2.5 17.9602 2.5 17.5V15.8333C2.5 14.7282 2.93899 13.6684 3.72039 12.887Z"
                                  fill=""
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M9.99967 3.33329C8.61896 3.33329 7.49967 4.45258 7.49967 5.83329C7.49967 7.214 8.61896 8.33329 9.99967 8.33329C11.3804 8.33329 12.4997 7.214 12.4997 5.83329C12.4997 4.45258 11.3804 3.33329 9.99967 3.33329ZM5.83301 5.83329C5.83301 3.53211 7.69849 1.66663 9.99967 1.66663C12.3009 1.66663 14.1663 3.53211 14.1663 5.83329C14.1663 8.13448 12.3009 9.99996 9.99967 9.99996C7.69849 9.99996 5.83301 8.13448 5.83301 5.83329Z"
                                  fill=""
                                />
                              </g>
                            </svg>
                          </span>
                          <Controller
                            name="name"
                            control={control}
                            defaultValue={userData?.name}
                            render={({ field }) => (
                              <input
                                {...field}
                                className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                type="text"
                                placeholder="Name"
                              />
                            )}
                          />
                        </div>
                      </div>

                      <div className="w-full sm:w-1/2">
                        <label
                          className="mb-3 block text-sm font-medium text-black dark:text-white"
                          htmlFor="email"
                        >
                          Email
                        </label>
                        <Controller
                          name="email"
                          control={control}
                          defaultValue={userData?.email}
                          render={({ field }) => (
                            <input
                              {...field}
                              className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                              type="text"
                              placeholder="enter your email address"
                            />
                          )}
                        />
                      </div>
                    </div>
                    {userData?.Profile.map(
                      (item: ISingleUserProfile, index: number) => (
                        <React.Fragment key={index}>
                          <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                            <div className="w-full sm:w-1/2">
                              <label
                                className="mb-3 block text-sm font-medium text-black dark:text-white"
                                htmlFor="Contact"
                              >
                                Contact No
                              </label>
                              <div>
                                <Controller
                                  name="profile.contactNo"
                                  control={control}
                                  defaultValue={item?.contactNo}
                                  render={({ field }) => (
                                    <input
                                      {...field}
                                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                      type="text"
                                      placeholder="Name"
                                    />
                                  )}
                                />
                              </div>
                            </div>
                            <div className="w-full sm:w-1/2">
                              <label
                                className="mb-3 block text-sm font-medium text-black dark:text-white"
                                htmlFor="Address"
                              >
                                Address
                              </label>
                              <Controller
                                name="profile.address"
                                control={control}
                                defaultValue={item?.address}
                                render={({ field }) => (
                                  <input
                                    {...field}
                                    className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                    type="text"
                                    placeholder="Address"
                                  />
                                )}
                              />
                            </div>
                          </div>
                          <div className="w-full sm:w-1/2 mb-5.5">
                            <label
                              className="mb-3 block text-sm font-medium text-black dark:text-white"
                              htmlFor="Address"
                            >
                              Role
                            </label>
                            <Controller
                              name="role"
                              control={control}
                              defaultValue={userData?.role}
                              render={({ field }) => (
                                <Select
                                  label="Select Role"
                                  placeholder="Select an animal"
                                  defaultSelectedKeys={[`${userData.role}`]}
                                  className="max-w-xs"
                                  {...field}
                                >
                                  <SelectItem key="admin" value="admin">
                                    Admin
                                  </SelectItem>
                                  <SelectItem key="user" value="user">
                                    User
                                  </SelectItem>
                                </Select>
                              )}
                            />
                          </div>

                          <div className="mb-5.5">
                            <label
                              className="mb-3 block text-sm font-medium text-black dark:text-white"
                              htmlFor="bio"
                            >
                              BIO
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
                                  <g
                                    opacity="0.8"
                                    clipPath="url(#clip0_88_10224)"
                                  >
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
                                      <rect
                                        width="20"
                                        height="20"
                                        fill="white"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                              </span>

                              <Controller
                                name="profile.bio"
                                control={control}
                                defaultValue={item?.bio}
                                render={({ field }) => (
                                  <textarea
                                    {...field}
                                    className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                    id="bio"
                                    rows={6}
                                    placeholder="Write your bio here"
                                    defaultValue={item?.bio}
                                  ></textarea>
                                )}
                              />
                            </div>
                          </div>
                        </React.Fragment>
                      )
                    )}
                  </div>
                </div>
              </div>
              <div className="col-span-9 xl:col-span-3">
                <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                  <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                    <h3 className="font-medium text-black dark:text-white">
                      User Photo
                    </h3>
                  </div>
                  <div className="p-7">
                    <div className="pb-2">
                      <Image
                        src={userData?.Profile[0]?.image}
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
                        name="profile.image"
                        control={control}
                        render={({ field: { value, onChange, ...field } }) => {
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
                              id="profile"
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
                          className="w-1/2 active:scale-95 duration-200 text-lg"
                          type="submit"
                        >
                          Update User
                        </Button>
                      ) : (
                        <Button
                          isLoading
                          className="w-1/2  text-lg bg-[#E83A15] text-white opacity-90"
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
          </form>
        </div>
      )}
    </>
  );
};

export default UpdateUser;

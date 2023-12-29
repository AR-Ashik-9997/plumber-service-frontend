"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { useForm, SubmitHandler } from "react-hook-form";
import { IPasswordChange } from "@/types/globalTypes";
import { useState } from "react";
import { authAccess } from "@/services/auth_service";
import axios from "axios";
import { Button } from "@nextui-org/react";
import Swal from "sweetalert2";

const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IPasswordChange>();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const onSubmit: SubmitHandler<IPasswordChange> = async (
    data: IPasswordChange
  ) => {
    setLoading(true);
    await axios
      .post(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/api/v1/user/changepassword`,
        data,

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
          setErrorMessage("");
          reset();
          Swal.fire("Good job!", "Password Changes successfully", "success");
        }
      })
      .catch((err) => {
        setErrorMessage(err?.response?.data?.message);
        setLoading(false);
      });
  };
  return (
    <>
      <div className="mx-auto max-w-270">
        <Breadcrumb pageName="Change Password" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-5 gap-8">
            <div className="col-span-5 xl:col-span-3">
              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                  <h3 className="font-medium text-black dark:text-white">
                    Changes your Password
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
                        Old Password
                      </label>
                      <div className="relative">
                        <input
                          className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                          type="password"
                          id="oldpassword"
                          placeholder="old password"
                          {...register("oldpassword", { required: true })}
                        />
                        {errors.oldpassword && (
                          <p className="text-[red] text-sm mt-1">
                            This Field is required
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="w-full sm:w-1/2">
                      <label
                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                        htmlFor="newpassword"
                      >
                        New Password
                      </label>
                      <input
                        className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        type="password"
                        id="newpassword"
                        placeholder="new password"
                        {...register("newpassword", { required: true })}
                      />
                      {errors.newpassword && (
                        <p className="text-[red] text-sm mt-1">
                          This Field is required
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-center gap-4.5">
                    {!loading ? (
                      <Button
                        color="primary"
                        radius="none"
                        className="w-1/2 active:scale-95 duration-200 text-lg"
                        type="submit"
                      >
                        Change Password
                      </Button>
                    ) : (
                      <Button
                        isLoading
                        className="w-1/2  text-lg bg-[#E83A15] text-white opacity-90"
                        type="submit"
                      >
                        Login
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChangePassword;

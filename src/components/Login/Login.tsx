"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button, Input } from "@nextui-org/react";
import { EyeSlashFilledIcon } from "../InputHelper/EyeSlashFilledIcon";
import { EyeFilledIcon } from "../InputHelper/EyeFilledIcon";
import { ILogin } from "@/types/globalTypes";
import { useUserLoginMutation } from "@/redux/api/authApi";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [userLogin] = useUserLoginMutation();
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ILogin>();
  const onSubmit: SubmitHandler<ILogin> = async (data: any) => {
    setLoading(true);
    try {
      const res = await userLogin(data).unwrap();
      if (res?.token) {
        Cookies.set("auth", res?.token);
        reset();
        setLoading(false);
        router.push("/");
      }
    } catch (err: any) {
      setLoading(false);
      console.error(err);
    }
  };

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="flex items-center justify-center">
          <Image
            className=" w-full p-4"
            src="https://i.ibb.co/brpnQQP/auth.png"
            width={900}
            height={900}
            layout="responsive"
            alt="Card"
          />
        </div>
        <div className="min-h-screen bg-gradient-to-r from-[#00bcd4] to-indigo-500 flex flex-col justify-center sm:px-6 lg:px-8 p-4">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="my-4 text-center text-3xl font-semibold text-gray-900">
              Login
            </h2>
          </div>
          <div className="sm:mx-auto sm:w-full sm:max-w-md rounded-xl shadow-lg bg-white">
            <div className="py-8 px-4 sm:rounded-lg sm:px-10">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="w-full flex flex-col gap-4">
                  <Input
                    type="email"
                    label="Email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <p className="text-[red] text-sm mt-1">
                      This Field is required
                    </p>
                  )}
                  <Input
                    label="Password"
                    variant="bordered"
                    {...register("password", { required: true })}
                    endContent={
                      <button
                        className="focus:outline-none"
                        type="button"
                        onClick={toggleVisibility}
                      >
                        {isVisible ? (
                          <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                          <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                        )}
                      </button>
                    }
                    type={isVisible ? "text" : "password"}
                  />
                  {errors.password && (
                    <p className="text-[red] text-sm mt-1">
                      This Field is required
                    </p>
                  )}
                </div>
                <div className="flex justify-center items-center mt-4">
                  {!loading ? (
                    <Button
                      className="w-1/2 active:scale-95 duration-200 text-lg hover:bg-[#E83A15] hover:text-white text-black-2"
                      type="submit"
                    >
                      Login
                    </Button>
                  ) : (
                    <Button
                      isLoading
                      className="w-1/2  text-lg bg-[#E83A15] text-white opacity-90"
                      type="submit"
                    >
                      Loading
                    </Button>
                  )}
                </div>
              </form>
              <div className="flex flex-col items-center justify-center mt-6">
                <hr className="w-3/4 border-1 border-black" />
                <div className="mt-4">
                  <Link href={"/registration"}>
                    <Button className="active:scale-95 duration-200 text-lg  bg-[#1d4777] text-white">
                      Registration
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;

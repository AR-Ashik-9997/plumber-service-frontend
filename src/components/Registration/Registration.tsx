"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button, Input } from "@nextui-org/react";
import { EyeSlashFilledIcon } from "../InputHelper/EyeSlashFilledIcon";
import { EyeFilledIcon } from "../InputHelper/EyeFilledIcon";
import { FormData } from "@/types/globalTypes";
import { useRouter } from "next/navigation";
import axios from "axios";
const RegistrationPage = () => {
  const router = useRouter();
  const [Error, setError] = useState<string>();
  const [isVisible, setIsVisible] = useState<Boolean>(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
    const option = {
      name: data.username,
      email: data.email,
      password: data.password,
    };
    await axios
      .post(`${process.env.DB_HOST}/auth/signup`, {
        name: data.username,
        email: data.email,
        password: data.password,
      })
      .then((response) => {
        if (response) {
          reset();
          setError("");
          router.push("/login");
        }
      })
      .catch((error) => {
        if (error) {
          setError(error?.response?.data?.message);
        }
      });
  };
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="flex items-center justify-center">
          <Image className=" w-full p-4" src='https://i.ibb.co/brpnQQP/auth.png'alt="Card" />
        </div>
        <div className="min-h-screen bg-gradient-to-r from-[#00bcd4] to-indigo-500 flex flex-col justify-center sm:px-6 lg:px-8 p-4">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="my-4 text-center text-3xl font-semibold text-gray-900">
              Registration
            </h2>
          </div>
          <div className="sm:mx-auto sm:w-full sm:max-w-md rounded-xl shadow-lg bg-white">
            <div className="py-8 px-4 sm:rounded-lg sm:px-10">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="w-full flex flex-col gap-4">
                  <Input
                    type="text"
                    label="username"
                    {...register("username", {
                      required: "username field is required",
                    })}
                  />
                  {errors.username && (
                    <p className="text-[red] text-sm mt-1">
                      {errors.username.message}
                    </p>
                  )}
                  <Input
                    type="email"
                    label="Email"
                    {...register("email", {
                      required: "Email field is required",
                    })}
                  />
                  {errors.email && (
                    <span className="text-[red] text-sm">
                      {errors.email.message}
                    </span>
                  )}
                  {Error !== "" && (
                    <span className="text-[red] text-center text-sm">
                      {Error}
                    </span>
                  )}
                  <Input
                    label="Password"
                    variant="bordered"
                    {...register("password", {
                      required: "password is required",
                    })}
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
                      {errors.password.message}
                    </p>
                  )}
                  <Input
                    label="Confirm Password"
                    variant="bordered"
                    type="password"
                    {...register("confirm_password", {
                      required: "confirm Password is required",
                      validate: (value) =>
                        value === getValues("password") ||
                        "Passwords do not match",
                    })}
                  />
                  {errors.confirm_password && (
                    <p className="text-[red] text-sm mt-1">
                      {errors.confirm_password.message}
                    </p>
                  )}
                </div>
                <div className="flex justify-center items-center mt-4">
                  <Button
                    className="w-1/2 active:scale-95 duration-200 text-lg hover:bg-[#E83A15] hover:text-white text-black-2"
                    
                    type="submit"
                  >
                    Register
                  </Button>
                </div>
              </form>
              <div className="flex flex-col items-center justify-center mt-6">
                <hr className="w-3/4 border-1 border-black" />
                <div className="mt-4">
                  <Link href={"/login"}>
                    <Button
                      className="active:scale-95 duration-200 text-lg  bg-[#1d4777] text-white"
                    >
                      Login
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

export default RegistrationPage;

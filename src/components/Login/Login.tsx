"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import signin from "../../assets/auth/auth.svg";
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
    try {
      const res = await userLogin(data).unwrap();
      if (res?.token) {
        Cookies.set("auth", res?.token);
        reset();
        router.push("/profile");
        res?.success("User logged in successfully!");
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="flex items-center justify-center">
          <Image className=" w-full p-4" src={signin} alt="Card" />
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
                  {errors.email && <span>This field is required</span>}
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
                  {errors.password && <p>This field is required.</p>}
                </div>
                <div className="flex justify-center items-center mt-4">
                  <Button
                    className="w-1/2 active:scale-95 duration-200 text-lg"
                    color="primary"
                    type="submit"
                  >
                    Login
                  </Button>
                </div>
              </form>
              <div className="flex flex-col items-center justify-center mt-6">
                <hr className="w-3/4 border-1 border-black" />
                <div className="mt-4">
                  <Link href={"/registration"}>
                    <Button
                      className="active:scale-95 duration-200 text-lg"
                      color="primary"
                    >
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

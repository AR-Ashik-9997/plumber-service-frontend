"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import signin from "../../assets/auth/auth.svg";
import axios from "axios";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
const LoginForm = () => {
  const { register, handleSubmit, formState:{errors} } = useForm();
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log(data);
  };

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="flex items-center justify-center">
          <Image className=" w-full p-4" src={signin} alt="Card" />
        </div>
        <div className="min-h-screen bg-gradient-to-r from-[#00bcd4] to-indigo-500 flex flex-col justify-center sm:px-6 lg:px-8 p-4">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-3xl font-semibold text-gray-900">
              Login
            </h2>
          </div>
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md rounded-xl shadow-lg bg-white">
            <div className="py-8 px-4 sm:rounded-lg sm:px-10">
              <form action="">
                
              </form>
              <div className="flex flex-col items-center justify-center mt-6">
                <hr className="w-3/4 border-1 border-black" />
                <div className="mt-4">
                  <Link href={"/signup"}>
                    <h2 className="w-full flex justify-center shadow-sm text-xl font-medium text-teal-700">
                      Create Register
                    </h2>
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

"use client";
import Image from "next/image";
import style from "../common/Common.module.css";
import { IDProps, IServiceDetailse } from "@/types/globalTypes";
import { Button } from "@nextui-org/react";
import { useGetSingleBlogQuery } from "@/redux/api/blogApi";

const BlogeDetailse = ({ params }: IDProps) => {
  const { id } = params;
  const { data: blogData } = useGetSingleBlogQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 10000,
  });

  return (
    <section>
      <div className={`${style.common_banner}`}>
        <div className="w-full xl:w-1/2 h-full flex justify-center items-center">
          <h1 className="text-3xl md:text-6xl lg:text-5xl font-bold text-center text-white  mb-4">
            Blog Detailse
          </h1>
        </div>
      </div>
      <section className="py-12 px-4 sm:px-8 md:px-12 lg:px-16 w-full xl:w-3/4 mx-auto ">
        <div className="w-3/4 mx-auto">
          <Image
            src={blogData?.image}
            alt=""
            width={200}
            height={200}
            layout="responsive"
          />
        </div>
        <h1 className="text-2xl font-bold text-black-2 pt-4 text-center mb-4">{blogData?.title}</h1>
        <p className="text-xl text-justify mb-4">{blogData?.blog}</p>
      </section>
    </section>
  );
};

export default BlogeDetailse;

"use client";
import { Button } from "@nextui-org/react";
import { HiMiniArrowSmallRight } from "react-icons/hi2";
import style from "./banner.module.css";
import title_shape from "../../assets/title_shape_1.svg";
import Image from "next/image";

const Topbanner = () => {
  return (
    <section className={`${style.top_banner}`}>
      <div className="w-full  xl:w-1/2 p-4 bg-black bg-opacity-80 h-full">
        <div className="flex justify-center items-center">
          <div className="text-white md:pt-20">
            <div className="mb-4 flex items-center gap-4">
              <Image src={title_shape} alt="" width={40} height={40} />
              <p className="text-[#E83A15] text-sm md:text-2xl lg:text-xl font-bold">
                We are master of plumbing services
              </p>
            </div>
            <h1 className="text-3xl md:text-6xl lg:text-5xl 2xl:text-6xl font-bold mb-4">
              We Provide Effective
            </h1>
            <h2 className="text-3xl md:text-6xl lg:text-5xl 2xl:text-6xl font-bold">
              Plumbing Solution
            </h2>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="py-8 w-full md:w-3/4 lg:w-2/3 xl:w-3/4 2xl:w-3/5 text-white">
            <p className="text-lg text-center md:text-start md:text-xl lg:text-center xl:text-start ">
              Intrinsicly predominate backward-compatible potentialities without
              alternative total linkage. Interactively fabricate cross-unit
              growth strategies.
            </p>
          </div>
        </div>
        <div className=" flex items-center justify-center">
          <div className="pt-6 w-full md:w-3/4 lg:w-1/3 xl:w-3/4 2xl:w-3/5 flex gap-4">
            <Button
              size="lg"
              radius="none"
              className="font-semibold bg-[#E83A15] text-sm text-white flex items-center"
            >
              DICOBER MORE
              <span className="text-2xl">
                <HiMiniArrowSmallRight />
              </span>
            </Button>
            <Button size="lg" radius="none" className="font-semibold text-sm">
              CONTACT US
              <span className="text-2xl">
                <HiMiniArrowSmallRight />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Topbanner;

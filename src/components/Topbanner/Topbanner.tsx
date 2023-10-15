"use client";
import { Button } from "@nextui-org/react";
import { HiMiniArrowSmallRight } from "react-icons/hi2";
import style from "./banner.module.css";

const Topbanner = () => {
  return (
    <section className={`${style.top_banner}`}>
      <div className="w-full xl:w-1/2 p-4 bg-black bg-opacity-80 h-full">
        <div className="text-white md:pt-20 flex flex-col items-center">
          <h1 className="text-6xl font-bold mb-4">We Provide Effective</h1>
          <h2 className="text-6xl font-bold">Plumbing Solution</h2>
        </div>
        <div className="flex justify-center py-8 text-white">
          <p className="w-3/4 xl:w-2/3 text-xl">
            Intrinsicly predominate backward-compatible potentialities without
            alternative total linkage. Interactively fabricate cross-unit growth
            strategies.
          </p>
        </div>
        <div className="pt-6 flex gap-4 md:items-center md:justify-center">
          <Button
            size="lg"
            radius="none"
            className="font-semibold bg-[#E83A15] text-white flex items-center"
          >
            DICOBER MORE
            <span className="text-2xl">
              <HiMiniArrowSmallRight />
            </span>
          </Button>
          <Button size="lg" radius="none" className="font-semibold">
            CONTACT US
            <span className="text-2xl">
              <HiMiniArrowSmallRight />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Topbanner;

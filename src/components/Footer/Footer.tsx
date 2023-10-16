"use client";
import Image from "next/image";
import style from "./Footer.module.css";
import Link from "next/link";
import { Button, Input } from "@nextui-org/react";
import { HiMiniArrowSmallRight } from "react-icons/hi2";

const Footer = () => {
  return (
    <section className="py-12  bg-[#161921]">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-3/4 mx-auto gap-4 mb-12">
        <div className={`${style.Footer_bg1}`}>
          <div className="p-4 text-[#979697]">
            <Image src="" alt="" />
            <h1 className="text-xl text-white  font-bold">Working Hours:</h1>
            <div className=" flex justify-between my-4">
              <p>Mon - Fri</p>
              <p>8:00 AM - 6:00 PM</p>
            </div>
            <hr className="border-dashed" />
            <div className=" flex justify-between my-4">
              <p>Saturday</p>
              <p>9:00 AM - 5:00 PM</p>
            </div>
            <hr className="border-dashed" />
            <div className=" flex justify-between my-4">
              <p>Sunday</p>
              <p>Closed</p>
            </div>
          </div>
        </div>
        <div className="flex xl:justify-center p-4">
          <div className="text-[#979697] flex flex-col gap-4 justify-start">
            <h1 className="text-2xl font-bold text-white">Quick Links</h1>
            <Link
              href=""
              className="flex items-center hover:text-[#E83A15] gap-2"
            >
              <span className="text-2xl">
                <HiMiniArrowSmallRight />
              </span>
              About Us
            </Link>
            <Link
              href=""
              className="flex items-center hover:text-[#E83A15] gap-2"
            >
              <span className="text-2xl">
                <HiMiniArrowSmallRight />
              </span>
              Service
            </Link>
            <Link
              href=""
              className="flex items-center hover:text-[#E83A15] gap-2"
            >
              <span className="text-2xl">
                <HiMiniArrowSmallRight />
              </span>
              Products
            </Link>
            <Link
              href=""
              className="flex items-center hover:text-[#E83A15] gap-2"
            >
              <span className="text-2xl">
                <HiMiniArrowSmallRight />
              </span>
              Blogs
            </Link>
            <Link
              href=""
              className="flex items-center hover:text-[#E83A15] gap-2"
            >
              <span className="text-2xl">
                <HiMiniArrowSmallRight />
              </span>
              Contact Us
            </Link>
          </div>
        </div>
        <div className={`${style.Footer_bg2}`}>
          <div className="flex flex-col gap-4 justify-start">
            <h1 className=" text-white text-2xl font-bold">Newsletter</h1>
            <p className="text-lg text-[#979697]">
              Sign Up to get updates & news about us
            </p>
            <div className="w-full 2xl:w-3/4">
              <Input size="sm" type="email" label="Email" />
            </div>
            <div className="w-full 2xl:w-3/4">
              <Button
                size="lg"
                radius="none"
                className="w-full bg-[#E83A15] text-white font-bold"
              >
                SUBSCRIBE
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-12">
      <div className="bg-[#2A2F3C] text-[#83858a] p-4 text-center absolute bottom-0 w-full text-sm md:text-xl">
        Copyright &copy; 2023 <span className="text-[#E83A15]">Plumer.</span>{" "}
        All Rights Reserved by <span className="text-[#E83A15]">Themeholy</span>
      </div>
      </div>
      
    </section>
  );
};

export default Footer;

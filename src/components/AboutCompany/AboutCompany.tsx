"use client";
import Image from "next/image";
import feature1 from "../../assets/choose_feature_1.svg";
import feature2 from "../../assets/choose_feature_2.svg";
import about1 from "../../assets/about_1_1.jpg";
import about2 from "../../assets/about_1_2.jpg";
import title_shape from "../../assets/title_shape_1.svg";
import { Button } from "@nextui-org/react";
import { HiMiniCheckBadge } from "react-icons/hi2";

const AboutCompany = () => {
  return (
    <section className="py-12 px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mx-auto w-4/5">
        <div className="flex justify-center">
          <div className="relative">
            <div className="block">
              <Image src={about1} className="mx-auto p-4" alt="" />
            </div>
            <div className="absolute bottom-0 right-0 z-1 bg-[#E0E0E0]">
              <Image src={about2} className="mx-auto p-4" alt="" />
            </div>
          </div>
        </div>
        <div className="text-black-2 py-8 p-4">
          <div className="mb-4 flex items-center gap-4">
            <Image src={title_shape} alt="" width={40} height={40} />
            <p className="text-[#E83A15] font-bold text-xl">
              About Our Company
            </p>
          </div>
          <h1 className="text-4xl font-bold text-black-2 mb-4">
            Our Company Provide The Best Plumbing Service
          </h1>
          <p className="text-black-2 ">
            Globally disintermediate installed base web services without
            frictionless platforms. Distinctively pursue low-risk high-yield
            e-commerce before multimedia based core mindshare. Interactively
            synthesize. Seamlessly impact parallel core. Proactively optimize
            mission-critical e-business after integrated niche markets.
          </p>
          <section className="py-12">
            <Button
              size="lg"
              className="text-xl"
              variant="bordered"
              radius="none"
              startContent={
                <span className="text-2xl text-[red]">
                  <HiMiniCheckBadge />
                </span>
              }
            >
              Planning
            </Button>
            <Button
              size="lg"
              className="text-xl"
              variant="bordered"
              radius="none"
              startContent={
                <span className="text-2xl text-[red]">
                  <HiMiniCheckBadge />
                </span>
              }
            >
              Replacing
            </Button>
            <Button
              size="lg"
              className="text-xl"
              variant="bordered"
              radius="none"
              startContent={
                <span className="text-2xl text-[red]">
                  <HiMiniCheckBadge />
                </span>
              }
            >
              Installing
            </Button>
          </section>
          <div>
            <Button
              size="lg"
              radius="none"
              className="font-semibold bg-[#E83A15] text-white"
            >
              ABOUT MORE
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;

"use client";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { HiMiniCheckBadge } from "react-icons/hi2";
import { useRouter } from "next/navigation";

const AboutCompany = () => {
  const router = useRouter();
  return (
    <section className="py-12 px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mx-auto w-4/5">
        <div className="flex justify-center">
          <div className="relative">
            <div className="block">
              <Image
                src="https://i.ibb.co/vvnc4pC/about-1-1.jpg"
                className="w-full mx-auto p-4"
                alt=""
                width={500}
                height={500}
                layout="responsive"
              />
            </div>
            <div className="absolute bottom-0 xl:bottom-20 2xl:bottom-0 right-0 z-1 bg-[#E0E0E0] w-1/2">
              <Image
                src="https://i.ibb.co/6m63Cx8/about-1-2.jpg"
                className="w-full mx-auto p-4"
                alt=""
                width={500}
                height={500}
                layout="responsive"
              />
            </div>
          </div>
        </div>
        <div className="text-black-2 py-8  md:p-4">
          <div className="mb-4 flex items-center gap-4">
            <Image
              src="https://i.ibb.co/VqhCC6t/title-shape-1.png"
              alt=""
              width={40}
              height={40}            
            />
            <p className="text-[#E83A15] font-bold text-lg md:text-xl">
              About Our Company
            </p>
          </div>
          <h1 className="text-lg md:text-4xl font-bold text-black-2 mb-4">
            Our Company Provide The Best Plumbing Service
          </h1>
          <p className="text-black-2 text-justify">
            Globally disintermediate installed base web services without
            frictionless platforms. Distinctively pursue low-risk high-yield
            e-commerce before multimedia based core mindshare. Interactively
            synthesize. Seamlessly impact parallel core. Proactively optimize
            mission-critical e-business after integrated niche markets.
          </p>
          <section className="py-12 grid grid-cols-2 md:grid-cols-3 gap-4">
            <Button
              size="lg"
              className="text-sm md:text-xl"
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
              className="text-sm md:text-xl"
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
              className="text-sm md:text-xl"
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
          <div className="flex justify-center md:justify-start">
            <Button
              onClick={() => router.push("/about")}
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

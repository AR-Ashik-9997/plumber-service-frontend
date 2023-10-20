"use client";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import style from "../common/Common.module.css";
import { useGetAllServicesQuery } from "@/redux/api/serviceApi";
import { ICardServices, IGetService } from "@/types/globalTypes";

const cardData = [
  {
    image: "https://i.ibb.co/6yzs1cY/test.png",
    title: "Card Title",
    description:
      " This is a sample card description. You can replace it with your own      content",
    link: "/serviceDetailse",
  },
  {
    image: "https://i.ibb.co/6yzs1cY/test.png",
    title: "Card Title",
    description:
      " This is a sample card description. You can replace it with your own      content",
    link: "/serviceDetailse",
  },
  {
    image: "https://i.ibb.co/6yzs1cY/test.png",
    title: "Card Title",
    description:
      " This is a sample card description. You can replace it with your own      content",
    link: "/serviceDetailse",
  },
  {
    image: "https://i.ibb.co/6yzs1cY/test.png",
    title: "Card Title",
    description:
      " This is a sample card description. You can replace it with your own      content",
    link: "/serviceDetailse",
  },
  {
    image: "https://i.ibb.co/6yzs1cY/test.png",
    title: "Card Title",
    description:
      " This is a sample card description. You can replace it with your own      content",
    link: "/serviceDetailse",
  },
  {
    image: "https://i.ibb.co/6yzs1cY/test.png",
    title: "Card Title",
    description:
      " This is a sample card description. You can replace it with your own      content",
    link: "/serviceDetailse",
  },
];
const AllServices = () => {
  const { data: ServiceData } = useGetAllServicesQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 10000,
  });
  const router = useRouter();
  return (
    <section>
      <div className={`${style.common_banner}`}>
        <div className="w-full xl:w-1/2 h-full flex justify-center items-center">
          <h1 className="text-3xl md:text-6xl lg:text-5xl font-bold text-center text-white  mb-4">
            All Services
          </h1>
        </div>
      </div>
      <section className="py-12 px-4 sm:px-8 md:px-12 lg:px-16 bg-[#f7f7f7] ">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4  mx-auto w-3/4 pb-8">
          {ServiceData?.map((item: ICardServices, i: number) => (
            <div key={i}>
              <div className="max-w-sm rounded overflow-hidden bg-white shadow-xl">
                <Image
                  src={item?.image}
                  alt="Card Image"
                  className="w-48 h-48 mx-auto p-4 rounded-lg"
                  width={100}
                  height={100}
                  layout="responsive"
                />
                <div className="px-6 py-4 flex flex-col items-center">
                  <div className="font-bold text-xl mb-2">{item?.title}</div>
                  <p className="text-gray-700 text-base text-center">
                    {item?.description}
                  </p>
                </div>
                <div className="px-6 mb-8 pt-2 flex justify-center">
                  <Button
                    onClick={() => router.push(`/serviceDetailse/${item?.id}`)}
                    size="lg"
                    radius="none"
                    className="bg-[#00045F] font-bold py-2 px-4 text-white"
                  >
                    READ MORE
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default AllServices;

"use client";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRouter } from "next/navigation";
import { Autoplay } from "swiper/modules";
import { useGetAllServicesQuery } from "@/redux/api/serviceApi";
import { ICardServices } from "@/types/globalTypes";

const Services = () => {
  const { data: ServiceData, isLoading } = useGetAllServicesQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 10000,
  }); 

  const router = useRouter();
  return (
    <section className="py-12 px-4 sm:px-8 md:px-12 lg:px-16 bg-[#f7f7f7]">
      <div
        className="grid grid-cols-1 xl:grid-cols-2 gap-4 w-full md:w-3/4  xl:items-center
       mx-auto mb-12 "
      >
        <div className="text-black-2 font-bold text-center xl:text-start py-8">
          <div className="mb-4 flex justify-center 2xl:justify-normal items-center gap-4">
            <Image
              src="https://i.ibb.co/VqhCC6t/title-shape-1.png"
              alt=""
              width={40}
              height={40}
            />
            <p className="text-[#E83A15] text-xl">Our Services</p>
          </div>
          <h1 className="text-2xl md:text-3xl 2xl:text-4xl">
            See Our Plumbing Services
          </h1>
        </div>
        <div className="flex justify-center  xl:justify-end">
          <Button
            onClick={() => router.push("/services")}
            size="lg"
            radius="none"
            className="font-semibold bg-[#E83A15] text-white flex items-center"
          >
            EXPLORE ALL SERVICES
          </Button>
        </div>
      </div>
      <div className="pt-8 w-full xl:w-3/4 mx-auto">
        <Swiper
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 30,
            },

            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },

            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {ServiceData?.map((item: ICardServices, i: number) => (
            <SwiperSlide key={i}>
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Services;

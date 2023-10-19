"use client";
import Image from "next/image";
import AboutCompany from "./AboutCompany";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRouter } from "next/navigation";
import style from "../common/Common.module.css";

const TeamData = [
  {
    image: "https://i.ibb.co/hLqbK1v/team-1-1.jpg",
    title: "Rokie Royals",
  },
  {
    image: "https://i.ibb.co/DWXKwsJ/team-1-2.jpg",
    title: "Jesica Sinthia",
  },
  {
    image: "https://i.ibb.co/dpq1QHG/team-1-3.jpg",
    title: "Alex Michel",
  },
  {
    image: "https://i.ibb.co/7zb41zG/team-1-5.jpg",
    title: "Sanjida Carlos",
  },
];

const AboutDetailse = () => {
  return (
    <section>
      <div className={`${style.common_banner}`}>
        <div className="w-full xl:w-1/2 h-full flex justify-center items-center">
          <h1 className="text-3xl md:text-6xl lg:text-5xl font-bold text-center text-white  mb-4">
            About Us
          </h1>
        </div>
      </div>
      <section className="py-12 px-4 sm:px-8 md:px-12 lg:px-16">
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 py-12 bg-[#f7f7f7] w-full xl:w-3/4 mx-auto">
          <div className="max-w-sm rounded overflow-hidden shadow-xl">
            <Image
              src="https://i.ibb.co/RYFQCcJ/choose-feature-1.png"
              alt="Card Image"
              className="w-25 h-25 mx-auto p-4"
              width={100}
              height={100}
            />
            <div className="px-6 py-4 flex flex-col items-center">
              <div className="font-bold text-xl text-black-2 mb-2">
                Affordable Price
              </div>
              <p className="text-gray-700 text-base text-center">
                Proactively fabricate corporate partnerships with plug-and-play
                results. Dramatically
              </p>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-xl">
            <Image
              src="https://i.ibb.co/pK2vFsj/choose-feature-2.png"
              alt="Card Image"
              className="w-25 h-25 mx-auto p-4"
              width={100}
              height={100}
            />
            <div className="px-6 py-4 flex flex-col items-center">
              <div className="font-bold text-xl text-black-2 mb-2">
                Expert Plumber
              </div>
              <p className="text-gray-700 text-base text-center">
                Proactively fabricate corporate partnerships with plug-and-play
                results. Dramatically
              </p>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-xl">
            <Image
              src="https://i.ibb.co/D8S7G63/choose-feature-3.png"
              alt="Card Image"
              className="w-25 h-25 mx-auto p-4"
              width={100}
              height={100}
            />
            <div className="px-6 py-4 flex flex-col items-center">
              <div className="font-bold text-xl text-black-2 mb-2">
                Quality Improve
              </div>
              <p className="text-gray-700 text-base text-center">
                Proactively fabricate corporate partnerships with plug-and-play
                results. Dramatically
              </p>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-xl">
            <Image
              src="https://i.ibb.co/MhpT81W/choose-feature-4.png"
              alt="Card Image"
              className="w-25 h-25 mx-auto p-4"
              width={100}
              height={100}
            />
            <div className="px-6 py-4 flex flex-col items-center">
              <div className="font-bold text-xl text-black-2 mb-2">
                100% Certified
              </div>
              <p className="text-gray-700 text-base text-center">
                Proactively fabricate corporate partnerships with plug-and-play
                results. Dramatically
              </p>
            </div>
          </div>
        </section>
        <AboutCompany />
        <section>
          <div className="w-full  h-auto md:h-full lg:h-auto xl:h-full">
            <div className="text-black-2 font-bold text-center py-8">
              <div className="mb-4 flex justify-center items-center gap-4">
                <Image
                  src="https://i.ibb.co/VqhCC6t/title-shape-1.png"
                  alt=""
                  width={40}
                  height={40}
                />
                <p className="text-[#E83A15] text-xl md:text-2xl">
                  Expert Team
                </p>
              </div>
              <h1 className="text-2xl md:text-4xl">
                Meet The Expert Team Member
              </h1>
            </div>
            <div className="pt-2 pb-8 md:pb-2 p-4 md:p-8 w-full 2xl:w-1/2 mx-auto">
              <Swiper
                spaceBetween={30}
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
                className="mySwiper"
              >
                {TeamData.map((item, i: number) => (
                  <SwiperSlide key={i}>
                    <div className="w-full rounded overflow-hidden border-none bg-white shadow-xl">
                      <Image
                        src={item?.image}
                        alt="Card Image"
                        className="bg-[#3C4250]  mx-auto p-4"
                        width={100}
                        height={100}
                        layout="responsive"
                      />
                      <div className="px-6 py-4 flex justify-center">
                        <h2 className="font-bold text-2xl text-black-2 mb-2">
                          {item?.title}
                        </h2>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default AboutDetailse;

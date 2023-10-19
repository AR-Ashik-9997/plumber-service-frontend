"use client";
import Image from "next/image";
import AboutCompany from "./AboutCompany";
import choose_feature1 from "../../assets/choose_feature_1.svg";
import choose_feature2 from "../../assets/choose_feature_2.svg";
import choose_feature3 from "../../assets/choose_feature_3.svg";
import choose_feature4 from "../../assets/choose_feature_4.svg";
import title_shape from "../../assets/title_shape_1.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRouter } from "next/navigation";
import style from "../common/Common.module.css";

const TeamData = [
  {
    image: choose_feature4,
    title: "Alexandar",
    link: "#",
  },
  {
    image: choose_feature4,
    title: "Alexandar",
    link: "#",
  },
  {
    image: choose_feature4,
    title: "Alexandar",
    link: "#",
  },
  {
    image: choose_feature4,
    title: "Alexandar",
    link: "#",
  },
  {
    image: choose_feature4,
    title: "Alexandar",
    link: "#",
  },
];

const AboutDetailse = () => {
  const router = useRouter();
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
              src={choose_feature1}
              alt="Card Image"
              className="w-25 h-25 mx-auto p-4"
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
              src={choose_feature2}
              alt="Card Image"
              className="w-25 h-25 mx-auto p-4"
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
              src={choose_feature3}
              alt="Card Image"
              className="w-25 h-25 mx-auto p-4"
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
              src={choose_feature4}
              alt="Card Image"
              className="w-25 h-25 mx-auto p-4"
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
          <div className="w-full">
            <div className="text-black-2 font-bold text-center py-8">
              <div className="mb-4 flex justify-center items-center gap-4">
                <Image src={title_shape} alt="" width={40} height={40} />
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
                  1280: {
                    slidesPerView: 4,
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
                        className="w-full  bg-[#3C4250]  mx-auto p-4"
                      />
                      <div className="px-6 py-4 flex justify-center">
                        <button
                          onClick={() => router.push(`${item.link}`)}
                          className="font-bold text-2xl text-black-2 mb-2"
                        >
                          {item?.title}
                        </button>
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

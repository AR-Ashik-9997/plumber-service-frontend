"use client";
import Image from "next/image";
import React from "react";
import test from "../../assets/test.png";
import { AiFillStar } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const reviewData = [
  {
    image: test,
    name: "Alexander Test",
    designation: "designer",
    description:
      "Enthusiastically matrix visionary e-commerce after enterprise-wide collaboration and idea-sharing. Objectively administrate bleeding-edge best practices through interactive niche markets.Distinctively productize",
  },
  {
    image: test,
    name: "Alexander Test",
    designation: "designer",
    description:
      "Enthusiastically matrix visionary e-commerce after enterprise-wide collaboration and idea-sharing. Objectively administrate bleeding-edge best practices through interactive niche markets.Distinctively productize",
  },
  {
    image: test,
    name: "Alexander Test",
    designation: "designer",
    description:
      "Enthusiastically matrix visionary e-commerce after enterprise-wide collaboration and idea-sharing. Objectively administrate bleeding-edge best practices through interactive niche markets.Distinctively productize",
  },
  {
    image: test,
    name: "Alexander Test",
    designation: "designer",
    description:
      "Enthusiastically matrix visionary e-commerce after enterprise-wide collaboration and idea-sharing. Objectively administrate bleeding-edge best practices through interactive niche markets.Distinctively productize",
  },
  {
    image: test,
    name: "Alexander Test",
    designation: "designer",
    description:
      "Enthusiastically matrix visionary e-commerce after enterprise-wide collaboration and idea-sharing. Objectively administrate bleeding-edge best practices through interactive niche markets.Distinctively productize",
  },
  {
    image: test,
    name: "Alexander Test",
    designation: "designer",
    description:
      "Enthusiastically matrix visionary e-commerce after enterprise-wide collaboration and idea-sharing. Objectively administrate bleeding-edge best practices through interactive niche markets.Distinctively productize",
  },
  {
    image: test,
    name: "Alexander Test",
    designation: "designer",
    description:
      "Enthusiastically matrix visionary e-commerce after enterprise-wide collaboration and idea-sharing. Objectively administrate bleeding-edge best practices through interactive niche markets.Distinctively productize",
  },
  {
    image: test,
    name: "Alexander Test",
    designation: "designer",
    description:
      "Enthusiastically matrix visionary e-commerce after enterprise-wide collaboration and idea-sharing. Objectively administrate bleeding-edge best practices through interactive niche markets.Distinctively productize",
  },
  {
    image: test,
    name: "Alexander Test",
    designation: "designer",
    description:
      "Enthusiastically matrix visionary e-commerce after enterprise-wide collaboration and idea-sharing. Objectively administrate bleeding-edge best practices through interactive niche markets.Distinctively productize",
  },
];
const Testimonial = () => {
  return (
    <section className='py-12 px-4 sm:px-8 md:px-12 lg:px-16"'>
      <div className="text-4xl text-black-2 font-bold text-center py-8">
        <h1>What Our Customer Says?</h1>
      </div>
      <div className="pt-8 w-full xl:w-3/5 mx-auto">
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
              slidesPerView: 1,
              spaceBetween: 30,
            },

            1024: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {reviewData.map((item, i: number) => (
            <SwiperSlide key={i}>
              <div className="flex gap-4 flex-col xl:flex-row">
                <div className="mx-auto bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row lg:flex-col xl:flex-row gap-4">
                  <div className="p-4">
                    <Image src={test} alt="" height={400} width={400} />
                    <div className="flex items-center pt-4 justify-center">
                      <span className="text-[red] text-2xl">
                        <AiFillStar />
                      </span>
                      <span className="text-[red] text-2xl">
                        <AiFillStar />
                      </span>
                      <span className="text-[red] text-2xl">
                        <AiFillStar />
                      </span>
                      <span className="text-[red] text-2xl">
                        <AiFillStar />
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-black-2 mb-2">
                      {item?.name}
                    </h2>
                    <p className="text-gray-500 text-base font font-semibold text-[#E83A15] mb-2">
                      {item?.designation}
                    </p>
                    <p className="mb-4 text-justify">{item?.description}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;

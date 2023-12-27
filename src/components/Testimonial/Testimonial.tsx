"use client";
import Image from "next/image";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const reviewData = [
  {
    image: "https://i.ibb.co/SKCZjJD/testi-1-1.jpg",
    name: "Abraham Khalil",
    designation: "CEO at Corola",
    description:
      "Enthusiastically matrix visionary e-commerce after enterprise-wide collaboration and idea-sharing. Objectively administrate bleeding-edge best practices through interactive niche markets.Distinctively productize",
  },
  {
    image: "https://i.ibb.co/m4NvxNq/testi-1-2.jpg",
    name: "Alexander Farnandez",
    designation: "UI/UX Designer",
    description:
      "Enthusiastically matrix visionary e-commerce after enterprise-wide collaboration and idea-sharing. Objectively administrate bleeding-edge best practices through interactive niche markets.Distinctively productize",
  },
  {
    image: "https://i.ibb.co/k3nKF2n/testi-1-3.jpg",
    name: "MArian Sania",
    designation: "UI/UX Designer",
    description:
      "Enthusiastically matrix visionary e-commerce after enterprise-wide collaboration and idea-sharing. Objectively administrate bleeding-edge best practices through interactive niche markets.Distinctively productize",
  },
];
const Testimonial = () => {
  return (
    <section className="py-12 px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="text-black-2 font-bold text-center ">
        <div className="mb-4 flex justify-center items-center gap-4">
          <Image
            src="https://i.ibb.co/VqhCC6t/title-shape-1.png"
            alt=""
            width={40}
            height={40}
          />
          <p className="text-[#E83A15] text-xl">Testimonials</p>
        </div>
        <h1 className="text-2xl md:text-4xl">What Our Customer Says?</h1>
      </div>

      <div className="pt-8 w-full 2xl:w-3/5 mx-auto">
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
              <div className="flex gap-4 flex-col lg:flex-row">
                <div className="mx-auto bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row lg:flex-row gap-4">
                  <div className="p-4">
                    <Image
                      src={item?.image}
                      alt=""
                      height={500}
                      width={500}
                      layout="responsive"
                    />
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

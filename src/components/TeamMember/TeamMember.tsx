"use client";
import style from "./TeamMember.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import test from "../../assets/test.png";
import { useRouter } from "next/navigation";
import Image from "next/image";
const TeamData = [
  {
    image: test,
    title: "Alexandar",
    link: "#",
  },
  {
    image: test,
    title: "Alexandar",
    link: "#",
  },
  {
    image: test,
    title: "Alexandar",
    link: "#",
  },
  {
    image: test,
    title: "Alexandar",
    link: "#",
  },
];
const TeamMember = () => {
  const router = useRouter();
  return (
    <section className={`${style.team_banner}`}>
      <div className="w-full p-4 bg-black bg-opacity-80 h-full">
        <div className="text-4xl text-white font-bold text-center py-8 flex items-center justify-center">
          <h1>Meet The Expert Team Member</h1>
        </div>
        <div className="pt-8 w-full xl:w-1/2 mx-auto">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
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
                <div className="max-w-sm rounded overflow-hidden border-none bg-white shadow-xl">
                  <Image
                    src={item?.image}
                    alt="Card Image"
                    className="w-full object-cover bg-[#3C4250]  mx-auto p-4"
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
  );
};

export default TeamMember;

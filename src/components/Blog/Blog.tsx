"use client";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import test from "../../assets/test.png";
import { useRouter } from "next/navigation";
import { Autoplay } from "swiper/modules";
import title_shape from "../../assets/title_shape_1.svg";

const blogData = [
  {
    image: test,
    title: "We’ll make your old kitchen Look brand new.",
    link: "#",
  },
  {
    image: test,
    title: "We’ll make your old kitchen Look brand new.",
    link: "#",
  },
  {
    image: test,
    title: "We’ll make your old kitchen Look brand new.",
    link: "#",
  },
  {
    image: test,
    title: "We’ll make your old kitchen Look brand new.",
    link: "#",
  },
];
const Blog = () => {
  const router = useRouter();
  return (
    <section className="py-12 px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="text-black-2 font-bold text-center py-8">
        <div className="mb-4 flex justify-center items-center gap-4">
          <Image src={title_shape} alt="" width={40} height={40} />
          <p className="text-[#E83A15] text-xl">Blogs</p>
        </div>
        <h1 className="text-2xl md:text-4xl">Our Latest New And Articles</h1>
      </div>
      <div className="pt-8 w-full 2xl:w-3/4 mx-auto">
        <Swiper
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 6000,
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
          {blogData.map((item, i: number) => (
            <SwiperSlide key={i}>
              <div className="max-w-sm rounded overflow-hidden bg-white shadow-2xl">
                <Image
                  src={item?.image}
                  alt="Card Image"
                  className="w-full object-cover  mx-auto p-4"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl xl:text-2xl text-black-2 mb-2">
                    {item?.title}
                  </div>
                </div>
                <div className="px-6 mb-8 pt-2">
                  <Button
                    onClick={() => router.push(`${item?.link}`)}
                    size="lg"
                    radius="none"
                    className="bg-[#E83A15] font-bold py-2 px-4 text-white"
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

export default Blog;

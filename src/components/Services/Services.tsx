"use client";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import test from "../../assets/test.png";
import { useRouter } from "next/navigation";
import { Autoplay } from "swiper/modules";
import title_shape from "../../assets/title_shape_1.svg";

const cardData = [
  {
    image: test,
    title: "Card Title",
    description:
      " This is a sample card description. You can replace it with your own      content",
    link: "#",
  },
  {
    image: test,
    title: "Card Title",
    description:
      " This is a sample card description. You can replace it with your own      content",
    link: "#",
  },
  {
    image: test,
    title: "Card Title",
    description:
      " This is a sample card description. You can replace it with your own      content",
    link: "#",
  },
  {
    image: test,
    title: "Card Title",
    description:
      " This is a sample card description. You can replace it with your own      content",
    link: "#",
  },
  {
    image: test,
    title: "Card Title",
    description:
      " This is a sample card description. You can replace it with your own      content",
    link: "#",
  },
  {
    image: test,
    title: "Card Title",
    description:
      " This is a sample card description. You can replace it with your own      content",
    link: "#",
  },
  {
    image: test,
    title: "Card Title",
    description:
      " This is a sample card description. You can replace it with your own      content",
    link: "#",
  },
  {
    image: test,
    title: "Card Title",
    description:
      " This is a sample card description. You can replace it with your own      content",
    link: "#",
  },
  {
    image: test,
    title: "Card Title",
    description:
      " This is a sample card description. You can replace it with your own      content",
    link: "#",
  },
  {
    image: test,
    title: "Card Title",
    description:
      " This is a sample card description. You can replace it with your own      content",
    link: "#",
  },
  {
    image: test,
    title: "Card Title",
    description:
      " This is a sample card description. You can replace it with your own      content",
    link: "#",
  },
  {
    image: test,
    title: "Card Title",
    description:
      " This is a sample card description. You can replace it with your own      content",
    link: "#",
  },
];
const Services = () => {
  const router = useRouter();
  return (
    <section className="py-12 px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="flex flex-wrap justify-between items-center w-3/4 mx-auto mb-12">
        <div className="text-black-2 font-bold text-center py-8">
          <div className="mb-4 flex items-center gap-4">
            <Image src={title_shape} alt="" width={40} height={40} />
            <p className="text-[#E83A15] text-xl">Our Services</p>
          </div>
          <h1 className="text-4xl">See Our Plumbing Services</h1>
        </div>
        <div>
          <Button
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
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
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
          {cardData.map((item, i: number) => (
            <SwiperSlide key={i}>
              <div className="max-w-sm rounded overflow-hidden shadow-xl">
                <Image
                  src={item?.image}
                  alt="Card Image"
                  className="w-48 h-48 object-cover rounded-full border border-black-2 bg-black mx-auto p-4"
                />
                <div className="px-6 py-4 flex flex-col items-center">
                  <div className="font-bold text-xl mb-2">{item?.title}</div>
                  <p className="text-gray-700 text-base text-center">
                    {item?.description}
                  </p>
                </div>
                <div className="px-6 mb-8 pt-2 flex justify-center">
                  <Button
                    onClick={() => router.push(`${item?.link}`)}
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

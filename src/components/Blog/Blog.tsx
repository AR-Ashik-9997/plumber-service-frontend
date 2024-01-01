"use client";
import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRouter } from "next/navigation";
import { Autoplay } from "swiper/modules";
import { useGetAllBlogsQuery } from "@/redux/api/blogApi";
import { IBlogs } from "@/types/globalTypes";
import { getWordCount, makeReadableTime } from "@/services/helper";

const Blog = () => {
  const { data: BlogDara } = useGetAllBlogsQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 10000,
  });
  console.log(BlogDara);
  const router = useRouter();
  return (
    <section className="py-12 px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="text-black-2 font-bold text-center py-8">
        <div className="mb-4 flex justify-center items-center gap-4">
          <Image
            src="https://i.ibb.co/VqhCC6t/title-shape-1.png"
            alt=""
            width={40}
            height={40}
          />
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
          {BlogDara?.map((item: IBlogs, i: number) => (
            <SwiperSlide key={i}>
              <div className="max-w-sm rounded overflow-hidden bg-white shadow-2xl">
                <Card
                  isFooterBlurred
                  className="w-full h-[300px] col-span-12 sm:col-span-7"
                >
                  <Image
                    removeWrapper
                    alt="image"
                    className="z-0 w-full h-full"
                    src={item?.image}
                  />
                  <CardFooter className="absolute bg-black/40 bottom-0 z-10 ">
                    <div className="flex flex-grow gap-2 items-center">
                      <div className="flex flex-col text-justify ">
                        <div className="flex">
                        <div className="flex gap-2 items-center w-1/2">
                          <p className="text-lg text-white">
                            {item?.username}
                          </p>
                          <p className="text-lg text-white">
                            {makeReadableTime(item?.updatedAt)}
                          </p>                          
                          
                        </div>
                        <div className="flex justify-end w-1/2">
                          <Button
                            onClick={() =>
                              router.push(`/serviceDetailse/${item?.id}`)
                            }
                            radius="full"
                            size="sm"
                            className="hover:bg-[red] hover:text-white hover:font-bold"
                          >
                           Read More
                          </Button>
                          </div>
                        </div>
                        
                        <p className="text-lg text-white">{item?.title}</p>
                        <p className="text-tiny text-white ">
                          {getWordCount(item?.blog) > 20
                            ? item?.blog.slice(0, 150)
                            : item?.blog}
                        </p>
                      </div>
                    </div>                    
                  </CardFooter>
                </Card>
                {/* <Image
                  src={item?.image}
                  alt="Card Image"
                  className="w-full object-cover  mx-auto p-4"
                  width={100}
                  height={100}
                  layout="responsive"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl xl:text-2xl text-black-2 mb-2">
                    {item?.title}
                  </div>
                </div>
                <div className="px-6 mb-8 pt-2">
                  <Button
                    onClick={() => router.push(`/blogDetailse/${item?.id}`)}
                    size="lg"
                    radius="none"
                    className="bg-[#E83A15] font-bold py-2 px-4 text-white"
                  >
                    READ MORE
                  </Button>
                </div> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Blog;

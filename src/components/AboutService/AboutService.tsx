"use client";
import Image from "next/image";

const AboutService = () => {
  return (
    <section className="py-12 px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mx-auto w-4/5">
        <div className="text-black-2 py-8">
          <div className="mb-4 flex items-center gap-4">
            <Image
              src="https://i.ibb.co/VqhCC6t/title-shape-1.png"
              alt=""
              width={40}
              height={40}
            />
            <p className="text-[#E83A15] text-base md:text-xl font-bold">
              Why Choosing Our Services
            </p>
          </div>
          <h1 className="text-xl md:text-4xl font-bold text-black-2 mb-4">
            The Perfect Solutions For All Plumbing Services
          </h1>
          <p className="text-black-2 md:text-lg mb-2 text-justify">
            Enthusiastically restore cost effective collaboration and
            idea-sharing and optimal sources. Authoritatively orchestrate
            end-to-end portals before clicks-and-mortar portals. Distinctively
            integrate.
          </p>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4 py-12 bg-[#f7f7f7]">
            <div className="max-w-sm rounded overflow-hidden shadow-xl">
              <Image
                src="https://i.ibb.co/RYFQCcJ/choose-feature-1.png"
                alt="Card Image"
                className="w-30 h-30 object-cover mx-auto p-4"
                width={100}
                height={100}
              />
              <div className="px-6 py-4 flex flex-col items-center">
                <div className="font-bold text-xl text-black-2 mb-2">
                  Affordable Price
                </div>
                <p className="text-gray-700 text-base text-center">
                  Proactively fabricate corporate partnerships with
                  plug-and-play results. Dramatically
                </p>
              </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-xl">
              <Image
                src="https://i.ibb.co/pK2vFsj/choose-feature-2.png"
                alt="Card Image"
                className="w-30 h-30 object-cover mx-auto p-4"
                width={100}
                height={100}
              />
              <div className="px-6 py-4 flex flex-col items-center">
                <div className="font-bold text-xl text-black-2 mb-2">
                  Affordable Price
                </div>
                <p className="text-gray-700 text-base text-center">
                  Proactively fabricate corporate partnerships with
                  plug-and-play results. Dramatically
                </p>
              </div>
            </div>
          </section>
        </div>
        <div>
          <div className="relative">
            <div className="block">
              <Image
                src="https://i.ibb.co/ZxXHMDP/why-1-1.jpg"
                className=" w-3/4 mx-auto p-4"
                alt=""
                width={800}
                height={800}
              />
            </div>
            <div className="absolute -bottom-10 right-10 lg:right-40 xl:right-10 2xl:right-20">
              <div className="shadow-2xl w-40 py-4 2xl:py-12  bg-white">
                <h1 className="text-xl md:text-4xl font-bold text-center text-[#E83A15] ">
                  24
                </h1>
                <h1 className="text-sm font-bold text-center">
                  Hours Emergency Services
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutService;

"use client";
import Image from "next/image";
import feature1 from "../../assets/choose_feature_1.svg";
import feature2 from "../../assets/choose_feature_2.svg";
import why from "../../assets/why_1_1.jpg";
import title_shape from "../../assets/title_shape_1.svg";

const AboutService = () => {
  return (
    <section className="py-12 px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mx-auto w-4/5">
        <div className="text-black-2 font-bold py-8">
          <div className="mb-4 flex items-center gap-4">
            <Image src={title_shape} alt="" width={40} height={40} />
            <p className="text-[#E83A15] text-xl">Why Choosing Our Services</p>
          </div>
          <h1 className="text-4xl font-bold text-black-2 mb-4">
            The Perfect Solutions For All Plumbing Services
          </h1>
          <p className="text-black-2 ">
            Enthusiastically restore cost effective collaboration and
            idea-sharing and optimal sources. Authoritatively orchestrate
            end-to-end portals before clicks-and-mortar portals. Distinctively
            integrate.
          </p>
          <section className="flex gap-4 py-12 bg-[#f7f7f7]">
            <div className="max-w-sm rounded overflow-hidden shadow-xl">
              <Image
                src={feature1}
                alt="Card Image"
                className="w-30 h-30 object-cover mx-auto p-4"
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
                src={feature2}
                alt="Card Image"
                className="w-30 h-30 object-cover mx-auto p-4"
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
              <Image src={why} className="mx-auto p-4" alt="" />
            </div>
            <div className="absolute -bottom-10 right-10">
              <div className="shadow-2xl w-40 py-12  bg-white">
                <h1 className="text-4xl font-bold text-center text-[#E83A15] ">
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

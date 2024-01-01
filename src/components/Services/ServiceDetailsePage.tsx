"use client";
import Image from "next/image";
import style from "../common/Common.module.css";
import { IDProps, IServiceDetailse } from "@/types/globalTypes";
import { useGetSingleServiceQuery } from "@/redux/api/serviceApi";
import { Button } from "@nextui-org/react";

const ServiceDetailsePage = ({ params }: IDProps) => {
  const { id } = params;
  const { data: serviceData } = useGetSingleServiceQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 10000,
  });

  return (
    <section>
      <div className={`${style.common_banner}`}>
        <div className="w-full xl:w-1/2 h-full flex justify-center items-center">
          <h1 className="text-3xl md:text-6xl lg:text-5xl font-bold text-center text-white  mb-4">
            Service Detailse
          </h1>
        </div>
      </div>
      <section className="py-12 px-4 sm:px-8 md:px-12 lg:px-16 w-full xl:w-3/4 mx-auto ">
        <div className="w-3/4 mx-auto">
          <Image
            src={serviceData?.image}
            alt=""
            width={500}
            height={500}
            layout="responsive"
          />
        </div>
        {serviceData?.ServiceDetails?.map(
          (service: IServiceDetailse, index: number) => (
            <div key={index}>
              <div className="py-4">
                <h1 className="text-xl text-center xl:text-2xl font-bold text-black-2 mb-4">
                  {service?.title}
                </h1>
                <p className="text-lg text-black-2 text-justify">
                  {service?.description}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="text-black-2 py-2">
                  <p className="text-xl font-bold mb-4">Key Feature</p>
                  <ul className="list-inside">
                    <li>{service?.feature1}</li>
                    <li>{service?.feature2}</li>
                    <li>{service?.feature3}</li>
                    <li>{service?.feature4}</li>
                    <li>{service?.feature5}</li>
                  </ul>
                </div>
                <div className="text-black-2 py-2">
                  <p className="text-xl font-bold mb-4">Other Info</p>
                  <ul className="list-inside">
                    <li className="text-lg font-bold text-black-2">
                      price: {serviceData?.price}
                    </li>
                    <li className="text-lg font-bold text-black-2">
                      Category: {serviceData?.category}
                    </li>
                  </ul>
                  <div className="pt-4">
                    <Button
                      className="w-1/4 active:scale-95 duration-200 text-lg hover:bg-[#E83A15] hover:text-white text-black-2"
                      type="submit"
                    >
                      Booking
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </section>
    </section>
  );
};

export default ServiceDetailsePage;

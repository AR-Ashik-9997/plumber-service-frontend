"use client";
import Image from "next/image";
import style from "../common/Common.module.css";

const ServiceDetailsePage = () => {
  return (
    <section>
      <div className={`${style.common_banner}`}>
        <div className="w-full xl:w-1/2 h-full flex justify-center items-center">
          <h1 className="text-3xl md:text-6xl lg:text-5xl font-bold text-center text-white  mb-4">
            Service Detailse
          </h1>
        </div>
      </div>
      <section className="py-12 px-4 sm:px-8 md:px-12 lg:px-16 bg-[#f7f7f7] border w-full xl:w-3/4 mx-auto ">
        <div>
          <Image src="" alt="" />
        </div>
        <div>
          <h1 className="text-xl xl:text-2xl font-bold text-black-2">
            Lorem ipsum dolor sit amet consectetur.
          </h1>
          <p className="text-lg text-black-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            soluta voluptatum repellat vero at suscipit quibusdam quae
            temporibus numquam! At totam doloremque architecto temporibus autem
            saepe quae, quam maxime nemo, vitae exercitationem tempore! Quae,
            velit excepturi non eaque dolor ad voluptas iure placeat, soluta est
            ea alias. Aliquid, impedit dolores.
          </p>
        </div>
        <div className="text-black-2 py-2">
          <ul className="list-disc">
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum dolor sit.</li>
          </ul>
        </div>
      </section>
    </section>
  );
};

export default ServiceDetailsePage;

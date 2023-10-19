"use client";
import Image from "next/image";
import style from "../common/Common.module.css";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { IServices } from "@/types/globalTypes";
import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IServices>();
  return (
    <section>
      <div className={`${style.common_banner}`}>
        <div className="w-full xl:w-1/2 h-full flex justify-center items-center">
          <h1 className="text-3xl md:text-6xl lg:text-5xl font-bold text-center text-white  mb-4">
            Contact Us
          </h1>
        </div>
      </div>
      <section className="py-12 px-4 sm:px-8 md:px-12 lg:px-16">
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 py-12 bg-[#f7f7f7] w-full xl:w-3/4 mx-auto">
          <div className="max-w-sm rounded overflow-hidden shadow-xl">
            <Image
              src="https://i.ibb.co/4TPNrGK/contact-2-1.png"
              alt="Card Image"
              className="w-25 h-25 mx-auto p-4"
              width={100}
              height={100}
            />
            <div className="px-6 py-4 flex flex-col items-center">
              <div className="text-sm text-black-2 mb-2">
                OUR OFFICE LOCATION
              </div>
              <h2 className="text-xl font-bold text-black-2 text-center">
                Dhaka, Bangladesh
              </h2>
            </div>
          </div>
          <Link
            href="tel:01782231717"
            className="max-w-sm rounded overflow-hidden shadow-xl"
          >
            <Image
              src="https://i.ibb.co/fqZQR97/contact-2-2.png"
              alt="Card Image"
              className="w-25 h-25 mx-auto p-4"
              width={100}
              height={100}
            />
            <div className="px-6 py-4 flex flex-col items-center">
              <div className="text-lg text-black-2 mb-2">HAVE A QUESTION?</div>
              <h2 className="text-xl font-bold text-black-2 text-center">
                01782-231717
              </h2>
            </div>
          </Link>
          <Link
            href="mailto:ashikur.rahman9997@gmail.com"
            className="max-w-sm rounded overflow-hidden shadow-xl"
          >
            <Image
              src="https://i.ibb.co/Ph8fPsg/contact-2-3.png"
              alt="Card Image"
              className="w-25 h-25 mx-auto p-4"
              width={100}
              height={100}
            />
            <div className="px-6 py-4 flex flex-col items-center">
              <div className="text-lg text-black-2 mb-2">EMAIL US ON</div>
              <h1 className="text-xl font-bold text-black-2 text-center">
                ashikur.rahman9997@gmail.com
              </h1>
            </div>
          </Link>
        </section>
        <section className="py-12 px-4 sm:px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 xl:grid-cols-2 xl:w-4/5 items-center mx-auto w-full shadow-xl bg-white">
            <div>
              <Image src="https://i.ibb.co/TMKMgSF/cantacts.png" alt="contact" className="w-full mx-auto"  width={100}
              height={100} layout="responsive" />
            </div>

            <div className="pt-4">
              <div>
                <h1 className="text-2xl text-center font-bold text-black-2 pt-12">
                  Get A <span className="text-[#E83A15]">Free</span> Quote
                </h1>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center pt-4">
                <div className="w-full p-4">
                  <Input type="text" variant="flat" label="Your Name" />
                </div>
                <div className="w-full p-4">
                  <Input type="email" variant="flat" label="Email" />
                </div>
                <div className="w-full p-4">
                  <Input type="tel" variant="flat" label="Phone Number" />
                </div>
                <div className="w-full p-4">
                  <Select label="Select an animal" className="max-w-xs">
                    <SelectItem key="a" value="sss">
                      valoi
                    </SelectItem>
                    <SelectItem key="b" value="sss">
                      valoi
                    </SelectItem>
                    <SelectItem key="c" value="sss">
                      valoi
                    </SelectItem>
                    <SelectItem key="d" value="sss">
                      kas
                    </SelectItem>
                  </Select>
                </div>
              </div>
              <div className="p-4">
                <Textarea
                  label="Description"
                  size="lg"
                  labelPlacement="inside"
                  placeholder="Enter your description"
                  className="w-full"
                />
              </div>
              <div className="flex justify-center items-center p-4">
                <Button
                  size="lg"
                  radius="none"
                  className="font-semibold bg-[#E83A15] text-white flex items-center w-full text-xl"
                >
                  Submit Now
                  <span className="text-2xl"></span>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default ContactPage;

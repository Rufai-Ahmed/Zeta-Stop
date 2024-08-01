import React from "react";
import Container from "../__components/re-use/Container";
import Image from "next/image";
import { BsPerson } from "react-icons/bs";
import { Lock, MailIcon } from "lucide-react";
import Button from "../__components/re-use/Button";

const page = () => {
  return (
    <section className="w-full min-h-[500px] bg-bg_register">
      <Container className="grid grid-cols-2 2xl:min-h-[600px] xl:min-h-[600px] w-[80%] min-h-[600px]">
        <div className="col-span-2 lg:col-span-1 flex items-center">
          <Image
            src={"/assets/icons.png"}
            width={100}
            unoptimized
            height={100}
            alt="3d Icons"
            className="w-full xl:w-[70%]"
          />
        </div>
        <div className="col-span-2 lg:col-span-1 text-white space-y-4">
          <h1 className="font-bold leading-[1] text-[30px] lg:text-[40px]">
            Create Account
          </h1>

          <p className="text-[20px]">
            Welcome! enter your details and start{" "}
            <br className="hidden lg:block" /> hosting, collecting and selling
            to Zepama users.
          </p>

          <form className="space-y-5">
            <div className="rounded-[30px] bg-white pl-12 relative w-full xl:w-[70%] pr-2 overflow-hidden text-black h-[50px] flex items-center">
              <BsPerson size={20} className="text-gray-500 absolute left-5" />
              <input
                placeholder="Username"
                className="h-[50px] outline-none flex-grow flex"
              />
            </div>
            <div className="rounded-[30px] bg-white pl-12 relative w-full xl:w-[70%] pr-2 overflow-hidden text-black h-[50px] flex items-center">
              <MailIcon size={20} className="text-gray-500 absolute left-5" />
              <input
                placeholder="Email Address"
                className="h-[50px] outline-none flex-grow flex"
              />
            </div>
            <div className="rounded-[30px] bg-white pl-12 relative w-full xl:w-[70%] pr-2 overflow-hidden text-black h-[50px] flex items-center">
              <Lock size={20} className="text-gray-500 absolute left-5" />
              <input
                placeholder="Password"
                className="h-[50px] outline-none flex-grow flex"
              />
            </div>
            <div className="rounded-[30px] bg-white pl-12 relative w-full xl:w-[70%] pr-2 overflow-hidden text-black h-[50px] flex items-center">
              <Lock size={20} className="text-gray-500 absolute left-5" />
              <input
                placeholder="Confirm Password"
                className="h-[50px] outline-none flex-grow flex"
              />
            </div>

            <Button className="w-full xl:w-[70%] justify-center flex items-center py-3 font-semibold">
              Create Account
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default page;

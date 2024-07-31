import React from "react";
import Container from "../re-use/Container";
import { BiStore } from "react-icons/bi";
import { BsDiscord, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import Button from "../re-use/Button";

const Footer = () => {
  return (
    <div className="w-full bg-[#3b3b3b] ">
      <Container className="xl:min-h-[300px] 2xl:min-h-[300px] min-h-[300px]">
        <div className="grid grid-cols-7 gap-12 md:gap-9 w-full">
          <div className="space-y-5 col-span-7 sm:col-span-4 lg:col-span-2">
            <BiStore size={30} className="text-violet-500" />

            <p>
              Zepama&apos;s ecosystem is to make essentials more accessible for
              people
            </p>

            <p>Join our community</p>

            <div className="flex gap-4 text-[20px]">
              <BsDiscord />
              <BsYoutube />
              <BsInstagram />
              <BsTwitter />
            </div>
          </div>

          <div className="space-y-3 col-span-7 sm:col-span-3 lg:col-span-2">
            <h4 className="text-[20px] font-bold">Explore</h4>

            <nav className="text-[18px]">Advertising Options</nav>
            <nav className="text-[18px]">Become A Partner</nav>
            <nav className="text-[18px]">Connect a waller</nav>
          </div>

          <div className="space-y-4 col-span-7 lg:col-span-3">
            <h2 className="text-[30px] font-bold">Join Our Weekly</h2>

            <p className=" capitalize text-[20px]">
              Get exclusive promotions & updates <br /> straight to your inbox
            </p>

            <div className="w-full overflow-hidden bg-white flex h-[50px] rounded-[30px] pl-3 ">
              <input
                type="email"
                placeholder="Enter your email here"
                className="h-full w-1/2 flex-grow outline-none flex text-black"
              />

              <Button className="" icon={<CgMail size={20} />}>
                <p className="hidden md:block">Subscribe</p>
              </Button>
            </div>
          </div>
        </div>

        <hr className="bg-[#c5c5c5]" />

        <div className="text-[14px]">
          &copy; advancing together. we support eco-friendly initiatives.
        </div>
      </Container>
    </div>
  );
};

export default Footer;

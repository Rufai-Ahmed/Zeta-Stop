import React from "react";
import Container from "./re-use/Container";
import Button from "./re-use/Button";
import { CgMail } from "react-icons/cg";
import Image from "next/image";

const Subscription = () => {
  return (
    <Container className="min-h-[300px] xl:min-h-[300px] 2xl:min-h-[300px]">
      <div className="bg-[#3b3b3b] grid grid-cols-2 min-h-[400px] rounded-[40px] p-7 gap-9 lg:gap-0 lg:p-14 ">
        <div className="col-span-2 lg:col-span-1 flex flex-col justify-between space-y-8 lg:space-y-0">
          <h2 className="text-[40px] leading-[1] font-bold">Join Our Weekly</h2>

          <p className=" capitalize text-[16px] lg:text-[20px]">
            Get exclusive promotions & updates <br /> straight to your inbox
          </p>

          <div className="xl:w-[400px] w-full overflow-hidden bg-white flex h-[50px] rounded-[30px] pl-3">
            <input
              type="email"
              placeholder="Enter your email here"
              className="h-full w-1/2 flex-grow outline-none flex text-black"
            />

            <Button className="" icon={<CgMail size={20} />}>
              <p className="hidden lg:block">Subscribe</p>
            </Button>
          </div>
        </div>

        <div className="col-span-2  lg:col-span-1 relative ">
          <Image
            src={"/assets/subscribe.png"}
            width={100}
            height={100}
            alt="Subscibe Image"
            unoptimized
            className="w-full h-auto "
          />
          <Image
            src={"/assets/present.png"}
            width={100}
            height={100}
            alt="Present"
            unoptimized
            className="absolute w-[170px] -bottom-20 hidden lg:block -right-10"
          />
        </div>
      </div>
    </Container>
  );
};

export default Subscription;

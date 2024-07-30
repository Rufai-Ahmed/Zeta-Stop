import React from "react";
import { BiRocket } from "react-icons/bi";
import Button from "./re-use/Button";
import Image from "next/image";

const Hero = () => {
  return (
    <main className="2xl:min-h-[800px] xl:min-h-[800px] lg w-[80%] grid grid-cols-2 mx-auto max-w-7xl items-center gap-5 text-white ">
      <div className="space-y-5">
        <h1 className="text-[55px] leading-[1] font-bold">
          Discover ZepaStops Near you & Rest while on your walks, Redeem
          Geo-Drops, Coupons and more
        </h1>
        <p className="font-light text-[20px]">
          Our marketplace; Your journey to better health, community engagement,
          and more money in your wallet starts here. Collect, buy and sell your
          StepPower with more than 20000 partner businesses.
        </p>
        <Button>
          <BiRocket size={20} />7 For Businesses: Become a Partner
        </Button>
        <div className="flex justify-between w-[50%]">
          {[
            {
              b: "390k+",
              p: "Total Steps",
            },
            {
              b: "100k+",
              p: "Users",
            },
            {
              b: "25+",
              p: "Partners",
            },
          ].map((el: { b: string; p: string }, i: number) => (
            <div key={i} className="space-y-1">
              <b>{el.b}</b>
              <p>{el.p}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full  flex justify-end">
        <div className="w-fit rounded-[30px] h-[500px] flex flex-col justify-start  bg-[#3b3b3b]">
          <div className="h-[80%] flex items-center justify-center">
            <Image
              src={"/assets/zeta.png"}
              width={100}
              height={100}
              unoptimized
              className="w-[500px] -mt-1 object-contain "
              alt="Zeta"
            />
          </div>
          <div className="h-[20%] w-full flex justify-center flex-col space-y-3 pl-8">
            <p className="text-[20px]">
              <b>Trekking is Commodity Here</b>
            </p>
            <p>
              <small className="text-[15px]">
                The Zepama Ecosystem, Advancing together.
              </small>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;

import { CarouselItem } from "@/components/ui/carousel";
import { iMarketData } from "@/public/utils/interfaces";
import Image from "next/image";
import React, { FC } from "react";

const MarketCard: FC<iMarketData> = ({ img, name }) => {
  return (
    <CarouselItem className="rounded-[30px] h-[500px] grid grid-rows-10 pl-0 cursor-pointer bg-[#3b3b3b] md:basis-1/2 lg:basis-1/3 ">
      <div className="row-span-7 w-full flex items-center justify-center ">
        <Image
          src={img!}
          width={100}
          height={100}
          unoptimized
          className="w-full h-full rounded-t-[30px] object-cover object-center "
          alt={name!}
        />
      </div>
      <div className="row-span-3 w-full px-8 py-6 justify-between flex flex-col">
        <div>
          <p className="text-[20px]">
            <b>{name}</b>
          </p>
          <p>
            <small className="ml-4 font-mono text-[15px]">Zepama tech</small>
          </p>
        </div>
        <div className="flex items-start justify-between ">
          <div className="space-y-1">
            <p className="text-[14px] text-[#b8b8b8]">
              {" "}
              <small>Price</small>
            </p>
            <p className="">1.63 Zpc</p>
          </div>
          <div className="space-y-1">
            <p className="text-[14px] text-[#b8b8b8]">
              {" "}
              <small>GB</small>
            </p>
            <p className="">1</p>
          </div>
        </div>
      </div>
    </CarouselItem>
  );
};

export default MarketCard;

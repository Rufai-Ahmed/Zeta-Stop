import React from "react";
import Container from "./re-use/Container";
import Button from "./re-use/Button";
import { BsEye } from "react-icons/bs";
import MarketCard from "./re-use/MarketCard";
import { marketData } from "@/public/data/data";
import { iMarketData } from "@/public/utils/interfaces";
import Image from "next/image";

const MarketPlace = () => {
  return (
    <>
      <Container className="space-y-10">
        <div className="flex flex-wrap lg:flex-nowrap space-y-3 lg:space-y-0 justify-between">
          <div className="space-y-2">
            <h2 className="text-[30px] font-bold">MarketPlace</h2>
            <p className="text-[15px]">Spend Your Zepacoins(Zpc)</p>
          </div>

          <Button
            className="border-violet-500 border-[3px] px-12 py-[4px] lg:py-0 font-bold rounded-[15px] gap-5 bg-transparent"
            icon={<BsEye className="text-violet-500" size={18} />}
          >
            Location
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-10">
          {marketData.map((el: iMarketData, i: number) => (
            <MarketCard key={i} {...el} />
          ))}
        </div>
      </Container>

      <Image
        src={"/assets/mushroom.png"}
        width={1000}
        height={1000}
        unoptimized
        className="w-full h-[400px] object-cover object-center "
        alt={"Mushroom"}
      />
    </>
  );
};

export default MarketPlace;

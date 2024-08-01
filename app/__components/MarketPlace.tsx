import React from "react";
import Container from "./re-use/Container";
import Button from "./re-use/Button";
import { BsEye } from "react-icons/bs";
import MarketCard from "./re-use/MarketCard";
import { marketData } from "@/public/data/data";
import { iMarketData } from "@/public/utils/interfaces";
import Image from "next/image";
import { Carousel, CarouselContent } from "@/components/ui/carousel";

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

        <Carousel>
          <CarouselContent className="ml-2 gap-5">
            {marketData.map((el: iMarketData, i: number) => (
              <MarketCard key={i} {...el} />
            ))}
          </CarouselContent>
        </Carousel>
      </Container>

      <Image
        src={"/assets/big_zepama.png"}
        width={100}
        height={100}
        unoptimized
        className="w-full h-[900px] object-cover"
        alt="big-zepama"
      />
    </>
  );
};

export default MarketPlace;
